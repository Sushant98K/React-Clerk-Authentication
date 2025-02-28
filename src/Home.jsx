import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const Home = () => {
  return (
    <div>
      {/* <SignedOut> */}
      <h1>Sign in using Button</h1>
      <SignInButton mode="modal" forceRedirectUrl="/dashboard" />
      {/* </SignedOut> */}
      {/* <SignedIn>
        <UserButton>Sign in using Button</UserButton>
      </SignedIn> */}
    </div>
  );
};

export default Home;
