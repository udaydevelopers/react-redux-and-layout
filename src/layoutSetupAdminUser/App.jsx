// App.jsx
import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import Dashboard from "./pages/admin/Dashboard";
import ManageCourses from "./pages/admin/ManageCourses";
import CourseList from "./pages/user/CourseList";
import CourseDetail from "./pages/user/CourseDetail";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Faqs from "./pages/Faqs";
import Features from "./pages/Features";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import Users from "./pages/Users";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<ManageCourses />} />
        </Route>

        <Route path="/" element={<UserLayout />}>
          <Route index element={<CourseList />} />
          <Route path="course/:id" element={<CourseDetail />} />

          <Route
            path="about"
            element={
              <PrivateRoute auth={isAuthenticated}>
                <About />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="features" element={<Features />} />
          <Route path="faqs" element={<Faqs />} />
          <Route
            path="users"
            element={
              <PrivateRoute auth={isAuthenticated}>
                <Users />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
