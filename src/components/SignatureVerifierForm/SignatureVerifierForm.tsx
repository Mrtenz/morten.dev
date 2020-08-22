import React, { FunctionComponent, useState } from 'react';
import { useVerifier } from '../../hooks/useVerifier';
import { deserialise, ECDSASignature } from '../../utils/ecdsa';
import Button from '../Button';
import Input from '../Input';
import Text from '../Text';

const SignatureVerifierForm: FunctionComponent = () => {
  const { loading, address, verify } = useVerifier();

  const [message, setMessage] = useState<string>('');
  const [signature, setSignature] = useState<Partial<ECDSASignature>>();
  const [serialisedSignature, setSerialisedSignature] = useState<string>('');

  const handleChangeSerialisedSignature = (newSignature: string) => {
    setSerialisedSignature(newSignature);
    try {
      setSignature(deserialise(Buffer.from(newSignature.slice(2), 'hex')));
    } catch (e) {
      // noop
    }
  };

  const handleChangeSignature = (value: string, name: 'v' | 'r' | 's') => {
    setSignature((state) => {
      if (value === '') {
        const { [name]: _, ...rest } = state as ECDSASignature;
        return {
          ...rest
        };
      }

      try {
        if (name === 'v') {
          const v = Number(value);
          if (isNaN(v)) {
            throw new Error('v is not a number');
          }

          return {
            ...state,
            v
          };
        }

        return {
          ...state,
          [name]: BigInt(`0x${value}`)
        };
      } catch {
        return state;
      }
    });
  };

  const handleClick = () => {
    if (message && signature?.v && signature.r && signature.s) {
      // TODO: Handle errors
      verify(message, signature as ECDSASignature)
        // tslint:disable-next-line
        .catch(console.error);
    }
  };

  return (
    <>
      <Input as="textarea" label="Message" value={message} onChange={setMessage} />
      <Input label="Signature" value={serialisedSignature} onChange={handleChangeSerialisedSignature} />
      <Text>Or...</Text>
      <Input
        label="V (number)"
        name="v"
        value={(signature?.v && String(signature?.v)) || ''}
        onChange={handleChangeSignature}
      />
      <Input label="R (bytes32)" name="r" value={signature?.r?.toString(16) ?? ''} onChange={handleChangeSignature} />
      <Input label="S (bytes32)" name="s" value={signature?.s?.toString(16) ?? ''} onChange={handleChangeSignature} />

      {!loading && address && <Text>Recovered address: {address}</Text>}

      <Button onClick={handleClick} disabled={loading}>
        Verify
      </Button>
    </>
  );
};

export default SignatureVerifierForm;
