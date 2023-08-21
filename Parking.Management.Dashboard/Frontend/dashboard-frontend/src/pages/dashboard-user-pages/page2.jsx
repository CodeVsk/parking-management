import React from "react"
import styles from "../../style/page2.module.css"
import SidebarUser from "../../components/sidebar-user"

const Page2 = () => {
    return (
        <div className={styles.container}>
            <SidebarUser />
            <h1>Page 2</h1>
        </div>
    )
}

export default Page2