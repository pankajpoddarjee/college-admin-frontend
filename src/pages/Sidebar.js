import  {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    return (
        <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
        <div class="brand-logo">
         <a href="index.html">
          <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon"/>
          <h5 class="logo-text">Dashtreme Admin</h5>
        </a>
      </div>
      <ul class="sidebar-menu do-nicescrol">
         <li class="sidebar-header">MAIN NAVIGATION</li>
         <li>
           <Link  to="dashboard">
             <i class="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
           </Link>
         </li>
   
         <li>
            <Link  to="users">
             <i class="zmdi zmdi-format-list-bulleted"></i> <span>Users</span>
            </Link>
         </li>
   
         <li>
            <Link  to="colleges">
             <i class="zmdi zmdi-format-list-bulleted"></i> <span>Colleges</span>
            </Link>
         </li>
   
         <li>
            <Link  to="colleges-notice">
             <i class="zmdi zmdi-grid"></i> <span>Colleges Notice</span>
            </Link>
         </li>

         <li>
            <Link  to="course-type">
             <i class="zmdi zmdi-grid"></i> <span>Course Type</span>
            </Link>
         </li>
         <li>
            <Link  to="notice-type">
             <i class="zmdi zmdi-grid"></i> <span>Notice Type</span>
            </Link>
         </li>
         {/* <li>
           <a href="calendar.html">
             <i class="zmdi zmdi-calendar-check"></i> <span>Calendar</span>
             <small class="badge float-right badge-light">New</small>
           </a>
         </li>
   
         <li>
           <a href="profile.html">
             <i class="zmdi zmdi-face"></i> <span>Profile</span>
           </a>
         </li>
   
         <li>
           <a href="login.html" target="_blank">
             <i class="zmdi zmdi-lock"></i> <span>Login</span>
           </a>
         </li>
   
          <li>
           <a href="register.html" target="_blank">
             <i class="zmdi zmdi-account-circle"></i> <span>Registration</span>
           </a>
         </li>
   
         <li class="sidebar-header">LABELS</li>
         <li><a href="javaScript:void();"><i class="zmdi zmdi-coffee text-danger"></i> <span>Important</span></a></li>
         <li><a href="javaScript:void();"><i class="zmdi zmdi-chart-donut text-success"></i> <span>Warning</span></a></li>
         <li><a href="javaScript:void();"><i class="zmdi zmdi-share text-info"></i> <span>Information</span></a></li> */}
   
       </ul>
      
      </div>
    );
}
export default Sidebar;