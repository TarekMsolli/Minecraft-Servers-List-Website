import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ServerList from './components/ServerList';

const Home = () => <div>Home</div>;
const ServersList = () => <ServerList />;
const AddServer = () => <div>Add Server</div>;
const Login = () => <div>Login</div>;
const Signup = () => <div>Signup</div>;

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servers" element={<ServersList />} />
                <Route path="/add-server" element={<AddServer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
