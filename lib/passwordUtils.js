const crypto = require("crypto");

function genPassword(password) {
  // randomness to hash plain text password
  var salt = crypto.randomBytes(32).toString("hex");
  var genHash = crypto
    .pbkdf2(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: genHash,
  };
}
function validPassword(password, hash, salt) {
  var hashVerify = crypto
    .pbkdf2(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;
