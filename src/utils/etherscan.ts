const ETHERSCAN_API = 'https://api.etherscan.io/api';
export const ETHERSCAN_API_TOKEN = 'MGW1DT76954AMV3FGFT3RUII8K26QKAZZU';

interface EtherscanResponse {
  status: '0' | '1';
  message: string;
  result: string;
}

/**
 * Fetch the contract ABI for a contract. Returns the ABI as string, or `undefined` if the ABI could not be fetched.
 *
 * @param {string} contractAddress
 * @return {Promise<string | undefined>}
 */
export const fetchContractAbi = async (contractAddress: string): Promise<string | undefined> => {
  const response = await fetch(
    `${ETHERSCAN_API}?module=contract&action=getabi&address=${contractAddress}&apikey=${ETHERSCAN_API_TOKEN}`
  );
  if (!response.ok) {
    return undefined;
  }

  const json = (await response.json()) as EtherscanResponse;
  if (json.status === '0') {
    return undefined;
  }

  return json.result;
};
