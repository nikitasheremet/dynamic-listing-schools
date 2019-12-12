const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();

// aws.config.credentials = new aws.CognitoIdentityCredentials({
//   IdentityPoolId: "us-east-1:9d12867c-9895-42d7-acb1-01ddacd5e15b"
// });

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET,
  accessKeyId: process.env.AWS_ACCESS,
  region: "us-east-1"
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    acl: "public-read",
    s3,
    bucket: "dynamic-list-pictures",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: "TESTING METADATA" });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;
