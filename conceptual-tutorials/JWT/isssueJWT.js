const base64url = require("base64url");
const crypto = require(crypto);
const signitureFunction = crypto.createSign("RSA-SHA256");
const verifyFunction = crypto.createVerify("RSA-SHA256");
const fs = require("fs");

//issuance
const headerObj = {
  alg: "HS256",
  typ: "JWT",
};

const payloadObj = {
  sub: "1234567890",
  name: "John Doe",
  iat: 1516239022,
};

const headerObjString = JSON.stringify(headerObj);
const payloadObjString = JSON.stringify(payloadObj);

const base64urlHeader = base64url(headerObjString);
const base64urlPayload = base64url(payloadObjString);

signiture.write(base64urlHeader + "." + base64urlPayload);
signiture.end();

const PRIV_KEY = fs.readFileSync(__dirname + "/priv_key.pem", "utf8");
const signitureBuffer = signitureFunction.sign(PRIV_KEY, "base64");

//end issuance

//verification

// const JWT =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const jwtParts = JWT.split(".");

const header = jwtParts[0];
const payload = jwtParts[1];
const signiture = jwtParts[2];
const Pub_KEY = fs.readFileSync(__dirname + "/pub_key.pem", "utf8");
verifyFunction.write(header + "." + payload);

const signitureIsValid = verifyFunction.verify(Pub_KEY, signiture, "base64");

// const decodedHeader = base64url.decode(header)
// const decodedPayload = base64url.decode(payload)
// const decodedSigniture = base64url.decode(signiture)

// need to decrypt the signiture
