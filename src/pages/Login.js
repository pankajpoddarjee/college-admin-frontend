import { useFormik } from "formik";
import React,{useState} from "react";
import Loader from "./Loader";
import Logo from '../assets/images/logo-icon.png';
import axios from "axios";
import  {useNavigate} from 'react-router-dom';
import { LoginFormSchema } from "./validation/LoginFormSchema";
 const API_URL = "http://localhost:4000/";
//const API_URL = process.env.REACT_APP_API_URL;
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

        <div className="loader-wrapper">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="card card-authentication1 mx-auto my-5">
            <div className="card-body">
                <div className="card-content p-2">
                    <div className="text-center">
                        <img src={Logo} alt="logo icon"/>
                    </div>
                    <div className="card-title text-uppercase text-center py-3">Sign In</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername" className="sr-only">Username</label>
                            <div className="position-relative has-icon-right">
                                <input type="text" id="email" name="email" className="form-control input-shadow" placeholder="Enter Username" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off"/>
                                <div className="form-control-position">
                                    <i className="icon-user"></i>
                                </div>
                                {formik.errors.email && formik.touched.email?(<span style={{color:"red"}}>{formik.errors.email}</span>):null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword" className="sr-only">Password</label>
                            <div className="position-relative has-icon-right">
                                <input type="password" id="password" name="password" className="form-control input-shadow" placeholder="Enter Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off"/>
                                <div className="form-control-position">
                                    <i className="icon-lock"></i>
                                </div>
                                {formik.errors.password && formik.touched.password?(<span style={{color:"red"}}>{formik.errors.password}</span>):null}
                            </div>
                        </div>
                       
                        {/* <button type="button" className="btn btn-light btn-block" onClick={submitForm}>Sign In</button> */}
                        <button type="submit" className="btn btn-light btn-block" >Sign In</button>


                      

                    </form>
                </div>
            </div>
            <div className="card-footer text-center py-3">
                <p className="text-warning mb-0">Do not have an account? <a href="signup"> Sign Up here</a></p>
            </div>
        </div>

        {/* <!--Start Back To Top Button--> */}
        <a href="javaScript:void();" className="back-to-top"><i className="fa fa-angle-double-up"></i> </a>
        {/* <!--End Back To Top Button--> */}

        {/* <!--start color switcher--> */}
        <div className="right-sidebar">
            <div className="switcher-icon">
                <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
            </div>
            <div className="right-sidebar-content">

                <p className="mb-0">Gaussion Texture</p>
                <hr/>

                <ul className="switcher">
                    <li id="theme1"></li>
                    <li id="theme2"></li>
                    <li id="theme3"></li>
                    <li id="theme4"></li>
                    <li id="theme5"></li>
                    <li id="theme6"></li>
                </ul>

                <p className="mb-0">Gradient Background</p>
                <hr/>

                <ul className="switcher">
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