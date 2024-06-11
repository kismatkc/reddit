import mongoose,{Schema,Document} from "mongoose"
import bcrypt from "bcryptjs"

export interface IUser extends Document{
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema: Schema = new Schema({
email: {type: String,required: true,unique: true},
  password: {type: String,required: true}
})

UserSchema.pre<IUser>("save",async function(next){

  if(!this.isModified("password")){
    return next()
  }

  const salt =await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
   return next()
  
  
  

  
})




UserSchema.methods.comparePassword = async function (password: string): Promise<boolean>{
  return bcrypt.compare(password,this.password)
}
const User =mongoose.models.User ||    mongoose.model<IUser>("User",UserSchema)


 export default User;



