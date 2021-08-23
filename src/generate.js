"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePrivateKey = exports.generatePublicKey = exports.generateAPair = void 0;
var _a = require("crypto"), generateKeyPairSync = _a.generateKeyPairSync, createPrivateKey = _a.createPrivateKey, createPublicKey = _a.createPublicKey;
// Simple Public Key Infrastructure
var PUBLIC_KEY_ENCODING_TYPE = 'spki';
// Public Key Cryptography Standard #1
// 'pkcs1' | 'pkcs8' | 'sec1' // ignored if format is not 'der'
var PRIVATE_KEY_ENCODING_TYPE = 'pkcs1';
// 'pem'| 'der' | 'jwk'; default 'pem'
var FORMAT = 'pem';
var CIPHER = 'aes-256-cbc';
var TYPE = 'rsa';
function generateAPair(passphrase) {
    var options = {
        modulusLength: 4096,
        publicKeyEncoding: { type: PUBLIC_KEY_ENCODING_TYPE, format: FORMAT },
        privateKeyEncoding: { type: PRIVATE_KEY_ENCODING_TYPE, format: FORMAT, cipher: CIPHER, passphrase: passphrase }
    };
    return __assign(__assign({}, generateKeyPairSync(TYPE, options)), { options: options, generatePrivateKey: generatePrivateKey, generatePublicKey: generatePublicKey }); /* {publicKey, privateKey, options, generatePrivateKey, generatePublicKey} */
}
exports.generateAPair = generateAPair;
function generatePrivateKey(privateKeyString, passphrase) {
    return createPrivateKey({
        key: privateKeyString,
        format: FORMAT,
        type: PRIVATE_KEY_ENCODING_TYPE,
        cipher: CIPHER,
        passphrase: passphrase
    });
}
exports.generatePrivateKey = generatePrivateKey;
function generatePublicKey(publicKeyString) {
    return createPublicKey({
        key: publicKeyString,
        type: PUBLIC_KEY_ENCODING_TYPE,
        format: FORMAT
    });
}
exports.generatePublicKey = generatePublicKey;
//# sourceMappingURL=generate.js.map