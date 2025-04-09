import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  age: Number,
});

const User = mongoose.model("User", userSchema);

export default User;
