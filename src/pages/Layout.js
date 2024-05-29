
import { Outlet } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Header from './Header';
import Footer from './Footer';


function Layout(){
    return (
        <div>
        
            <Sidebar/>
            <Header/>
            <div class="clearfix"></div>
                <div class="content-wrapper">
                    <div class="container-fluid">
                    <Outlet />
                    <div class="overlay toggle-menu"></div>
                </div>
            </div>
            <Footer />
        </div>
        
    );
}
export default Layout;