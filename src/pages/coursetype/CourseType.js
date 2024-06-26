import React,{useEffect,useState} from 'react'
import axios from "axios";
function CourseType() {
    const [courseType, setCourseType] = useState([]);

    useEffect(()=>{
        fetchCourseType();
    }, []);
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
  return (
    <div class="row mt-3">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 text-left" ><h5 class="card-title">Course Type List</h5></div>
                <div class="col-md-6 text-right" ><h5 class="card-title"><a href="college/add">Add New</a></h5></div>
            </div>
          
    <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Type Name</th>
                <th scope="col">Short Name</th>
              </tr>
            </thead>
            <tbody>
            {courseType.map((item,index)=>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.course_type_name}</td>
                    <td>{item.short_name}</td>
                  </tr>
                )}          
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CourseType