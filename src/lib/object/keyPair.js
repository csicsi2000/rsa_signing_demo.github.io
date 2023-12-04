/**
 * Represents a person.
 * @class
 */
export class KeyPair{
    /**
 * Represents a book.
 * @constructor
 * @param {string} publicKey - public key
 * @param {string} privateKey - private key
 */
    constructor(publicKey,privateKey ){
        this.publicKey = publicKey
        this.privateKey  = privateKey 
    }
}