import React,{useEffect,useState} from 'react'
import axios from "axios";
function CourseType() {
    const [courseType, setCourseType] = useState([]);

    useEffect(()=>{
        fetchCourseType();
    }, []);
    const fetchCourseType = async () => {
        try {
          const response = await axios.get('http://localhost:4000/courseType');
          setCourseType(response.data.data);
          console.log(response);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
    };
  return (
    <div>CourseType</div>
  )
}

export default CourseType