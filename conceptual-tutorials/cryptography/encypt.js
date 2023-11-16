const crypto = require("crypto");

function encyrptPublicKey(publicKey, message) {
  const bufferNessage = Buffer.from(message, "utf8");
  return crypto.publicEncrypt(publicKey, bufferNessage);
}
function encyrptPrivateKey(publicKey, message) {
  const bufferNessage = Buffer.from(message, "utf8");
  return crypto.privateEncrypt(publicKey, bufferNessage);
}
module.exports.encyrptPublicKey = encyrptPublicKey;
module.exports.encyrptPrivateKey = encyrptPrivateKey;
