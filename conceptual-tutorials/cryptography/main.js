const fs = require("fs");
const encrypt = require("./encypt");

const publicKey = fs.readFileSync(__dirname + "/id_rsa_pub.pem", "utf8");

const encrpytedMessage = encrypt.encyrptPublicKey(
  publicKey,
  "Super secret message"
);
const decyrptPublicKey = encrypt.decyrptPublicKey(publicKey, privateKey);

console.log(encrpytedMessage.toString());
