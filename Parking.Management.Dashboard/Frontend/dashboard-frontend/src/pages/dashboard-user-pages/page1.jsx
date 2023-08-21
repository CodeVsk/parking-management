import React from "react"
import styles from "../../style/page1.module.css"
import SidebarUser from "../../components/sidebar-user"

const Page1 = () => {
    return (
        <div className={styles.container}>
            <SidebarUser />
            <h1>Page 1</h1>
        </div>
    )
}

export default Page1