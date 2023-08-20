import * as crypto from 'crypto'
import { appConfig } from '../app.config'

const generateBufferFromString = (text: string, length: number) => {
  const hash = crypto.createHash('sha256')
  hash.update(text)
  return hash.digest().subarray(0, length)
}

const secretKey = generateBufferFromString(appConfig.token.secret, 32)
const initializationVector = generateBufferFromString(
  appConfig.token.vector,
  16,
)

export const encrypt = (text: string) => {
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    secretKey,
    initializationVector,
  )
  let encrypted = cipher.update(text, 'utf-8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

export const decrypt = (encryptedText: string) => {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    secretKey,
    initializationVector,
  )
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8')
  decrypted += decipher.final('utf-8')
  return decrypted
}
