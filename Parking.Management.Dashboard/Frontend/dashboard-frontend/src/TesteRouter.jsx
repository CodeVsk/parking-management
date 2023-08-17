import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

const TesteRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default TesteRouter;