import React, { useState, useEffect } from "react";
import "./DashBoard.css";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";

const DashBoard = () => {
    const [data, updateData] = useState([]);
    const { isAuthenticated, logout } = useAuth0();


    const getApi = () => {
        fetch("http://localhost:12345/customer")
            .then(api => api.json())
            .then(apiData => updateData(apiData))
    }
    console.log(data)
    useEffect(() => {
        getApi()
    }, []);

    return (
        <>
            <div className="container">
                <Navbar />
                <div className="Body">
                    {
                        data.map((details) => (
                            <div className="Cdetails">
                                <div className="details">
                                    <div className="cardDetails">
                                        <h2>{details.customerName}</h2>
                                        <h4>Email : {details.email}</h4>
                                        <h4>Pet Name : {details.petName}</h4>
                                        <h4>Last service : {details.lastService}</h4>
                                    </div>
                                    <div className="detail-img">
                                        <img src={details.img} className="img" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default DashBoard;