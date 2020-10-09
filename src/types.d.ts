/**
 * Required to import SVGs and PNGs in TypeScript files.
 */
declare module '*.png';
declare module '*.svg' {
  import { HTMLAttributes } from 'react';

  const value: React.ComponentType<HTMLAttributes<SVGElement>>;
  export default value;
}

/**
 * Declarations for keccak module.
 */
declare module 'keccak' {
  type Algorithm =
    | 'keccak224'
    | 'keccak256'
    | 'keccak384'
    | 'keccak512'
    | 'sha3-224'
    | 'sha3-256'
    | 'sha3-384'
    | 'sha3-512'
    | 'shake128'
    | 'shake256';

  export default function createKeccakHash(algorithm: Algorithm): Hash;
}
