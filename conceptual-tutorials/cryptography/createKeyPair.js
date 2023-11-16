const crypto = require("crypto");
const fs = require("fs");

function genKeyPair() {
  // generates object where the keys are stored in properties `private` and `public`
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096, // bits - standard for RSA keys
    publicKeyEncoding: {
      type: "pkcs1", //Public Key Cryptography standads 1
      format: "pem", //most common formating choice
    },
    privateEncoding: {
      type: "pkcs1", //Public Key Cryptography standads 1
      format: "pem", //most common formating choice
    },
  });
  // need to finish
}
