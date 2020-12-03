import React from 'react'
import Cookies from "js-cookie"

export default function Home(props) {
    const user = Cookies.get("username")

    function handleLogout() {
        Cookies.remove("username")
    }

    return (
       <div className='home-wrapper'>
           <h2>WELCOME {user ? user : "Guest"}</h2>
           {user ? <button onClick={handleLogout}>Logout</button> : null}
       </div>
    )
}