import mongoose, {Schema, Document } from "mongoose"

export interface IUser extends Document {
  email: string
  password: string
  nameuser: string
  namelocal: string
  confirmed: boolean
}

const userSchema : Schema = new Schema({
email:{
    type: String,
    required: true,
    lowercase: true,
    unique: true
},
password:{
    type: String,
    required: true,
    
},
nameuser:{
    type: String,
    required: true,
    },

namelocal:{
    type: String,
    required: true,
    },

confirmed:{
    type: String,
    required: true,
    }
})

const User = mongoose.model<IUser>('User', userSchema)
export default User