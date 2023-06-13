import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import UserEditProfile from "../Pages/Clients/EditProfile";
import Home from "../Pages/Clients/Home";
import UserLogin from "../Pages/Clients/Login";
import UserProfile from "../Pages/Clients/Profile";
import Register from "../Pages/Clients/Register";

function UserRoute() {
    const IsAuth = useSelector((state) => state.Client);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={IsAuth.Token ? <Home /> : <UserLogin />} />
                <Route path="/user_profile" element={IsAuth.Token ? <UserProfile /> : <UserLogin />} />
                <Route path="/edit_profile" element={IsAuth.Token ? <UserEditProfile /> : <UserLogin />} />
            </Routes>
        </div>
    );
}

export default UserRoute;
