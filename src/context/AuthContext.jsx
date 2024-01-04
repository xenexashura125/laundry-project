import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [account,setAccount] = useState(null)

    const [formSignUp, setFormSignUp] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        contact_no: '',
        type:"client"
    });

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('userToken')
        fetch('http://localhost:5000/users/getUserByToken', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            if (data.user) {
                // Hide Login and Register links
                
                fetch('http://localhost:5000/users/get-all',{
                    method:'GET',
                    headers: {
                    'Content-Type': 'application/json',
                },
                })
                .then(response => response.json())
                .then(usersData => {
                    const loggedInUserEmail = data.user.username;

                    const loggedInUser = usersData.find(user => user.email === loggedInUserEmail);

                    if (loggedInUser) {
                        setAccount(loggedInUser)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
                localStorage.setItem('userToken', token);
            }
        })
        .catch(error => {
                console.error(error);
        });

    },[])



    return (
        <AuthContext.Provider value={{ formLogin, formSignUp, account,setAccount,setFormLogin,setFormSignUp }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
