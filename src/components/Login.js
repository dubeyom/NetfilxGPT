import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="body"
        />
      </div>
      <form className="flex flex-col items-center absolute pt-28 bg-black opacity-90 text-black my-24 mx-auto top-0 right-0 left-0 max-w-[400px] min-h-[450px] ">
        <h1 className="text-2xl text-white py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-100 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-100 rounded-md"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-2  bg-gray-100 rounded-md"
        />
        <button className="px-16 py-2 m-4 bg-red-500 tracking-widest rounded-md text-white">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
