import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [islogin, setislogin] = useState(true);
  const [errormessage, seterrormessage] = useState({});

  const [formData, setfromData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // Toggle between Login & Register
  function toggleform() {
    setislogin(!islogin);
    seterrormessage({});
  }

  // Handle input change
  function handleChange(e) {
    setfromData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear specific field error while typing
    seterrormessage({
      ...errormessage,
      [e.target.name]: "",
    });
  }

  function checkForm(e) {
    e.preventDefault();

    if (islogin) {
      loginFormEvent();
    } else {
      registerFormEvent();
    }
  }

  // ---------------- LOGIN ----------------
  function loginFormEvent() {
    seterrormessage({});

    const payload = {
      username: formData.username,
      password: formData.password,
    };

    axios
      .post("http://localhost:8000/api/token/", payload)
      .then((res) => {
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);

        console.log("Login Successful");
        navigate("/home");
      })
      .catch((err) => {
        const backendErrors = err.response?.data;

        if (backendErrors?.detail) {
          seterrormessage(backendErrors.detail);
        } else {
          seterrormessage({ general: "Invalid credentials" });
        }
      });
  }

  // ---------------- REGISTER ----------------
  function registerFormEvent() {
    seterrormessage({});

    if (formData.password !== formData.password2) {
      seterrormessage({
        password2: ["Passwords do not match"],
      });
      return;
    }

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    axios
      .post("http://localhost:8000/api/register/", payload)
      .then(() => {
        setislogin(true);
        seterrormessage({
          general: "Account created successfully. Please login.",
        });
      })
      .catch((err) => {
        const backendErrors = err.response?.data;

        if (backendErrors && typeof backendErrors === "object") {
          seterrormessage(backendErrors);
        } else {
          seterrormessage({ general: "Something went wrong" });
        }
      });
  }

  return (
    <div className='font-["Poppins"] mt-20'>
      <div className="flex items-center justify-center w-screen min-h-[70vh] px-4">
        <div className="bg-black/10 backdrop-blur-md w-full sm:w-[80%] md:w-[50%] lg:w-[30%] p-8 rounded-2xl shadow-xl border border-white/30">
          
          <h1 className="text-3xl font-bold text-center mb-6">
            {islogin ? "Login" : "Register"}
          </h1>

          <form onSubmit={checkForm} className="flex flex-col gap-4">

            {/* Username */}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="px-4 py-3 rounded-lg outline-none font-semibold bg-white/90"
            />
            {errormessage.username && (
              <p className="text-red-500 text-sm">
                {errormessage.username[0]}
              </p>
            )}

            {/* Email (Register only) */}
            {!islogin && (
              <>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your valid Email"
                  className="px-4 py-3 rounded-lg outline-none font-semibold bg-white/90"
                />
                {errormessage.email && (
                  <p className="text-red-500 text-sm">
                    {errormessage.email[0]}
                  </p>
                )}
              </>
            )}

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="px-4 py-3 rounded-lg outline-none font-semibold bg-white/90"
            />
            {errormessage.password && (
              <p className="text-red-500 text-sm">
                {errormessage.password[0]}
              </p>
            )}

            {/* Confirm Password (Register only) */}
            {!islogin && (
              <>
                <input
                  type="password"
                  name="password2"
                  value={formData.password2}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="px-4 py-3 rounded-lg outline-none font-semibold bg-white/90"
                />
                {errormessage.password2 && (
                  <p className="text-red-500 text-sm">
                    {errormessage.password2[0]}
                  </p>
                )}
              </>
            )}

            {/* General Error */}
            {errormessage.general && (
              <p className="text-center text-red-500 text-sm">
                {errormessage.general}
              </p>
            )}

            <button className="mt-4 py-3 rounded-lg bg-[#284b63] text-white font-semibold hover:scale-105 transition">
              {islogin ? "Login" : "Create Account"}
            </button>

            <p
              onClick={toggleform}
              className="text-center text-[#284b63] mt-3 cursor-pointer"
            >
              {islogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
