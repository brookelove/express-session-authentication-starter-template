const crypto = require("crypto");
const hash = crypto.createHash("sha256");
const fs = require("fs");
const encrypt = require("./encypt");
const decrypt = require("./decrypt");

const myData = {
  firstName: "Savien",
  lastName: "Love",
  socialSecurityNuber:
    "NO NO NO. Never put personal info in digitally signed message since this form of cryptro does not hide the data!",
};

const myDataString = JSON.stringify(myData);

hash.update(myDataString);
const hashedData = hjas.digest("hex");

const senderPrivateKey = fs.readFileSync(
  __dirname + "/id_rsa_priv.pem",
  "utf8"
);
const signedMessage = encrypt.encyrptPrivateKey(senderPrivateKey, hashedData);
const packageOfDataTSend = {
  algorithm: "sha256",
  originalData: myData,
  signedAndEcryptedData: signedMessage,
};
module.exports.packageOfDataTSend = packageOfDataTSend;
