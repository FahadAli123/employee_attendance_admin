import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Fireabase";

import logo from "../../Assets/Images/ict-logo.png";
import { withRouter } from "react-router-dom";
import Loader from "../../Components/Loader.js";
const SplashScreen2 = require("../../Assets/Images/SplashScreen2.png");

const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const Login = async () => {
    setLoading(true);
    const email = username;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setLoading(false);
        localStorage.setItem("isLoggedIn", true);
        props.history.push("/");
        // Sign in success
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const ValidateInputs = () => {};

  return (
    <div class="w-full h-full flex flex-row bg-white">
      {loading && <Loader />}
      <div class="min-h-screen md:w-[45%] lg:w-[30%] m-auto flex justify-center items-center drop-shadow-lg ">
        <div class="p-10 w-[100%] border-[1px] -mt-10  rounded-2xl flex flex-col items-center space-y-3 bg-white">
          <div class="flex flex-col items-center">
            <img src={logo} class="w-[40%] " />
          </div>
          <div class="py-4">
            <h1 class="text-3xl text-black">Sign in to your account</h1>
          </div>
          <div class="w-full">Email</div>
          <input
            class="p-3 w-full border-[1px] border-slate-500 rounded-lg autofill:bg-white outline-black"
            placeholder="Email"
            onChange={(event) => setUserName(event.target.value)}
          />
          <div class="w-full">Password</div>
          <input
            class="p-3 w-full border-[1px] border-slate-500 rounded-lg outline-black "
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <div class="w-full flex flex-row justify-end cursor-pointer text-black hover:text-primaryDark">
            Forgot Password?
          </div>

          <div
            class="w-full cursor-pointer flex items-center justify-center bg-black rounded-lg p-3 text-white font-bold transition duration-200 hover:bg-blackDark "
            onClick={Login}
          >
            Login
          </div>

          <p class="text-center text-black text-xs">
            &copy;2023 ICT Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
