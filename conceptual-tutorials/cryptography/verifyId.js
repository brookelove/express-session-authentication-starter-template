const crypto = require("crypto");
const fs = require("fs");
const decrypt = require("./decrypt");
const recievedData = require("./signMessage").packageOfDataTSend;

const hash = crypto.createHash(recievedData.algorithm);
