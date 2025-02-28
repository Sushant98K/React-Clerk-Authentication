import { useClerk, UserButton } from "@clerk/clerk-react";
import React from "react";

const Dashboard = () => {

    const { user } = useClerk()

    // console.log(user)
    
  return (
    <>
          <div>Welcome to Dashboard { user.firstName }</div>
          <UserButton />
    </>
  );
};

export default Dashboard;
