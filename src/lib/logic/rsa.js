import forge from 'node-forge'
import { KeyPair } from "$lib/object/keyPair";

var rsa = forge.pki.rsa;

/**
 * Generates RSA key pair (public and private keys).
 * @param {number} bits - The number of bits for the key pair (e.g., 2048).
 * @returns {KeyPair} - An object containing publicKey and privateKey.
 */
export function generateRSAKeyPair(bits) {
  const keyPair = rsa.generateKeyPair({ bits })
  const publicKey = forge.pki.publicKeyToPem(keyPair.publicKey)
  const privateKey = forge.pki.privateKeyToPem(keyPair.privateKey)

  return new KeyPair(publicKey,privateKey)
}

/**
 * Encodes a message using RSA private key.
 * @param {string} message - The message to encode.
 * @param {string} privateKeyPem - The RSA private key in PEM format.
 * @returns {string} - The encoded message.
 */
export function encodeMessage(message, privateKeyPem) {
    let privateKey = forge.pki.privateKeyFromPem(privateKeyPem)
    let md = forge.md.sha1.create();
    console.log(message)
    md.update(message, 'utf8');
    var signature = privateKey.sign(md);

    return signature;
}

/**
 * Validates an encoded message using RSA public key.
 * @param {string} signature - The original message for validation.
 * @param {string} publicKeyPem - The RSA public key in PEM format.
 * @param {string} originalMessage - The original message for validation.
 * @returns {boolean} - True if the message is valid, false otherwise.
 */
export function validateMessage(signature, publicKeyPem, originalMessage) {
  let md = forge.md.sha1.create();
  md.update(originalMessage, 'utf8');
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem)
  var verified = publicKey.verify(md.digest().bytes(), signature);
  console.log("Verification status: " + verified)

  return verified
}


let message = "test"
let pair = generateRSAKeyPair(512)
let res = encodeMessage("test",pair.privateKey)
let fin = validateMessage(res,pair.publicKey,message)