import { JsonRpcProvider } from '@ethersproject/providers';

export const JSONRPC_PROVIDER = 'https://mainnet.infura.io/v3/b53ee8e579c444d186a259f7f5e3f6e0';
export const ETHERS_PROVIDER = new JsonRpcProvider(JSONRPC_PROVIDER);

interface ResponseData<T> {
  jsonrpc: '2.0';
  id: number;
  result: T;
}

/**
 * Send a JSONRPC request with the method and params specified. Returns the raw JSONRPC response as object.
 *
 * @template T
 * @param {string} method
 * @param {string[]} params
 * @return {Promise<ResponseData<T>>}
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const sendJsonRpc = async <T extends string | object>(
  method: string,
  params: Array<string | Record<string, unknown>>
): Promise<ResponseData<T>> => {
  const response = await fetch(JSONRPC_PROVIDER, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method,
      params
    })
  });

  if (!response.ok) {
    throw new Error('Failed to fetch response data');
  }

  return response.json();
};

export interface TransactionResponse {
  to?: string;
  input: string;
}

/**
 * Get transaction data from a transaction hash.
 *
 * @param {string} transactionHash
 * @return {Promise<TransactionResponse>}
 */
export const fetchTransactionData = async (transactionHash: string): Promise<TransactionResponse> => {
  const { result } = await sendJsonRpc<TransactionResponse>('eth_getTransactionByHash', [transactionHash]);
  return result;
};

export type CallResponse = string;

export const call = async (to: string, data: string): Promise<CallResponse> => {
  const { result } = await sendJsonRpc<CallResponse>('eth_call', [
    {
      to,
      data
    },
    'latest'
  ]);

  return result;
};
