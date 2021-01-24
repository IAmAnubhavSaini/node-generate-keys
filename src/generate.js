const {generateKeyPairSync} = require("crypto")

const PUBLIC_KEY_ENCODING_TYPE = 'spki'
const PRIVATE_KEY_ENCODING_TYPE = 'pkcs1'
const FORMAT = 'pem'
const CIPHER = 'aes-256-cbc'

function generateAPair(passphrase) {
    const options = {
        modulusLength: 4096,
        publicKeyEncoding: {type: PUBLIC_KEY_ENCODING_TYPE, format: FORMAT},
        privateKeyEncoding: {type: PRIVATE_KEY_ENCODING_TYPE, format: FORMAT, cipher: CIPHER, passphrase}
    }
    return generateKeyPairSync('rsa', options) /* {publicKey, privateKey} */
}

module.exports = generateAPair
