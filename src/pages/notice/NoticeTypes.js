import React,{useEffect,useState} from 'react'
import axios from "axios";
function NoticeTypes() {
    const [noticeType, setNoticeType] = useState([]);

    useEffect(()=>{
        fetchNoticeTypes();
    }, []);
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
  return (
    <div class="row mt-3">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 text-left" ><h5 class="card-title">Notice Types List</h5></div>
                <div class="col-md-6 text-right" ><h5 class="card-title"><a href="college/add">Add New</a></h5></div>
            </div>
          
    <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Notice Type Name</th>
                <th scope="col">Asctive Status</th>
              </tr>
            </thead>
            <tbody>
            {noticeType.map((item,index)=>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.notice_type_name}</td>
                    <td>{item.active_status}</td>
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

export default NoticeTypes