import { useEffect, useState } from 'react';
import { isValidAddress } from '../utils/address';
import { fetchContractAbi } from '../utils/etherscan';

/**
 * Fetch contract ABI from Etherscan's API.
 *
 * @param {string} contractAddress
 * @return {{ loading: boolean, contractABI?: string }}
 */
export const useContractAbi = (contractAddress: string): { loading: boolean; contractAbi?: string } => {
  const [loading, setLoading] = useState(false);
  const [contractAbi, setContractAbi] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(false);
    setContractAbi(undefined);

    if (isValidAddress(contractAddress)) {
      setLoading(true);

      fetchContractAbi(contractAddress)
        .then((abi) => {
          if (abi) {
            setContractAbi(abi);
          }
        })
        .catch(() => setContractAbi(undefined))
        .finally(() => setLoading(false));
    }
  }, [contractAddress]);

  return { loading, contractAbi };
};
