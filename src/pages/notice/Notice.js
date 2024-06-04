import React,{useState,useEffect} from "react";
import axios from "axios";

const LIMIT = 8;
function Notice(){
  const [notice, setNotice] = useState([]);

  useEffect(()=>{
      fetchNotice();
  }, []);
  const fetchNotice = async () => {
      try {
        const response = await axios.get('http://localhost:4000/college-notice');
        console.log(response.data.records);
        setNotice(response.data.records);
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
                  <div class="col-md-6 text-left" ><h5 class="card-title">Notice List</h5></div>
                  <div class="col-md-6 text-right" ><h5 class="card-title"><a href="colleges-notice/add">Add New</a></h5></div>
              </div>
            
      <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Notice Title</th>
                  <th scope="col">Notice Date</th>
                  <th scope="col">Full URL Link</th>
                </tr>
              </thead>
              <tbody>
              {notice.map((item,index)=>
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{item.notice_title}</td>
                  <td>{item.notice_date}</td>
                  <td>{item.full_url_link}</td>
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