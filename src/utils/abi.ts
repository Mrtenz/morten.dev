import { defaultAbiCoder } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import createKeccakHash from 'keccak';

export interface ABIMethod {
  name: string;
  type: 'constructor' | 'event' | 'function';
  stateMutability: string;
  constant?: boolean;
  inputs: Array<{
    name: string;
    type: string;
  }>;
  outputs: Array<{
    name: string;
    type: string;
  }>;
}

/**
 * Returns the Keccak-256 hash of a string, as a hexadecimal string.
 *
 * @param {string} input
 * @return {string}
 */
export const keccak256 = (input: string): string => {
  return createKeccakHash('keccak256').update(input).digest().toString('hex');
};

/**
 * Get the method signature of an ABI method. The signature is returned as hexadecimal string.
 *
 * @param {ABIMethod} abiMethod
 * @return {string}
 */
export const getMethodSignature = (abiMethod: ABIMethod): string => {
  const types = abiMethod.inputs.map((input) => input.type).join(',');
  const signature = `${abiMethod.name}(${types})`;

  return keccak256(signature).slice(0, 8);
};

/**
 * Get all callable methods from an array of ABI methods.
 *
 * @param {ABIMethod[]} abiMethods
 * @return {ABIMethod[]}
 */
export const getCallableMethods = (abiMethods: ABIMethod[]): ABIMethod[] => {
  return abiMethods.filter((abiMethod) => abiMethod.type === 'function').filter((abiMethod) => !abiMethod.constant);
};

/**
 * Encode input data with the ABI specified.
 *
 * @param {ABIMethod} method
 * @param {Record<string, string>} data
 * @return {string}
 */
export const encodeInputData = (method: ABIMethod, data: { [key: string]: string }): string => {
  const types = method.inputs.map((input) => input.type);

  return `0x${getMethodSignature(method)}${defaultAbiCoder.encode(types, Object.values(data)).slice(2)}`;
};

/**
 * Decode output data with the ABI specified.
 *
 * @template T
 * @param {ABIMethod} method
 * @param {string} data
 * @return {T}
 */
export const decodeData = <T>(method: ABIMethod, data: string): T => {
  const types = method.outputs.map((output) => output.type);

  return (defaultAbiCoder.decode(types, data) as unknown) as T;
};

interface DecodedData {
  method: string;
  parameters: Array<{
    name: string;
    type: string;
    value: string | number;
  }>;
}

/**
 * Decode input data with the raw JSON contract ABI and input data strings. Returns the decoded input data, or
 * `undefined` if the data cannot be decoded.
 *
 * @param {string} contractABI
 * @param {string} inputData
 * @return {DecodedData | undefined}
 */
export const decodeInputData = (contractABI: string, inputData: string): DecodedData | undefined => {
  const abiObject = JSON.parse(contractABI) as ABIMethod[];

  const methodSignature = inputData.slice(2, 10);
  const method = getCallableMethods(abiObject).find((abiMethod) => getMethodSignature(abiMethod) === methodSignature);

  if (method) {
    const types = method.inputs.map((input) => input.type);
    const data = inputData.slice(10);

    const decoded = defaultAbiCoder
      .decode(types, `0x${data}`)
      .map((value) => (value instanceof BigNumber ? value.toString() : value));

    const parameters = method.inputs.map((input, index) => {
      const value = decoded[index];
      if (!value) {
        throw new Error('Invalid input data');
      }

      return {
        name: input.name,
        type: input.type,
        value
      };
    });

    return {
      method: method.name,
      parameters
    };
  }

  return undefined;
};
