const mongoose = require('mongoose')
const {Schema} = mongoose;
const dbSchema = new Schema;
// var bcrypt   = require('bcrypt-nodejs');

const UserSchema = new Schema({
      name:{
            type: String,
            required: true
      },
      email:{
            type: String,
            required: true
      },
      password:{
            type: String,
            required: true
      },
      mobile:{
            type: Number,
            required: true
      },
      location:{
            type: String,
            required: true
      },
      date:{
            type: Date,
            default: Date.now
      }
});

// generating a hash
// dbSchema.methods.generateHash = function(password) {
//       return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//   };
  
//   // checking if password is valid
//   dbSchema.methods.validPassword = function(password) {
//       return bcrypt.compareSync(password, this.local.password);
//   };

module.exports = mongoose.model('user',UserSchema);