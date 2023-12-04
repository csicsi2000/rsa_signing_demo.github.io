import { ValidationStatus } from "./document-status"

/**
 * Represents a person.
 * @class
 */
export class SignedDocument{
    /**
 * Represents a book.
 * @constructor
 * @param {string} id - id
 * @param {string} text - The title of the book.
 * @param {string} signature - The author of the book.
 * @param {string} publicKey - The public key.
 * @param {ValidationStatus} status - The status of the book.
 */
    constructor(id,text, signature,publicKey,status){
        this.id = id
        this.text = text
        this.signature = signature
        this.publicKey = publicKey
        this.status = status
    }
}