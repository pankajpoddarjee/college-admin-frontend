import { useFormik } from "formik";
import {useState,useEffect} from "react";
import axios from "axios";
import { NoticeFormScema } from "../validation/NoticeFormScema";


function AddNotice(){
    const [colleges, setColleges] = useState([]);
    const [courseType, setCourseType] = useState([]);
    const [noticeType, setNoticeType] = useState([]);
    useEffect(()=>{
        fetchColleges();
        fetchCourseType();
        fetchNoticeTypes();
    }, []);
    const fetchColleges = async () => {
        try {
          const response = await axios.get('http://localhost:4000/college/all');
          console.log(response.data.records);
          setColleges(response.data.records);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    };
    const fetchCourseType = async () => {
        try {
          const response = await axios.get('http://localhost:4000/course-type');
          setCourseType(response.data.records);
          console.log(response.data.records);
          console.log(courseType);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    };
    const fetchNoticeTypes = async () => {
        try {
          const response = await axios.get('http://localhost:4000/notice-type');
          setNoticeType(response.data.records);
          console.log(response.data.records);
          console.log(noticeType);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    };
    const formInitialValue = {
        college_name: '', 
        course_type: '', 
        notice_type: '', 
        notice_date: '', 
        notice_title: '', 
        full_url_link: '',  
        active_status: '',  
        new_tag: ''
    }
    const formik = useFormik({
        initialValues : formInitialValue,
        validationSchema: NoticeFormScema,
        onSubmit:(values) => {
            const noticeData = { 
                college_name: values.college_name, 
                course_type: values.course_type, 
                notice_type: values.notice_type, 
                notice_date: values.notice_date, 
                notice_title: values.notice_title, 
                full_url_link: values.full_url_link,  
                active_status: values.active_status,  
                new_tag: values.new_tag
            }; 
            axios.post("http://localhost:4000/college-notice", 
            noticeData).then((res) => { 
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
                <div class="card-title text-center">Add New Notice</div>
                {/* <h5 class="border-bottom text-danger" style={{fontFamily:'Rubik'}}><i class="fa fa-file-text-o"></i> Basic Info</h5> */}
                <form  onSubmit={formik.handleSubmit}>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-1">College Name <span class="text-danger">*</span></label>
                            <select  name="college_name" id="college_name" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                            <option value="">Select</option>
                            {colleges.map((item,index)=>
                                <option value={item._id}>{item.college_name}</option>
                            )}
                            </select>
                             
                            {formik.errors.college_name && formik.touched.college_name?(<span style={{color:"red"}}>{formik.errors.college_name}</span>):null}
                        
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-2">Course Type </label>
                            <select  name="course_type" id="course_type" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                                <option value="">Select</option>
                                {courseType.map((item,index)=>
                                    <option value={item._id}>{item.course_type_name}</option>
                                )}
                            </select>
                            {formik.errors.course_type && formik.touched.course_type?(<span style={{color:"red"}}>{formik.errors.course_type}</span>):null}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-1">Notice Type <span class="text-danger">*</span></label>
                            <select  name="notice_type" id="notice_type" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                            <option value="">Select</option>
                            {noticeType.map((item,index)=>
                                <option value={item._id}>{item.notice_type_name}</option>
                            )}
                            </select>
                             
                            {formik.errors.notice_type && formik.touched.notice_type?(<span style={{color:"red"}}>{formik.errors.notice_type}</span>):null}
                        
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-2">Notice Date </label>
                            <input type="date"  name="notice_date" id="notice_date" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                            {formik.errors.notice_date && formik.touched.notice_date?(<span style={{color:"red"}}>{formik.errors.notice_date}</span>):null}
                        </div>
                    </div>
                </div>
               
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-1">Notice Title <span class="text-danger">*</span></label>
                            <input type="text"  name="notice_title" id="notice_title" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Title for Notice" />
                          
                             
                            {formik.errors.notice_title && formik.touched.notice_title?(<span style={{color:"red"}}>{formik.errors.notice_title}</span>):null}
                        
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-2">Full URL Link </label>
                            <input type="text"  name="full_url_link" id="full_url_link" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="https://www.collegeadmision.in/XXX/XXXX.php" />
                            {formik.errors.full_url_link && formik.touched.full_url_link?(<span style={{color:"red"}}>{formik.errors.full_url_link}</span>):null}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-1">Active Status <span class="text-danger">*</span></label>
                            <select  name="active_status" id="active_status" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                            <option value="active">Active</option>
                            <option value="inactive">In-Active</option>
                            
                            </select>
                             
                            {formik.errors.active_status && formik.touched.active_status?(<span style={{color:"red"}}>{formik.errors.active_status}</span>):null}
                        
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="input-2">New Tag </label>
                            <select  name="new_tag" id="new_tag" class="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            
                            </select>
                            {formik.errors.new_tag && formik.touched.new_tag?(<span style={{color:"red"}}>{formik.errors.new_tag}</span>):null}
                        </div>
                    </div>
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
export default AddNotice;