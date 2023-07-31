import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true,'Email Required'],
  },
  password: {
    type: String,
    required: [true,'Password Required'],
  },
  about: String,
  ProfileURL: String,
//   address: {
//     street: String,
//     city: String,
//     country: String,
//     pinCode: Number,
//   }
});

export const user = mongoose.models.users || mongoose.model("users",userSchema)
