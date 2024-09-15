import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

export default function Register() {
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            Password: ''
        },
        onSubmit: RegisterUser,
        validate :values=>{
            let errors ={};
                if (values.email.length <= 10){
                    errors.email ="email is required .. !!!";
                }
                if(values,passord.length<=6){
                    errors.passord ="password is reqired ..";
                }
            return errors;
        }
    });

    async function RegisterUser(values) {
    const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values);
    console.log(data);
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={formik.handleChange}
                        name="userName"
                        id="name"
                        value={formik.values.userName}
                        placeholder=""
                    />
                    <label htmlFor="name">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="email" 
                        className="form-control"
                        onChange={formik.handleChange}
                        name="email"
                        id="email"
                        value={formik.values.email}
                        placeholder=""
                    />
                    <label htmlFor="email">User Email</label>
                    {formik.errors.email}
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="password" 
                        className="form-control"
                        onChange={formik.handleChange}
                        name="Password"
                        id="pass"
                        value={formik.values.Password}
                        placeholder=""
                    />
                    <label htmlFor="pass">User Password</label>
                    {formik.errors.password}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}