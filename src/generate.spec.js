const {generateKeys} = require('./generate')
const {publicEncrypt, privateDecrypt} = require('crypto')

describe('generateKeys', () => {
    it('encrypts and decrypts using returned values', () => {
        const passphrase = 'nani?'
        const message = `it's over 9000!!!`
        const {publicKey, privateKey, options, generatePrivateKey, generatePublicKey} = generateKeys(passphrase)
        const encrypted = publicEncrypt(publicKey, Buffer.from(message))
        const decrypted = privateDecrypt(generatePrivateKey(Buffer.from(privateKey.toString()), passphrase), encrypted)
        expect(decrypted.toString()).toEqual(message)
    })
    it('encrypts and decrypts using returned values and generatePublicKey', () => {
        const passphrase = 'nani?'
        const message = `it's over 9000!!!`
        const {publicKey, privateKey, options, generatePrivateKey, generatePublicKey} = generateKeys(passphrase)
        const generatedPublicKey = generatePublicKey(publicKey.toString())
        const encrypted = publicEncrypt(generatedPublicKey, Buffer.from(message))
        const decrypted = privateDecrypt(generatePrivateKey(Buffer.from(privateKey.toString()), passphrase), encrypted)
        expect(decrypted.toString()).toEqual(message)
    })
})
