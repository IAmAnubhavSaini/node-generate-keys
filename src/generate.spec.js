"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generate_1 = require("./generate");
var crypto_1 = require("crypto");
describe('generateKeys', function () {
    it('encrypts and decrypts using returned values', function () {
        var passphrase = 'nani?';
        var message = "it's over 9000!!!";
        var _a = generate_1.generateAPair(passphrase), publicKey = _a.publicKey, privateKey = _a.privateKey, generatePrivateKey = _a.generatePrivateKey;
        var encrypted = crypto_1.publicEncrypt(publicKey, Buffer.from(message));
        var decrypted = crypto_1.privateDecrypt(generatePrivateKey(Buffer.from(privateKey.toString()), passphrase), encrypted);
        expect(decrypted.toString()).toEqual(message);
    });
    it('encrypts and decrypts using returned values and generatePublicKey', function () {
        var passphrase = 'nani?';
        var message = "it's over 9000!!!";
        var _a = generate_1.generateAPair(passphrase), publicKey = _a.publicKey, privateKey = _a.privateKey, generatePrivateKey = _a.generatePrivateKey, generatePublicKey = _a.generatePublicKey;
        var generatedPublicKey = generatePublicKey(publicKey.toString());
        var encrypted = crypto_1.publicEncrypt(generatedPublicKey, Buffer.from(message));
        var decrypted = crypto_1.privateDecrypt(generatePrivateKey(Buffer.from(privateKey.toString()), passphrase), encrypted);
        expect(decrypted.toString()).toEqual(message);
    });
});
//# sourceMappingURL=generate.spec.js.map