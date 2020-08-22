export interface ECDSASignature {
  v: number;
  r: bigint;
  s: bigint;
}

/**
 * Get a bigint as Buffer. If a length (in bytes) is specified, the Buffer will be padded to this length.
 *
 * @param {bigint} bigInt
 * @param {number} [length]
 * @return {Buffer}
 */
export const toBuffer = (bigInt: bigint, length?: number): Buffer => {
  const hex = bigInt.toString(16);
  if (length) {
    return Buffer.from(hex.padStart(length * 2, '0'), 'hex');
  }

  return Buffer.from(hex, 'hex');
};

/**
 * Get a buffer as bigint.
 *
 * @param {Buffer} buffer
 * @return {bigint}
 */
export const bufferToBigInt = (buffer: Uint8Array): bigint => {
  const numberToHex = (n: number): string => {
    return ('0' + n.toString(16)).slice(-2);
  };

  return BigInt(`0x${Array.from(buffer).map(numberToHex).join('')}`);
};

export const serialise = ({ v, r, s }: ECDSASignature): Buffer => {
  return Buffer.concat([toBuffer(r, 32), toBuffer(s, 32), Buffer.from([v])]);
};

export const deserialise = (signature: Buffer): ECDSASignature => {
  if (signature.length !== 65) {
    throw new Error('Invalid buffer length');
  }

  const r = bufferToBigInt(signature.subarray(0, 32));
  const s = bufferToBigInt(signature.subarray(32, 64));
  const v = signature[64];

  return { v, r, s };
};
