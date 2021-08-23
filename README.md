# node-generate-keys

Predefined keys generated for given passphrase; returns {privateKey, publicKey}

## Encrypt and decrypt example #1

```javascript

const generateKeys = require('@f0c1s/generate-keys')
const {publicEncrypt, privateDecrypt} = require('crypto')
const passphrase = 'nani?'
const message = `it's over 9000!!!`
const {publicKey, privateKey, options, generatePrivateKey, generatePublicKey} = generateKeys(passphrase)
const encrypted = publicEncrypt(publicKey, Buffer.from(message))
const decrypted = privateDecrypt(generatePrivateKey(Buffer.from(privateKey.toString()), passphrase), encrypted)

```

## Encrypt and decrypt example #2

```javascript

const generateKeys = require('@f0c1s/generate-keys')
const {publicEncrypt, privateDecrypt} = require('crypto')
const passphrase = 'nani?'
const message = `it's over 9000!!!`
const {publicKey, privateKey, options, generatePrivateKey, generatePublicKey} = generateKeys(passphrase)
const generatedPublicKey = generatePublicKey(publicKey.toString())
const encrypted = publicEncrypt(generatedPublicKey, Buffer.from(message))
const decrypted = privateDecrypt(generatePrivateKey(Buffer.from(privateKey.toString()), passphrase), encrypted)

```

## Using module in express app

[blog post](https://learning-everything-about-programming.blogspot.com/2021/01/generate-pair-of-cryptographic-keys.html)
