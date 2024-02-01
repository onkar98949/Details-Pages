import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { signupValidation } from '../validation';

const Register = () => {
    const naviagte = useNavigate();

    const initialValues = {
        name:"",
        email:"",
        password:"",
        confirm_password:""
    }

    const {values, errors , handleBlur, touched , handleChange, handleSubmit } = useFormik({
        initialValues:initialValues,
        validationSchema:signupValidation, 
        onSubmit:(values)=>{
            naviagte('/details')
        }
    })

    return (
        <div className='h-screen bg-blue-300 flex items-center'>
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form onSubmit={handleSubmit} method="POST" className="register-form">
                            <div className='form-group'>
                                <label ><i class="ri-user-fill"></i></label>
                                <div>
                                <input type="text" name="name" id="name" placeholder="Your Name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.name&& touched.name?(<p className='ml-2 text-red-500'>{errors.name}</p>):(<></>)}
                                </div>
                            </div>
                           
                            <div className='form-group'>
                                <label><i class="ri-mail-fill"></i></label>
                                <div>
                                <input type="email" name="email" id="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.email&& touched.email?(<p className='ml-2 text-red-500'>{errors.email}</p>):(<></>)}
                                </div>
                            </div>
                            <div className='form-group'>
                                <label><i class="ri-lock-fill"></i></label>
                                <div>
                                <input type="password" name="password" id="password" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.password&& touched.password?(<p className='ml-2 text-red-500'>{errors.password}</p>):(<></>)}
                                </div>
                            </div>
                            <div className='form-group'>
                                <label><i class="ri-lock-line"></i></label>
                                <div>
                                <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.confirm_password&& touched.confirm_password?(<p className='ml-2 text-red-500'>{errors.confirm_password}</p>):(<></>)}
                                </div>
                            </div>
                            
                            <div>
                               <button type='submit' className='submitbtn'>Next</button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <div><img src='https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg' alt="sing up image" /></div>
                        <Link to={'/login'} className='font-serif text-blue-800 underline ml-10 mt-5'>Already a member? Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register