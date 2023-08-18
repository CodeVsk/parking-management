import React from "react"
import {
    FaBars,
    FaTh,
} from 'react-icons/fa'

const SidebarUser = () => {
    const menuItem = [
        {
            path:"/",
            name:"Page 1",
            icon:<FaTh />
        },
        {
            path:"/page2",
            name:"Page 2",
            icon:<FaTh />
        },
        {
            path:"/page3",
            name:"Page 3",
            icon:<FaTh />
        },
    ]

    return (
        <div className="container">
            <div className="sidebar">
                <div className="top-section">
                    <h1 className="logo">Logo</h1>
                    <div className="bars">
                        <FaBars />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarUser