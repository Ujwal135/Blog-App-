import React, { useState } from 'react'
import axios from 'axios'


const Login = () => {


const [islogin, setislogin] = useState(true)

const [formData, setfromData] = useState({
  username:"",
  email : "",
  password : "",
  password2:""
})

const [err, seterr] = useState(false)


function toggleform(){
    setislogin(!islogin)
}

function handleChange(e){
  setfromData(
    { ...formData,
     [e.target.name]:e.target.value
    }
    )
  }

function checkForm(e){

  e.preventDefault()

  if(islogin){
    loginFormEvent(e)

  } else {
   registerFormEvent()
  }
}


function loginFormEvent(){
    const payload = {
    username: formData.username,
    password: formData.password,
  };
    axios.post("http://localhost:8000/api/login/",payload)
    .then((res)=>{res.data}).catch((err)=>{
     console.log('Error',err.response)
  })

}

function registerFormEvent(){

  if (formData.password == formData.password2){
    
    seterr(false)
    const payload ={
    username: formData.username,
    email :formData.email,
    password: formData.password,
  }
  axios.post("http://localhost:8000/api/register/",payload)
  .then((res)=>{res.data}).catch((err)=>{
    console.log('Error',err.response)
  })
  }

  else{
    seterr(true)
  }
}


  return (
    <div>

     <div className="mt-20">
        <div className="flex items-center justify-center w-screen min-h-[70vh] bg px-4">

          <div className="bg-black/10 backdrop-blur-md 
                          w-full sm:w-[80%] md:w-[50%] lg:w-[30%] 
                          h-auto p-8 rounded-2xl shadow-xl border border-white/30">

            <h1 className="text-3xl font-bold font-(family-name:--font-display) text-center mb-6">
              {islogin ? "Login" : "Register"}
            </h1>

            <form onSubmit={checkForm} className="flex flex-col gap-4 font-(family-name:--font-display)">

              <input
                type="username"
                onChange={handleChange}
                name='username'
                value={formData.username}
                placeholder="Username"
                className="px-4 py-3 rounded-lg outline-none  font-semibold bg-white/90 not-last:font-(family-name:--font-display)"
              />


               { !islogin && (<input
                type='email'
                onChange={handleChange}
                name='email'
                value={formData.Email}
                placeholder='Enter your valid Email'
                className="px-4 py-3 rounded-lg outline-none  font-semibold bg-white/90"
            />
            )}

              <input
                type="password"
                name='password'
                onChange={handleChange}
                value={formData.password}
                placeholder="Password"
                className="px-4 py-3 rounded-lg outline-none  font-semibold bg-white/90 font-(family-name:--font-display)"
              />

           

            { !islogin && (<input
                type='password'
                onChange={handleChange}
                name='password2'
                value={formData.password2}
                placeholder='Confirm Passworld'
                className="px-4 py-3 rounded-lg outline-none   font-semibold bg-white/90"
            />
            )}

            {!islogin && (
                 <label className="flex items-center gap-3 text-[#284b63] text-sm">
                    <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#0267be] cursor-pointer"
                    />
                    <span>
                    I agree to the{" "}
                     <span className="underline cursor-pointer text-[#284b63]">Terms & Conditions</span>
                     </span>
                 </label>
            )}
              <p
                 className="text-center text-red-500- mt-3  font-(family-name:--font-display) text-lg " >
                    {err ? "password Does Not Match ?": ""} 
              </p>
              <button
                className="mt-4 py-3 rounded-lg bg-[#284b63] text-[#D9D9D9] font-semibold hover:scale-105 transition font-(family-name:--font-display)"
              >
                {islogin ? "Login" : "Create Account" }
              </button>

              <p
                onClick={toggleform} 
                 className="text-center text-[#284b63] mt-3  font-(family-name:--font-display) text-lg " >
                    {islogin ? "Don't have an account?": "Already have an account?"} 
                     
                    <span className="underline cursor-pointer font-(family-name:--font-display)">{islogin ? "Sign Up" : "Login"}</span>
              </p>

      </form>

    </div>

  </div>
</div>

    </div>
  )
}

export default Login
