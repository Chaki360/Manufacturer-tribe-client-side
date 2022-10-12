import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import Loading from '../../Pages/Shared/Spinner/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const ResetPassWord = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    if (error) {
        toast.error(<p>Error:{error.message}</p>)
    }

    if (sending) {
        return <Loading />
    }


    return (
        <div className='justify-items-center'>
            <section className="py-20 bg-violet-50">
                <div className="container px-4 mx-auto">
                    <div className="max-w-lg mx-auto">
                        <div className="text-center mt-6">

                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Please reset your password</h2>
                        </div>
                        <div className='shadow-lg rounded-lg'>
                            <div className="mb-6">
                                <label className="block mb-1 font-extrabold" >Email</label>
                                <input value={email}
                                    onChange={(e) => setEmail(e.target.value)} required className="inline-block w-full py-2 px-1 text-lg font-bold bg-violet-50 shadow border-2 border-slate-800 rounded" type="email" placeholder="Enter your email" />
                            </div>


                            <button onClick={async () => {
                                await sendPasswordResetEmail(email);
                                toast.success('Sent email');

                            }} type='submit' className="inline-block w-full py-2 px-1 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-primary hover:bg-violet-900 border-3 border-violet-900 shadow rounded transition duration-200">Reset PassWord</button>

                        </div>
                        <p className="text-center font-extrabold mt-3">Remember password? <Link to='/login' className="text-red-500 hover:underline" >Sign In</Link></p>
                        <SocialLogin />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResetPassWord;