import React from "react";

const username = ({ params }) => {
  return (
    <>
      {params.username}
      <div className="cover w-full bg-red-50 relative">
        <img className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/18.gif?token-time=1746316800&token-hash=mtEjEoUrMjLoTfRsiSzyYAKUqdQsqjk2p2rfIENPlrg%3D"
          alt=""
        />
        <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full overflow-hidden w-[150px] h-[150px]">
            <img className="rounded-full object-cover w-[150px] h-[150px]" src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1436&h=958" alt="" />
        </div>
      </div>
    </>
  );
};

export default username;
