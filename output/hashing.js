const crypto = require("crypto");
console.log("\n MD5 Hash: "  );
const md5Hash = crypto.createHash("md5").update("password123").digest("hex");

console.log("input: password123");
console.log("MD5 HashPassword: ", md5Hash);


const sha256Hash = crypto
.createHash("sha256")
.update("password123")
.digest("hex");
console.log("input: password123");
console.log("SHA256 HashedPassword:",sha256Hash);
const sha512Hash = crypto
.createHash("sha512")
.update("password123")
.digest("hex");
console.log("input: password123");
console.log("SHA512 HashedPassword:",sha512Hash);