import './login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="container">
            <div className="container-form">
                <div className="form">
                    <form action="#">
                        <div className="form-header">
                            <div className="title">
                                <h1>Fazer Login</h1>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="input-box">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder='Digite seu Email...' 
                                    required
                                />
                            </div>

                            <div className="input-box">
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
                            <Link className='continue-button' to="/dashboard">Continuar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login