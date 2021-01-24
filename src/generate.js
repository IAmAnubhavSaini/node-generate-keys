const {generateKeyPairSync, createPrivateKey, createPublicKey} = require("crypto")

const PUBLIC_KEY_ENCODING_TYPE = 'spki'
const PRIVATE_KEY_ENCODING_TYPE = 'pkcs1'
const FORMAT = 'pem'
const CIPHER = 'aes-256-cbc'
const TYPE = 'rsa'

function generateAPair(passphrase) {
    const options = {
        modulusLength: 4096,
        publicKeyEncoding: {type: PUBLIC_KEY_ENCODING_TYPE, format: FORMAT},
        privateKeyEncoding: {type: PRIVATE_KEY_ENCODING_TYPE, format: FORMAT, cipher: CIPHER, passphrase}
    }
    return {...generateKeyPairSync(TYPE, options), options, generatePrivateKey, generatePublicKey} /* {publicKey, privateKey, options, generatePrivateKey, generatePublicKey} */
}

function generatePrivateKey(privateKeyString, passphrase) {
    return createPrivateKey({
        key: privateKeyString,
        format: FORMAT,
        type: PRIVATE_KEY_ENCODING_TYPE,
        cipher: CIPHER,
        passphrase
    })
}

function generatePublicKey(publicKeyString) {
    return createPublicKey({
        key: publicKeyString,
        type: PUBLIC_KEY_ENCODING_TYPE,
        format: FORMAT
    })
}

module.exports = {generateAPair, generatePublicKey, generatePrivateKey}
