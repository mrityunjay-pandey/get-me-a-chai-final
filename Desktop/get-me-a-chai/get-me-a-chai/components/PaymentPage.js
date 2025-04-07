"use client";
import React, {useState} from "react";
import Script from "next/script";
import {initiate} from '@/actions/useractions'
import { useSession } from "next-auth/react";



const PaymentPage = ({ username }) => {
  // const { data: session } = useSession();

const [paymentform, setPaymentform] = useState({})

const handleChange = (e) => {
    setPaymentform({...paymentform, [e.target.name]: e.target.value })
}


  const pay = async (amount) => {

    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
      "key": process.env.NEXT_PUBLIC_KEY_ID, // Replace with your Razorpay key_id
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Get Me A Chai",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, // This is the order_id created in the backend
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, // Your success URL
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999",
      },
      "notes": {
        "address": "Razorpay Corporate Office",
      },
      "theme": {
        "color": "#F37254",
      }
    }

    var rzp1 = new Razorpay(options);
        rzp1.open()
  };
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/18.gif?token-time=1746316800&token-hash=mtEjEoUrMjLoTfRsiSzyYAKUqdQsqjk2p2rfIENPlrg%3D"
          alt=""
        />
        <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full overflow-hidden w-[150px] h-[150px]">
          <img
            className="rounded-full object-cover w-[150px] h-[150px]"
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 mb-32 flex-col gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">
          9,719 members .82 posts . $15,450/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg  p-10">
            <h2 className="text-2xl font-bold">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a
                  message " I support you bro. Lots of ❤️"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a
                  message " I support you bro. Lots of ❤️"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a
                  message " I support you bro. Lots of ❤️"
                </span>
              </li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 p-10 rounded-lg text-white">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <div>
                <input onChange={handleChange} name='name' value = {paymentform.name}
                  type="text"
                  className="w-full p-3 rounded-lg bg-slate-800"
                  placeholder="Enter Name"
                />
              </div>
              <input onChange={handleChange} name='message' value = {paymentform.message}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />

              <input onChange={handleChange} name='amount' value = {paymentform.amount}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />

              <button
                type="button"
                className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            {/* Or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg" onClick={()=> pay(1000)}>Pay ₹10</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={()=> pay(2000)}>Pay ₹20</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={()=> pay(3000)}>Pay ₹30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
