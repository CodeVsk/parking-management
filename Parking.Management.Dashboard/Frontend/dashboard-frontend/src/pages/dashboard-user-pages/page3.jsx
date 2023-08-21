import React from "react"
import styles from "../../style/page3.module.css"
import SidebarUser from "../../components/sidebar-user"

const Page3 = () => {
    return (
        <div className={styles.container}>
            <SidebarUser />
            <h1>Page 3</h1>
        </div>
    )
}

export default Page3