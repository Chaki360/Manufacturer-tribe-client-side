import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Pages/Shared/Spinner/Loading';
import useToken from '../../UseToken/UseToken';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [displayName] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, UpError] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    }
    if (error || UpError) {
        toast.error(<p>Error:{error.message}</p>)
    }


    if (loading || updating) {
        return <Loading />
    }

    if (token) {
        navigate(from, { replace: true });
        toast.success('Registration successful')

    }
    return (
        <div className='justify-items-center'>
            <section className="py-20 bg-violet-50">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto">
                        <div className="text-center mt-6">

                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Please Sign Up</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg rounded-lg'><div className="form-control mb-3">
                            <label className="block mb-1 font-extrabold" >Name</label>
                            <input className="inline-block w-full py-2 px-1  text-lg font-bold bg-violet-50 shadow border-2 border-slate-800 rounded-lg" type="text" placeholder="Enter your name"   {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>
                            <div className="mb-3 form-control">
                                <label className="block mb-1 font-extrabold" >Email</label>
                                <input className="inline-block w-full py-2 px-1  text-lg font-bold bg-violet-50 shadow border-2 border-slate-800 rounded-lg" type="email" placeholder="Enter your email"   {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {

                                        message: 'Provide a valid Email'
                                    }
                                })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="mb-5 form-control">
                                <label className="block mb-1 font-extrabold" >Password</label>
                                <input className="inline-block w-full py-2 px-1  text-lg font-bold bg-violet-50 shadow border-2 border-slate-800 rounded-lg" type="password" placeholder="Enter your password"    {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters '
                                    }
                                })} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                </label>
                            </div>


                            <input type='submit' value="Sign Up" className="inline-block w-full py-3 px-2 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-primary hover:bg-violet-900 border-3 border-violet-900 shadow rounded-lg transition duration-200"></input>

                        </form>
                        <p className="text-center font-extrabold mt-3">Already have an account? <Link to='/login' className="text-red-500 hover:underline" >Sign In</Link></p>

                        <SocialLogin />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;