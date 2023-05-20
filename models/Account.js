const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const dbSchema = new Schema;

const accountSchema = new Schema(
{
      email:{
            type: String,
            required: true
      },
      password:{
            type: String,
            required: true
      },
      role:{
            type: String,
            enum:["ROLE_USER", "ROLE_ADMIN", "ROLE_OWNER"],
            required: true,
      },
      accountVerifyToken: String,
      accountVerifyTokenExpiration: Date,
      isVerified:{
            type: Boolean,
            default: false,
      },
    },
      {timestamp: true}
);

module.exports = mongoose.model('Account',accountSchema);