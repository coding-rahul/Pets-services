import React from "react";
import "./Navbar.css"
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div className="Navbar">
            <div className="Nav-logo"> Pets Services</div>
            <div className="Nav-login">
                {
                    isAuthenticated ? (
                        <button className="Login-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
                    ) :

                        <button className="Login-btn" onClick={() => loginWithRedirect()}>Login</button>
                }
            </div>
        </div>
    )
}
export default Navbar;