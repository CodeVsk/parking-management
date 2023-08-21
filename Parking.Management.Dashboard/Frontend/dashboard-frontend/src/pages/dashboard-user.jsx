import React from "react"
import SidebarUser from "../components/sidebar-user"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "../pages/dashboard-user-pages/page1";
import Page2 from "../pages/dashboard-user-pages/page2"
import Page3 from "../pages/dashboard-user-pages/page3"

const DashboardUser = () => {
    return (
        <SidebarUser>
            <Router>
                <Routes>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                </Routes>
            </Router>
        </SidebarUser>
    )
}

export default DashboardUser