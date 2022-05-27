import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (

        <section>
            <h1 className='text-4xl mb-4 mt-5 text-center  font-bold text-indigo-900'>Click on My Profile to see your profile info</h1>
            <label for="tribal-modal" className="btn  justify-center items-center bg-primary modal-button">My profile</label>


            <input type="checkbox" id="tribal-modal" className="modal-toggle" />
            <div className="modal bg-violet-50">
                <div className="modal-box">
                    <div className="h-32 w-32">
                        <img src={user.photoURL} alt="" className="rounded-full object-cover h-full w-full shadow-md" />

                    </div>
                    <h3 className="font-bold text-lg ">Your Name:<span className='text-emerald-500'> {user?.displayName}</span></h3>
                    <p className="py-4 text-lg">Your Email:<span className='text-blue-500'> {user?.email}</span></p>
                    <div className="modal-action">
                        <label for="tribal-modal" className="btn bg-primary">close</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;