
import React from 'react';
import { toast } from 'react-toastify';

const UsersInfo = ({ user }) => {
    const { email, role } = user;

    const handleRemoveUser = id => {

        const url = `https://manufacture-tribe.herokuapp.com/user/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`User removed successfully `)

            })

    };

    const makeAdmin = id => {

        const url = `https://manufacture-tribe.herokuapp.com/user/admin/${email}`
        fetch(url, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success(`Admin made successfully `)
                } else {
                    toast.error(`Failed to make an admin `)
                }

            })

    };




    return (
        <tr>

            <td>{email}</td>
            <td> {role !== "admin" && <button onClick={makeAdmin} className='btn-success flex justify-center text-white items-center rounded px-1 py-1'>Make Admin </button>}</td>
            <td> <button onClick={() => handleRemoveUser(user._id)} className='btn-error flex justify-center text-white items-center rounded px-1 py-1'>Remove user</button></td>




        </tr>
    );
};

export default UsersInfo;