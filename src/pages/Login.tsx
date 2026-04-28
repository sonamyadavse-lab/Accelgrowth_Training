import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/authSchema";
import type { LoginFormData } from "../types/authTypes";

import { FaGoogle } from "react-icons/fa";

import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <>
    <div className="container mt-2 " style={{maxHeight:"70vh"}}>
    <div className="row shadow-lg rounded-4 overflow-hidden outer-border" >

      <div className="col-md-7 image d-none d-md-block p-0">
        <div className="row">
          <div className="col-sm-12">
 <img
          src="image.png"
          alt="login"
          className="img-fluid h-100 w-100 mb-0"
          style={{ objectFit: "cover", minHeight: "500px" }}
        />
          </div>
        </div>
        <div className="row mt-0">
          <div className="col-sm-12">
             <p className="imageText1">Turn On your ideas into reality</p>
        <p className="imageText2">Start for free and get attractive offers from the community </p>
          </div>
        </div>
       
       
      </div>

     
      <div className="col-md-5 bg-white p-5 mt-5">
        <h2 className="text-center fw-bold hw1">
         Login to your Account
        </h2>
        <p className="text-center hw">See what is going on with your business</p>

        <button className="btn btn-light border border-1 border-dark google"> <FaGoogle className="icon" />Continue with Google</button>
       
        <p className="sign text-center">or Sign in  with Email </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card p-4 border-0 shadow-sm rounded-4">

            <input
              type="text"
              placeholder="Email"
              className="form-control mb-3 rounded-3  "
              {...register("email")}
            />
            {errors?.email && (
              <p className="text-danger">{errors?.email?.message}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3 rounded-3 "
              {...register("password")}
            />
            {errors?.password && (
              <p className="text-danger">{errors?.password?.message}</p>
            )}

<span><input type="checkbox" /><span className="re"> Remember me </span> <span style={{color:"#7F265B"}} className="re text-center mt-0 for">Forget Password</span></span>
            <input
              type="submit"
              value="Login"
              className="btn form-control rounded-3 " style={{background:"#7F265B" ,color:"#fff"}}
            />
          </div>
        </form>

        <p className="text-center cr">
          Not Register Yet?{" "}
          <Link to="/register" className="text-decoration-none fw-semibold "   style={{ color:"#7F265B"}}>
           Create an account
          </Link>
        </p>
      </div>

    </div>
  </div>
    </>
  );
};

export default Login;