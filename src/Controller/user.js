const _user = require("../model.js/userModel")
const { getEncyptedPassword, getToken, verifyPassword } = require("../validator/auth")

exports.signup = async (req,res)=>{
    try {
        const {username,email,password} = req.body
        const encryptedPassword = getEncyptedPassword(password)
            const count = await _user.getUserCountByEmail(email)
            if (count==0){
                const saveUser = await _user.saveUserIfNotExist(username,email,encryptedPassword)
                // create token
                const token = getToken(email,username)
                res.status(200).json({res:"user created!",token})
            }else{
                res.status(400).json({err:"Duplicate User",errCode: 400})
            }
        
    } catch (error) {
        res.status(400).json({err:error})
    }

}

exports.signIn = async (req,res) => {
    try {
        const {email, password} = req.body
        const user = await _user.getUserByEmailId(email,password)
        if(verifyPassword(password,user.password)){
            res.status(200).json({res:'login successfully!', token: getToken(email,user.username)})
        }
    } catch (error) {
        res.status(400).json({err:error})
    }
}