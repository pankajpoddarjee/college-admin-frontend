import React,{useState,useEffect} from "react";
import axios from "axios";

const LIMIT = 8;
function Notice(){
    const [colleges, setColleges] = useState([]);
    const [totalColleges, setTotalColleges] = useState(0);
    const [activePage, setActivePage] = useState(1);
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = () => {
        setTimeout(() => {
        }, 3000);
        axios.get('http://localhost:4000/college', {
          params: {
            page: activePage,
            size: LIMIT
          }
        }).then(({data}) => {
          setActivePage(activePage+ 1);
          setColleges([...colleges, ...data.records]);
          setTotalColleges(data.total)
        }).catch(error => {
          console.log(error.response);
        })
      }
    return (
        <div class="row mt-3">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 text-left" ><h5 class="card-title">College List</h5></div>
                    <div class="col-md-6 text-right" ><h5 class="card-title"><a href="college/add">Add New</a></h5></div>
                </div>
              
			  <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">College Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                {colleges.map((item,index)=>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.college_name}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                  </tr>
                )}                 
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Notice;