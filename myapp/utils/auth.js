const crypto = require("crypto"),
  key = "qqqqqqqqqqqqsrUYKeaWqwakkjsasouy",
  iv = "f0644aa8566bdd13";

function encrypt(data) {
  let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  //cipher.update(data, "utf8", "hex");
  let encryptdata = cipher.update(data, "utf8", "binary");
  encryptdata += cipher.final("binary");
  return encryptdata;
  // return {
  //   iv: iv.toString("hex"),
  //   content: cipher.final().toString("hex"),
  // };
  // return Buffer.concat([cipher.update(data, "utf-8"), cipher.final()]).toString(
  //   "hex"
  // );
}

function decrypt(data) {
  var decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decoded = decipher.update(data, "binary", "utf8");
  decoded += decipher.final("utf8");
  return decoded;
}
module.exports = {
  encrypt,
  decrypt,
};
