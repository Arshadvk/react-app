import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userAxios from "../../../Axios/userAxios.js";

function UserHome() {
    const [name, setName] = useState("");
    const token = useSelector((store) => store.Client.Token);

    useEffect(() => {
        if (token) {
            userAxios
                .get("/getDetails", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    setName(res.data.name);
                });
        } else {
            console.log("no token");
        }
    }, [token]);

    return (
        <div>
            <div className="p-3">
                <div className="m-5">
                    <div className="d-flex justify-content-center p-3">{name ? <b>Welcome {name}</b> : ""}</div>
                    <div className="d-flex justify-content-center">
                        <img
                            src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/spider-man-across-the-spider-verse-poster.jpg"
                            alt="...."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserHome;
