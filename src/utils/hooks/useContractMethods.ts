import { useEffect, useState } from 'react';
import { ABIMethod, getCallableMethods } from '../abi';

/**
 * Get all callable contract methods for a raw ABI string.
 *
 * @param {string} contractAbi
 * @return {ABIMethod[]}
 */
export const useContractMethods = (contractAbi: string): ABIMethod[] => {
  const [methods, setMethods] = useState<ABIMethod[]>([]);

  useEffect(() => {
    setMethods([]);

    try {
      const parsedAbi = JSON.parse(contractAbi) as ABIMethod[];
      const callableMethods = getCallableMethods(parsedAbi);
      setMethods(callableMethods);
    } catch {
      // noop
    }
  }, [contractAbi]);

  return methods;
};
