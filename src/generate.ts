const {generateKeyPairSync, createPrivateKey, createPublicKey} = require("crypto");

// Simple Public Key Infrastructure
const PUBLIC_KEY_ENCODING_TYPE = 'spki';

// Public Key Cryptography Standard #1
// 'pkcs1' | 'pkcs8' | 'sec1' // ignored if format is not 'der'
const PRIVATE_KEY_ENCODING_TYPE = 'pkcs1';

// 'pem'| 'der' | 'jwk'; default 'pem'
const FORMAT = 'pem';
const CIPHER = 'aes-256-cbc';
const TYPE = 'rsa';

function generateAPair(passphrase: string) {
    const options = {
        modulusLength: 4096,
        publicKeyEncoding: {type: PUBLIC_KEY_ENCODING_TYPE, format: FORMAT},
        privateKeyEncoding: {type: PRIVATE_KEY_ENCODING_TYPE, format: FORMAT, cipher: CIPHER, passphrase}
    };
    return {...generateKeyPairSync(TYPE, options), options, generatePrivateKey, generatePublicKey}; /* {publicKey, privateKey, options, generatePrivateKey, generatePublicKey} */
}

function generatePrivateKey(privateKeyString: string, passphrase: string) {
    return createPrivateKey({
        key: privateKeyString,
        format: FORMAT,
        type: PRIVATE_KEY_ENCODING_TYPE,
        cipher: CIPHER,
        passphrase
    });
}

function generatePublicKey(publicKeyString: string) {
    return createPublicKey({
        key: publicKeyString,
        type: PUBLIC_KEY_ENCODING_TYPE,
        format: FORMAT
    });
}

export {generateAPair, generatePublicKey, generatePrivateKey};
