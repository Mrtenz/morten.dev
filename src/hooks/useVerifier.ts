import { useState } from 'react';
import { decodeData, encodeInputData, keccak256 } from '../utils/abi';
import { ECDSASignature } from '../utils/ecdsa';
import { call } from '../utils/ethereum';

const CONTRACT_ADDRESS = '0xcf3c059a249183a07a9dd9d4cb88e1a93e7311e0';
const RECOVER_ADDRESS = {
  inputs: [
    { name: 'hash', type: 'bytes32' },
    {
      name: 'v',
      type: 'uint8'
    },
    { name: 'r', type: 'bytes32' },
    {
      name: 's',
      type: 'bytes32'
    }
  ],
  name: 'recoverAddress',
  outputs: [{ name: 'address', type: 'address' }],
  stateMutability: 'pure',
  type: 'function' as const
};

type VerifyFunction = (message: string, signature: ECDSASignature) => Promise<void>;

export const useVerifier = (): { loading: boolean; verify: VerifyFunction; address?: string } => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState<string>();

  const verify: VerifyFunction = async (message, signature) => {
    setLoading(true);

    try {
      const data = encodeInputData(RECOVER_ADDRESS, {
        hash: `0x${keccak256(message)}`,
        v: String(signature.v),
        r: `0x${signature.r.toString(16)}`,
        s: `0x${signature.s.toString(16)}`
      });

      const result = await call(CONTRACT_ADDRESS, data);
      const recoveredAddress = decodeData<string>(RECOVER_ADDRESS, result);

      setAddress(recoveredAddress);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    verify,
    address
  };
};
