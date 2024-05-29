import { useFormik } from "formik";
import React,{useState} from "react";
import Loader from "./Loader";
import Logo from '../assets/images/logo-icon.png';
import axios from "axios";
import  {useNavigate} from 'react-router-dom';
import { LoginFormSchema } from "./validation/LoginFormSchema";
// const API_URL = "http://localhost:4000/";
const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);
function Login(){
    const formInitialValue = {
        email:'',
        password:''
    }
    const formik = useFormik({
        initialValues : formInitialValue,
        validationSchema: LoginFormSchema,
        onSubmit:(values) => {
            console.log(values.email);
            const loginData = { 
                email: values.email, 
                password: values.password
            }; 
            axios.post(API_URL + "login", loginData).then((res) => { 
            console.log(res.data); 
            if(res.data.success){
                alert(res.data.message);
                localStorage.setItem("user", JSON.stringify(res.data.users));
                localStorage.setItem("token", JSON.stringify(res.data.token));
                return navigate("/dashboard");
            }else{
                alert(res.data.message);
            }
        }).catch((error) => { 
        console.log(error); }); 
        }
    });

    const navigate = useNavigate();
   
    return (
        <>
         <Loader/>
    <div id="wrapper">

        <div class="loader-wrapper">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="card card-authentication1 mx-auto my-5">
            <div class="card-body">
                <div class="card-content p-2">
                    <div class="text-center">
                        <img src={Logo} alt="logo icon"/>
                    </div>
                    <div class="card-title text-uppercase text-center py-3">Sign In</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputUsername" class="sr-only">Username</label>
                            <div class="position-relative has-icon-right">
                                <input type="text" id="email" name="email" class="form-control input-shadow" placeholder="Enter Username" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off"/>
                                <div class="form-control-position">
                                    <i class="icon-user"></i>
                                </div>
                                {formik.errors.email && formik.touched.email?(<span style={{color:"red"}}>{formik.errors.email}</span>):null}
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword" class="sr-only">Password</label>
                            <div class="position-relative has-icon-right">
                                <input type="password" id="password" name="password" class="form-control input-shadow" placeholder="Enter Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off"/>
                                <div class="form-control-position">
                                    <i class="icon-lock"></i>
                                </div>
                                {formik.errors.password && formik.touched.password?(<span style={{color:"red"}}>{formik.errors.password}</span>):null}
                            </div>
                        </div>
                       
                        {/* <button type="button" class="btn btn-light btn-block" onClick={submitForm}>Sign In</button> */}
                        <button type="submit" class="btn btn-light btn-block" >Sign In</button>


                      

                    </form>
                </div>
            </div>
            <div class="card-footer text-center py-3">
                <p class="text-warning mb-0">Do not have an account? <a href="signup"> Sign Up here</a></p>
            </div>
        </div>

        {/* <!--Start Back To Top Button--> */}
        <a href="javaScript:void();" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
        {/* <!--End Back To Top Button--> */}

        {/* <!--start color switcher--> */}
        <div class="right-sidebar">
            <div class="switcher-icon">
                <i class="zmdi zmdi-settings zmdi-hc-spin"></i>
            </div>
            <div class="right-sidebar-content">

                <p class="mb-0">Gaussion Texture</p>
                <hr/>

                <ul class="switcher">
                    <li id="theme1"></li>
                    <li id="theme2"></li>
                    <li id="theme3"></li>
                    <li id="theme4"></li>
                    <li id="theme5"></li>
                    <li id="theme6"></li>
                </ul>

                <p class="mb-0">Gradient Background</p>
                <hr/>

                <ul class="switcher">
                    <li id="theme7"></li>
                    <li id="theme8"></li>
                    <li id="theme9"></li>
                    <li id="theme10"></li>
                    <li id="theme11"></li>
                    <li id="theme12"></li>
                    <li id="theme13"></li>
                    <li id="theme14"></li>
                    <li id="theme15"></li>
                </ul>

            </div>
        </div>
        {/* <!--end color switcher--> */}

    </div>
    {/* <!--wrapper--> */}
        </>
       
    );
}
export default Login;