import { useEffect, useState } from 'react';
import { isValidTransactionHash } from '../address';
import { fetchTransactionData, TransactionResponse } from '../ethereum';

/**
 * Get transaction data from the blockchain, with a transaction hash.
 *
 * @param {string} transactionHash
 * @return {{ loading: boolean, transactionData?: TransactionResponse }}
 */
export const useTransactionData = (
  transactionHash: string
): { loading: boolean; transactionData?: TransactionResponse } => {
  const [loading, setLoading] = useState(false);
  const [transactionData, setTransactionData] = useState<TransactionResponse | undefined>(undefined);

  useEffect(() => {
    setLoading(false);
    setTransactionData(undefined);

    if (isValidTransactionHash(transactionHash)) {
      setLoading(true);

      fetchTransactionData(transactionHash)
        .then((data) => {
          if (data) {
            setTransactionData(data);
          }
        })
        .catch(() => setTransactionData(undefined))
        .finally(() => setLoading(false));
    }
  }, [transactionHash]);

  return { loading, transactionData };
};
