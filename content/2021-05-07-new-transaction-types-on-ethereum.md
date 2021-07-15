---
title: New Transaction Types on Ethereum
description: 'A primer on transaction types within Ethereum and the new ones that have recently been introduced to the blockchain.'
slug: new-transaction-types-on-ethereum
datePublished: '2021-05-07'
---

![New transaction types on Ethereum.](assets/new-transaction-types-on-ethereum/1.png)

Ethereum has different transaction types that specify what a transaction should do. For example, sending Ether to an address, deploying a contract, etc.

Before the recent Berlin network upgrade, there were essentially four different transaction "types" in Ethereum:

- Regular transactions with a "to" address, data field, etc.
- Contract deployment transactions without a "to" address where the data field is used for the contract code.
- Transactions with a signature `v` value that does not contain the chain ID (pre-EIP-155).
- Transactions with a signature `v` value that does contain the chain ID.

All these transaction types share the same format, and different Ethereum clients, libraries, and other tools have to analyze each transaction in order to understand what kind of transaction it is. With just these four different transaction types, it adds a lot of complexity and situations that need to be dealt with. You would have to check all the fields in the transaction to see what type of transaction it is. This was especially an issue for different proposals for new kinds of transactions (like meta transactions, multisig transactions, etc.) pre-EIP-2718.

Ethereum now has a new transaction standard that was defined and created by [Micah Zoltu](https://twitter.com/micahzoltu) in [EIP-2718](https://eips.ethereum.org/EIPS/eip-2718): Typed Transaction Envelope, which forms the basis for some new and other yet-to-be-developed features on Ethereum. In this article, we’ll go over some of the standards included in the Berlin upgrade as well as others that will likely be included in the future.

## A standardised transaction envelope

Previously, Ethereum had one format for transactions. Each transaction consists of a nonce, gas price, gas limit, to address, value, data, v, r, and s. These fields are [RLP-encoded](https://eth.wiki/fundamentals/rlp), to look something like this:

```text
RLP([nonce, gasPrice, gasLimit, to, value, data, v, r, s])
```

[EIP-2718](https://eips.ethereum.org/EIPS/eip-2718) defines a new generalised envelope for typed transactions. In the new standard, transactions look like this:

```text
TransactionType || TransactionPayload
```

Where the fields are defined as:

- `TransactionType`: a number between `0` and `0x7f`, for a total of 128 possible transaction types.
- `TransactionPayload`: an arbitrary byte array, defined by the transaction type.

These fields are _concatenated_ (combined) to form a typed transaction. The standard does not describe a format for the transaction payload; it can be any arbitrary series of bytes, encoded with any encoder as defined by the new transaction type (e.g., RLP, [SSZ](https://github.com/ethereum/eth2.0-specs/blob/v0.11.1/ssz/simple-serialize.md), …). Simple byte concatenation was chosen because it's trivial to read the first byte of a byte array without the need for any libraries or tools: You don't need an RLP or SSZ parser to check the transaction type.

This new approach makes it possible for new EIPs to introduce a transaction type without introducing more unnecessary complexity in the existing transaction format, and it makes it a lot easier for the different Ethereum tools (clients, libraries) to distinguish between different transactions.

A good example of this added complexity is [EIP-155](https://eips.ethereum.org/EIPS/eip-155), which introduced replay protection by using the chain ID in transactions. Adding a new field to the transaction parameters would break backwards compatibility, so the chain ID was instead encoded into the recovery parameter of transaction signatures (v), as explained in [my previous article about digital signatures](/posts/the-magic-of-digital-signatures-on-ethereum). With EIP-2718, we can simply define a new transaction type in order to maintain backwards compatibility.

## Backwards compatibility and legacy transactions

A big topic of EIP-2718 is backwards compatibility. EIP-2718 is fully backwards compatible, which means that any existing tools, libraries, (hardware) wallets, and transactions will work with it out of the box, but they will not be able to use the new "features" provided by EIP-2718 (and standards that make use of it). The old transaction format (now called _legacy_ transactions) is still valid for new transactions on the Ethereum network.

The maximum number for a new transaction type is `0x7f`, which was chosen to maintain backwards compatibility with those legacy transactions. RLP-encoded transactions always start with a byte that is larger than or equal to `0xc0`, so typed transactions will never collide with legacy transactions, and it's possible to differentiate between typed and legacy transactions, simply by checking the first byte.

EIP-2718 by itself does not define any transaction types, but there are some proposals that use the new standard:

- [EIP-1559: Fee market change for ETH 1.0 chain](https://eips.ethereum.org/EIPS/eip-1559). I'm sure you've heard of this EIP by now.
- [EIP-2711: Sponsored, expiring and batch transactions](https://eips.ethereum.org/EIPS/eip-2711), also created by Micah Zoltu, which is the reason why EIP-2718 was created.
- [EIP-2930: Optional access lists](https://eips.ethereum.org/EIPS/eip-2930).

Some of these standards will be explained in further detail below.

## Why new transaction types?

New transaction types can enable integrations of functionality that would otherwise be handled through Solidity contracts, or third-party solutions. Take expiring transactions for example. In existing solutions, you can send funds to a Solidity contract, sign a transaction, and send that transaction to a specialised node in order for the transaction to have extra parameters, like an expiry date. The node then handles sending the transaction and makes sure it’s executed before the set expiry date, or else the transaction is not broadcast. Some dApps and contracts (e.g., Uniswap) have this functionality built-in, but for most transactions this is not easily achievable.

EIP-2711 adds this functionality _natively_ to the Ethereum network while maintaining backwards compatibility with legacy-type transactions (as explained in a section above). It does not require smart contracts or specialised nodes to function. Currently, EIP-2711 is still a draft, however, and it’s not clear if the EIP will be added to the Ethereum network any time soon. It may be split into multiple smaller EIPs (like [EIP-3074](https://eips.ethereum.org/EIPS/eip-3074)) instead.

### New transaction format of EIP-1559

In EIP-1559, the way gas works is changed significantly. Instead of paying all gas to miners, a part of the gas is burned instead. We won't go into detail on all the changes in EIP-1559, but it does specify a new transaction format:

```text
0x02 || RLP([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data, accessList, signatureYParity, signatureR, signatureS])
```

The most notable changes are:

- The gas price has been replaced with "max _priority_ fee per gas" and "max fee per gas."
- The chain ID is encoded separately rather than being included in the signature `v` value. This essentially replaces EIP-155 with a simpler implementation.
- The signature `v` value is now a simple parity bit ("signature Y parity"), which is either 0 or 1, depending on which point on the elliptic curve should be used.

EIP-1559 also provides a way to specify access lists based on EIP-2930. This can reduce the gas costs for transactions.

Since EIP-1559 has significant changes to how gas fees work, it is not directly compatible with legacy transactions. To maintain backwards compatibility, EIP-1559 describes a way to upgrade legacy transactions to EIP-1559-compatible transactions. It does this by using the legacy gas price as both the max priority fee per gas and the max fee per gas.

### Native meta transactions and batch transactions

Meta transactions have been a thing for a few years, but so far have always required smart contracts. Like with expiring transactions, this required sending Ether to a smart contract, and the contract must be specifically made to support meta transactions.

EIP-2711 makes native meta transactions (called sponsored transactions) and batch transactions possible, without the need for smart contracts. A new transaction format is defined, with a transaction type of `0x02` (though this will likely be changed, as EIP-1559 uses the same transaction type). Transactions look like this:

```text
0x02 || RLP([...SenderPayload, ...SenderSignature, ...GasPayerPayload, ...GasPayerSignature])
```

Basically, EIP-2711 includes an (optional) payload and signature of the _gas payer_ — the account which will be used to pay for the gas fees of the transaction. This makes it possible to send, for example, ERC-20 tokens from an address, without that address ever holding any Ether.

The sender payload, signature, etc. are defined based on a transaction subtype (1 to 4). For example, for a transaction type of `1`, the sender payload is defined as:

```text
[1, ChildTransaction[], nonce, ChainId, ValidUntil, gasLimit, gasPrice]
```

and `ChildTransaction` is defined as `[to, value, data]`. This makes it possible to specify multiple to addresses, values, and data in a single transaction. This can for example be used to call ERC-20’s `approve` and `transferFrom` in a single transaction.

For a detailed explanation of all the transaction subtypes available in EIP-2711, I recommend that you read [the specification itself](https://eips.ethereum.org/EIPS/eip-2711).

## Conclusion

Typed transactions open up a lot of possibilities on the Ethereum network. They can be created without adding a significant amount of complexity to Ethereum clients, libraries, and other tools available.

Currently, new transaction types are not widely used yet, since the EIP was only recently included in the network, but there are some exciting EIPs in development, like EIP-2711 which adds features like expiring transactions, batch transactions, and sponsored transactions (a.k.a., meta transactions). Other EIPs can easily be created now that it’s possible to define new transaction types on Ethereum.
