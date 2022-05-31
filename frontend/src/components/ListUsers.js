import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserCard from './UserCards';

const ListUsers = () => {
    const URL = 'http://localhost:5000';
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchdata() {
            const data = await axios.get(`${URL}/getUsers`)
            setUsers(data?.data)
        }

        fetchdata()
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        users.length === 0 ? "Loading" : (users?.map((user) => {
                            return (
                                <div className='col-md-4' style={{padding:'2%'}}>
                                    <UserCard
                                        name={user.name}
                                        phone={user.phone}
                                        address={user.address}
                                    />
                                </div>
                            )
                        })
                        )}
                </div>
            </div>
        </>
    )
}

export default ListUsers;