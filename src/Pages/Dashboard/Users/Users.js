import React, { useEffect, useState } from 'react';

import UsersInfo from './UsersInfo';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://manufacture-tribe.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users]);
    return (
        <div>
            <div class="overflow-x-auto w-screen lg:w-full">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>User Email</th>
                            <th>Give Role</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map(user => <UsersInfo index key={user._id} user={user}></UsersInfo>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;

