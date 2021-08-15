import { jwtPayload } from "@@components";
import { jwt } from "@config/globals";
import { sign } from "jsonwebtoken";
import { Document, model, Model, Schema, Types } from "mongoose";
import mongooseLeanId from "mongoose-lean-id";

export interface IUser {
  email: string;
}

export interface IUserDocument extends IUser, Document {
  _id: Types.ObjectId;
  id: string;
  token(): Promise<string>;
}

const userSchema = new Schema<IUserDocument>(
  {
    email: {
      type: String,
      match: /^\S+@\S+\.\S+$/,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
  },
  { timestamps: true },
);

userSchema.plugin(mongooseLeanId);
userSchema.set("toObject", { versionKey: false });

/**
 * Signs the user id into a JWT
 */

userSchema.methods.token = async function token() {
  const jwtPayload: jwtPayload = { sub: this._id };
  const accessToken = sign(jwtPayload, jwt.secret, { expiresIn: jwt.expiration });
  return accessToken;
};

export const User: Model<IUserDocument> = model("User", userSchema);
