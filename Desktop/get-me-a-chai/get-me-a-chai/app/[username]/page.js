import React from "react";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDB from "../db/connectDb";
import User from "@/models/User";

const Username = async ({params}) => {
  // If the usernmae is not present in the database, show a 404 page
  const checkUser = async () => {
    await connectDB()
  let u = await User.findOne({username: params.username})
  if(!u){
    return notFound()
  }
}
await checkUser()
    const { username } = await params; // ✅ await is now here

    return (
      <>
        <PaymentPage username={username} />;
      </>
    );

};

export default Username;

export async function generateMetadata({params}){
  return {
    title : `Support ${params.username} - Get Me A Chai`,
  }
}
