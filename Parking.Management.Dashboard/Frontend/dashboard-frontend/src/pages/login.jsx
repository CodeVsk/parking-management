import React from 'react'
import styles from '../style/login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerForm}>
                <div className={styles.form}>
                    <form action="#">
                        <div className={styles.formHeader}>
                            <div className={styles.title}>
                                <h1>Fazer Login</h1>
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <div className={styles.inputBox}>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder='Digite seu Email...' 
                                    required
                                />
                            </div>

                            <div className={styles.inputBox}>
                                <label htmlFor="password">Senha</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    placeholder="Digite sua Senha..."
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <Link className={styles.continueButton} to="/dashboard-user">Continuar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login