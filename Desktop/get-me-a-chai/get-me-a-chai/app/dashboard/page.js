// "use client";
// import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from "next/navigation";

// const Dashboard = () => {
//   const { data: session } = useSession();

//   if (!session) {
//     const router = useRouter();
//     router.push("/login");
//   }
//   return <div>Dashboard.</div>;
// };

// export default Dashboard;
import Dashboard from "@/components/Dashboard";

const DashboardPage = () => {

  return (
    <Dashboard/>
  )
}

export default DashboardPage

export const metadata  = {
  title: 'Dashboard - Get Me A Chai',
}
