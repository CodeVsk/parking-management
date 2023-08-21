import React from "react"
import styles from "../style/sidebar-user.module.css"
import { SidebarUserData } from "./sidebar-user-data"
import { Link } from "react-router-dom"

const SidebarUser = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <ul className={styles.sidebarList}>
                    <li className={styles.titleRow}>
                        <h1>Usuário</h1>
                    </li>
                    {SidebarUserData.map((value, key) => {
                        return (
                            <li 
                                key={key} 
                                className={styles.row}
                                id={window.location.pathname == value.link ? styles.active : ""}
                                onClick={
                                    ()=> {window.location.pathname = value.link}
                                }
                                >
                                <div className={styles.icon}>
                                    {value.icon}
                                </div>
                                <div className={styles.title}>
                                    {value.title}
                                </div>
                            </li>
                        )
                    })}
                    <li className={styles.logout}>
                        <Link className={styles.logoutLink} to="/">Fazer Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarUser