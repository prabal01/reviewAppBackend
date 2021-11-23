const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.getEncyptedPassword = (password) =>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash
}

exports.verifyPassword = (password,hash) =>{
    return bcrypt.compareSync(password, hash); // true
}

exports.getToken=(email,username)=>{
const token = jwt.sign({ username, email }, process.env.JWT_SECRET);
return token

}
