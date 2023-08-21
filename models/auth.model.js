const {Schema,model, default:mongoose}=require("mongoose");

const authSchema =new Schema(
    {
        email:String,
        password :String,
    }
)

const AuthModel=model("auth",authSchema);

module.exports={
    AuthModel
}

