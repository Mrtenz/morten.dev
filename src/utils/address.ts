const ETHEREUM_ADDRESS_REGEX = /0x[0-9a-fA-F]{40}/;
const TRANSACTION_HASH_REGEX = /0x[0-9a-fA-F]{64}/;

/**
 * Check if a string is a valid Ethereum address.
 *
 * @param {string} address
 * @return {boolean}
 */
export const isValidAddress = (address: string): boolean => {
  return ETHEREUM_ADDRESS_REGEX.test(address);
};

/**
 * Check if a string is a valid transaction hash.
 *
 * @param {string} transactionHash
 * @return {boolean}
 */
export const isValidTransactionHash = (transactionHash: string): boolean => {
  return TRANSACTION_HASH_REGEX.test(transactionHash);
};
