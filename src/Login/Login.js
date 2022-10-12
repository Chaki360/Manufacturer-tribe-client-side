import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';
import Loading from '../Pages/Shared/Spinner/Loading';
import useToken from '../UseToken/UseToken';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user);
    if (error) {

        toast.error(<p>Error:{error.message}</p>)
    }


    if (loading) {
        return <Loading />
    }

    if (token) {
        navigate(from, { replace: true });
        toast.success('Login Successful')

    }
    return (
        <div className='justify-items-center'>
            <section className="py-20 bg-violet-50">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto">
                        <div className="text-center mt-6">

                            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Please Sign in</h2>
                        </div>
                        <div className=' shadow-lg rounded-lg' >
                            <div className="mb-6">
                                <label className="block mb-2 font-extrabold" >Email</label>
                                <input value={email}
                                    onChange={(e) => setEmail(e.target.value)} required className="inline-block w-full py-2 px-1 text-lg font-bold bg-violet-50 shadow border-2 border-slate-800 rounded-lg" type="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 font-extrabold" >Password</label>
                                <input value={password}
                                    onChange={(e) => setPassword(e.target.value)} required className="inline-block w-full py-2 px-1  text-lg font-bold bg-violet-50 shadow border-2 border-slate-800 rounded-lg" type="password" placeholder="Your current password" />
                            </div>
                            <div className="w-full lg:w-auto mb-2"><Link to='/reset-password' className="inline-block font-extrabold hover:underline" >Forgot your password?</Link></div>

                            <button onClick={() => signInWithEmailAndPassword(email, password)} className="inline-block w-full py-2 px-1 mb-6 text-center text-lg  text-white font-extrabold bg-primary hover:bg-violet-900 border-3 border-violet-900 shadow rounded-lg transition duration-200">Sign in</button>

                        </div>
                        <p className="text-center font-extrabold mt-3">Don&rsquo;t have an account? <Link to='/register' className="text-red-500 hover:underline" >Sign up</Link></p>
                        <SocialLogin />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Login;