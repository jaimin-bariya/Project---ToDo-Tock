// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';

// Create the AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null)

  // Base URL for your Django API
  const API_URL = 'http://127.0.0.1:5000/api/';





  // Login function
  const login = async (usernameOrEmail, password) => {
    try {
      const response = await axios.post(`${API_URL}login`, { usernameOrEmail, password });
      const user = response.data; // Get the JWT access token and user data
      // localStorage.setItem('accessToken', access); // Store the token in local storage
      // setUser(user); // Set the user data in state
      // setUserId(10)

      console.log(user);
      setUser(user)
      setUserId(user['id'])
      console.log(user.message);
      console.log(user);


      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('accessToken', user.token)
      
      
      // Set axios default Authorization header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;


      return userId; // Return user ID for navigation
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Optionally, handle error here (e.g., show an error message)
    }
  };

    // Signup function
    const signup = async (username, email, name, password, gender) => {
      try {


        const response = await axios.post(`${API_URL}signup`, {
          username:username,
          email:email,
          name:name,
          password:password,
          gender:gender
        });

        console.log("res from flask", response);
        console.log("res from flask", response.data);
        

        const user = response.data


      // Store user data and token in local storage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('accessToken', user.token);

      // Set axios default Authorization header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

        

        setUser(user); // Set the user data in state
        setUserId(user.id)
        console.log(userId);
        
        return user.id; // Return user ID for navigation
      } catch (error) {

        if (error.response && error.response.status === 400) {
          console.log(error.response.data.error);
          

          if (error.response.data.error === 'Email is already exist'){
            throw new Error(error.response.data.error)
          } else if (error.response.data.error === 'Username is already exist') {
            throw new Error(error.response.data.error)
          }

          
          
        }

        console.error("Signup failed:", error);
        throw error; // Optionally, handle error here (e.g., show an error message)
      }
    };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user'); // Remove user from local storage
    localStorage.removeItem('accessToken'); // Remove token from local storage
    delete axios.defaults.headers.common['Authorization']; // Remove the Authorization header
    setUser(null); // Clear user state
    setUserId(null); // Clear userId
  };


  // useEffect(() => {
  //   console.log('userid is ', userId);
    
  // }, [userId])


  // Check if user is logged in on component mount
  useEffect(() => {


    const storedUser = localStorage.getItem('user')
    const token = localStorage.getItem('accessToken')



    if (token && storedUser) {

      setUser(JSON.parse(storedUser))
      setUserId(JSON.parse(storedUser).id)

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the token in axios headers
      // Optionally fetch user info from API if needed
      // You can call an API endpoint to get user details here
    }
    setLoading(false); // Set loading to false after check
  }, []); 

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, userId }}>
      {children} {/* Render child components */}
    </AuthContext.Provider>
  );
};
