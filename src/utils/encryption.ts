import CryptoJS from 'crypto-js';
import { ENCRYPTION_CONFIG } from '@/constants/storage';

export const encryptAES256 = (data: string): string => {
  try {
    console.log('원본 데이터:', data);
    
    
    const key = CryptoJS.enc.Utf8.parse(ENCRYPTION_CONFIG.SECRET_KEY);
    const encrypted = CryptoJS.AES.encrypt(data, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.ZeroPadding
    });
    const result = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    
    console.log('암호화 결과:', result);
    return result;
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('Failed to encrypt data');
  }
};

export const decryptAES256 = (encryptedData: string): string => {
  try {
    console.log('암호화된 데이터:', encryptedData);
    
    const key = CryptoJS.enc.Utf8.parse(ENCRYPTION_CONFIG.SECRET_KEY);
    
    const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.ZeroPadding
    });
    const decryptedString = decrypted.toString(CryptoJS.enc.Utf8).replace(/\0+$/, '');
    
    if (!decryptedString) {
      throw new Error('Decryption resulted in empty string');
    }
    
    console.log('복호화 결과:', decryptedString);
    return decryptedString;
  } catch (error) {
    console.error('Decryption failed:', error);
    throw new Error('Failed to decrypt data');
  }
};