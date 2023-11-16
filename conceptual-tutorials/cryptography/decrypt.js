const crypto = require("crypto");

function decyrptPrivateKey(privateKey, encryptedMessage) {
  return crypto.privateDecrypt(privateKey, encryptedMessage);
}
function decyrptPublicKey(privateKey, encryptedMessage) {
  return crypto.puiblicDecrypt(privateKey, encryptedMessage);
}

module.exports.decyrptPublicKey = decyrptPrivateKey;
module.exports.decyrptPublicKey = decyrptPublicKey;
