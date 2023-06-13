import React  from "react";
import Navbar from "../../Components/admin/Navbar/Navbar";
import ClientTable from "../../Components/admin/Client/Client";

function AdminHome() {
    return (
        <div className="container w-100">
            <Navbar />
            <ClientTable />
            
        </div>
    );
}
export default AdminHome;
