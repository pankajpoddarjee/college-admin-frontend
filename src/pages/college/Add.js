import { useFormik } from "formik";
import React, {useState} from "react";
import axios from "axios";
import { CollegeFormSchema } from "../validation/CollegeFormSchema";
function Add(){

    const formInitialValue = {
        college_name: '', 
        short_name: '', 
        college_code: '', 
        other_name: '', 
        eshtablish: '', 
        college_type: '',  
        undertaking: '',  
        affiliation: '',  
        accreditation: '', 
        principle: '', 

        address: '', 
        landmark: '',  
        city: '', 
        district: '', 
        state: '', 
        country: '', 

        email: '', 
        email2: '', 
        phone:'', 
        website_url:'', 
        website_display: '', 
        
        course_type: ''
    }
    const formik = useFormik({
        initialValues : formInitialValue,
        validationSchema: CollegeFormSchema,
        onSubmit:(values) => {
            const collegeData = { 
                college_name: values.college_name, 
                short_name: values.short_name, 
                college_code: values.college_code, 
                other_name: values.other_name, 
                eshtablish: values.eshtablish, 
                college_type: values.college_type,  
                undertaking: values.undertaking,  
                affiliation: values.affiliation,  
                accreditation: values.accreditation, 
                principle: values.principle, 
        
                address: values.address, 
                landmark: values.landmark,  
                city: values.city, 
                district: values.district, 
                state: values.state, 
                country: values.country, 
        
                email: values.email, 
                email2: values.email2, 
                phone:values.phone, 
                website_url:values.website_url, 
                website_display: values.website_display, 
                
                course_type: values.course_type
            }; 
            axios.post("http://localhost:4000/college", 
            collegeData).then((res) => { 
                alert("data inserted successfully");
            console.log(res.data); 
            }).catch((error) => { 
            console.log(error); }); 
        }
    });


    
    
    
    
    
   
    return (
        <div class="row mt-3">
            <div class="col-lg-12">
                <div class="card">
                <div class="card-body">
                <div class="card-title text-center">Add New College</div>
                <h5 class="border-bottom text-danger" style={{fontFamily:'Rubik'}}><i class="fa fa-file-text-o"></i> Basic Info</h5>
                <form  onSubmit={formik.handleSubmit}>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-1">College Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="college_name" id="college_name" placeholder="Eg: Lady Brabourne College" value={formik.values.college_name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                            {formik.errors.college_name && formik.touched.college_name?(<span style={{color:"red"}}>{formik.errors.college_name}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-2">College Short Name </label>
                            <input type="text" class="form-control" name="short_name" id="short_name" placeholder="Eg: Lady Brabourne College" onBlur={formik.handleBlur} value={formik.values.short_name} onChange={formik.handleChange}/>
                            {formik.errors.short_name && formik.touched.short_name?(<span style={{color:"red"}}>{formik.errors.short_name}</span>):null}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-3">College Code</label>
                            <input type="text" class="form-control" name="college_code" id="college_code" placeholder="Eg: 012" onBlur={formik.handleBlur} value={formik.values.college_code} onChange={formik.handleChange}/>
                            {formik.errors.college_code && formik.touched.college_code?(<span style={{color:"red"}}>{formik.errors.college_code}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-4">Other / Former Name</label>
                            <input type="text" class="form-control" name="other_name" id="other_name" placeholder="Eg: South Suburban College" onBlur={formik.handleBlur} value={formik.values.other_name} onChange={formik.handleChange}/>
                            {formik.errors.other_name && formik.touched.other_name?(<span style={{color:"red"}}>{formik.errors.other_name}</span>):null}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-3">Estd.</label>
                            <input type="text" class="form-control" name="eshtablish" id="eshtablish" placeholder="Eg: 1916" onBlur={formik.handleBlur} value={formik.values.eshtablish} onChange={formik.handleChange}/>
                            {formik.errors.eshtablish && formik.touched.eshtablish?(<span style={{color:"red"}}>{formik.errors.eshtablish}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-4">College Type</label>
                            {/* <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter Othet College Type" value={collegeType} onChange={(e) => setCollegeType(e.target.value)}/> */}
                            <select name="college_type" id="college_type" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                <option  value="ug">UG</option>
                                <option  value="pg">PG</option>
                            </select>
                            {formik.errors.college_type && formik.touched.college_type?(<span style={{color:"red"}}>{formik.errors.college_type}</span>):null}
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-3">Undertaking</label>
                            <select name="undertaking" id="undertaking" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                <option  value="ug">UG</option>
                                <option  value="pg">PG</option>
                            </select>
                            {formik.errors.undertaking && formik.touched.undertaking?(<span style={{color:"red"}}>{formik.errors.undertaking}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-4">Affiliation<span class="text-danger">*</span></label>
                           
                            <select name="affiliation" id="affiliation" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                <option  value="ug">UG</option>
                                <option  value="pg">PG</option>
                            </select>
                            {formik.errors.affiliation && formik.touched.affiliation?(<span style={{color:"red"}}>{formik.errors.affiliation}</span>):null}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-1">Accreditation </label>
                            <input type="text" class="form-control" name="accreditation" id="accreditation" placeholder="Eg: NAAC, AICTE" onBlur={formik.handleBlur} value={formik.values.accreditation} onChange={formik.handleChange}/>
                            {formik.errors.accreditation && formik.touched.accreditation?(<span style={{color:"red"}}>{formik.errors.accreditation}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">Principal / TIC</label>
                            <input type="text" class="form-control" name="principle_name" id="principle_name" placeholder="Eg: Dr Dipak Kumar" onBlur={formik.handleBlur} value={formik.values.principle_name} onChange={formik.handleChange}/>
                            {formik.errors.principle_name && formik.touched.principle_name?(<span style={{color:"red"}}>{formik.errors.principle_name}</span>):null}
                        </div>
                    </div>
                </div>
                <h5 class="border-bottom text-danger" style={{fontFamily:'Rubik'}}><i class="fa fa-globe"></i> Contact Info</h5>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">Address<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="address" id="address" placeholder="Address" onBlur={formik.handleBlur} value={formik.values.address} onChange={formik.handleChange}/>
                            {formik.errors.address && formik.touched.address?(<span style={{color:"red"}}>{formik.errors.address}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">Landmark</label>
                            <input type="text" class="form-control" name="landmark" id="landmark" placeholder="Eg: Near SBI Bank" onBlur={formik.handleBlur} value={formik.values.landmark} onChange={formik.handleChange}/>
                            {formik.errors.landmark && formik.touched.landmark?(<span style={{color:"red"}}>{formik.errors.landmark}</span>):null}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">City / Town<span class="text-danger">*</span></label>
                            <select  name="city" id="city" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                <option  value="in">Durg</option>
                                <option  value="uk">Raipur</option>
                            </select>
                            {formik.errors.city && formik.touched.city?(<span style={{color:"red"}}>{formik.errors.city}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">District<span class="text-danger">*</span></label>
                            <select  name="district" id="district" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                <option  value="in">Durg</option>
                                <option  value="uk">Raipur</option>
                            </select>
                            {formik.errors.district && formik.touched.district?(<span style={{color:"red"}}>{formik.errors.district}</span>):null}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">State<span class="text-danger">*</span></label>
                            <select  name="state" id="state" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                <option  value="in">Chhattisgarh</option>
                                <option  value="uk">Jharkhand</option>
                            </select>
                            {formik.errors.state && formik.touched.state?(<span style={{color:"red"}}>{formik.errors.state}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">Country<span class="text-danger">*</span></label>
                            <select  name="country" id="country" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                <option  value="in">India</option>
                                <option  value="uk">UK</option>
                            </select>
                            {formik.errors.country && formik.touched.country?(<span style={{color:"red"}}>{formik.errors.country}</span>):null}
                        </div>
                    </div>
                </div>
                <h5 class="border-bottom text-danger"  style={{fontFamily:'Rubik'}}><i class="fa fa-globe"></i> Social Info</h5>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-3">E-mail Id 1<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="email" id="email" placeholder="Enter College Email Address" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange}/>
                            {formik.errors.email && formik.touched.email?(<span style={{color:"red"}}>{formik.errors.email}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-4">E-mail Id 2</label>
                            <input type="text" class="form-control" name="email2" id="email2" placeholder="Enter Email Id" onBlur={formik.handleBlur} value={formik.values.email2} onChange={formik.handleChange}/>
                            {formik.errors.email2 && formik.touched.email2?(<span style={{color:"red"}}>{formik.errors.email2}</span>):null}
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-4">Phone</label>
                            <input type="text" class="form-control" name="phone" id="phone" placeholder="Enter College Phone Number" onBlur={formik.handleBlur} value={formik.values.phone} onChange={formik.handleChange}/>
                            {formik.errors.phone && formik.touched.phone?(<span style={{color:"red"}}>{formik.errors.phone}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">Website URL</label>
                            <input type="text" class="form-control" name="website_url" id="website_url" placeholder="http(s)://www.abc.com" onBlur={formik.handleBlur} value={formik.values.website_url} onChange={formik.handleChange}/>
                            {formik.errors.website_url && formik.touched.website_url?(<span style={{color:"red"}}>{formik.errors.website_url}</span>):null}
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">Website Display</label>
                            <input type="text" class="form-control" name="website_display" id="website_display" placeholder="www.abc.com" onBlur={formik.handleBlur} value={formik.values.website_display} onChange={formik.handleChange}/>
                            {formik.errors.website_display && formik.touched.website_display?(<span style={{color:"red"}}>{formik.errors.website_display}</span>):null}
                        </div>
                    </div>
                    <div class="col-md-6">
                        {/* <div class="form-group">
                            <label for="input-5">Principle Name</label>
                            <input type="text" class="form-control" name="principle_name" id="principle_name" placeholder="Principle name" value={principle} onChange={(e) => setPrinciple(e.target.value)}/>
                        </div> */}
                    </div>
                </div>
                <h5 class="border-bottom text-danger" style={{fontFamily:'Rubik'}}><i class="fa fa-book"></i> Course Info <small>(For Listing Purpose only)</small></h5>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">Course Type</label>
                            <select  name="course_type" id="course_type" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                <option  value="in">India</option>
                                <option  value="uk">UK</option>
                            </select>
                            {formik.errors.course_type && formik.touched.course_type?(<span style={{color:"red"}}>{formik.errors.course_type}</span>):null}
                        </div>
                    </div>
                    {/* <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-5">Principle Name</label>
                            <input type="text" class="form-control" name="principle_name" id="principle_name" placeholder="Principle name" value={principle} onChange={(e) => setPrinciple(e.target.value)}/>
                        </div>
                    </div> */}
                </div>
               
                <div class="form-group">
                    <button type="submit" class="btn btn-light px-5"><i class="icon-lock" ></i> Register</button>
                </div>
                </form>
                </div>
                </div>
            </div>

            
        </div>
    );
}
export default Add;