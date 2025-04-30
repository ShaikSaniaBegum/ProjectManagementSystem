import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from "./HomePage";

import AdminDashboard from './AdminDashboard';
import FacultyDashboard from './FacultyDashboard';
import StudentDashboard from './StudentDashboard';

const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/:username" element={<AdminDashboard />} />
                <Route path="/faculty" element={<FacultyDashboard />} />
                <Route path="/student" element={<StudentDashboard />} />
            </Routes>
        </Router>
    );
};

export default App;