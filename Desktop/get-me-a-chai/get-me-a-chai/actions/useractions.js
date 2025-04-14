"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/app/db/connectDb";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  var instance = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
  });

  instance.orders.create({
    amount: 50000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "values3",
      key2: "value2",
    },
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };

  let x = await instance.orders.create(options);

  // create a payment object which shows a pending payment in the database
  await Payment.create({
    oid: x.id,
    amount: amount/100,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
  });

  return x;
};

export const fetchuser = async (username) => {
  await connectDB();
  console.log(username);
  let u = await User.findOne({ username: username });
  let user = u.toObject();
  
   // Convert ObjectId and Date fields to string
  user._id = user._id.toString();
  user.createdAt = user.createdAt?.toISOString?.();
  user.updatedAt = user.updatedAt?.toISOString?.();

  return user;
};

export const fetchpayments = async (username) => {
  await connectDB();
  // find all payments sorted by decreasing order of amount

  let p = await Payment.find({ to_user: username,done:true }).sort({ amount: -1 }).lean();


    // Serialize ObjectId and Date fields to make them client-safe
    p = p.map((payment) => ({
        ...payment,
        _id: payment._id.toString(),
        createdAt: payment.createdAt?.toISOString?.(),
        updatedAt: payment.updatedAt?.toISOString?.(),
      }));

  return p;
};

export const updateProfile = async (data, oldusername) => {
  await connectDB();
  let ndata = Object.fromEntries(data);
  if (oldusername !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username already exists" };
    }
  }
  await User.updateOne({ email: ndata.email }, ndata);
};
