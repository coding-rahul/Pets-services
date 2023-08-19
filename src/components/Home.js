import "./Home.css";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./Navbar";
import DashBoard from "./DashBoard";

const Home = () => {
    const [data, updateData] = useState([]);
    const [input, updateInput] = useState("");
    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

    const getApi = () => {
        fetch("http://localhost:12345/Data")
            .then(api => api.json())
            .then(apiData => updateData(apiData))
    }

    useEffect(() => {
        getApi()
    }, []);

    return (
        <>
            {
                isAuthenticated ? (
                    <DashBoard />
                ) :
                    <div className="container">
                        <Navbar />
                        <div className="Input-fld">
                            <input type="search" value={input} onChange={(e) => updateInput(e.target.value)} className="search-box" />
                            <button className="Input-btn">Search</button>
                        </div>
                        <div className="Heading">
                            <h1 className="Body-heading">Services</h1>
                            <div className="row">
                                {
                                    data.filter(details => {
                                        if (input === "") {
                                            return details
                                        }
                                        else if (details.service.toLowerCase().includes(input.toLocaleLowerCase())) {
                                            return details
                                        }
                                    }).map(item => (
                                        <div className="service">
                                            <img src={item.img} className="service-img" />
                                            <div className="Sname">Service - {item.service}</div>
                                            <div className="Sname">Price - Rs {item.price}</div>
                                            <button className="servicebtn">service</button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
export default Home;