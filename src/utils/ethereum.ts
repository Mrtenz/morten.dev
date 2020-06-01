const JSONRPC_PROVIDER = 'https://mainnet.infura.io/v3/b53ee8e579c444d186a259f7f5e3f6e0';

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
export const sendJsonRpc = async <T extends object>(method: string, params: string[]): Promise<ResponseData<T>> => {
  const response = await fetch(JSONRPC_PROVIDER, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method,
      params,
    }),
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
