import axios from 'axios';
import React, { useState } from 'react';
import UserCard from './UserCards';

const SearchBar = () => {
    const URL = 'http://localhost:5000';

    const [userCard, setUserCard] = useState();
    const [user, setUser] = useState('');

    const handleSearch = async () => {
        const users = await axios.get(`${URL}/getUser/${user}`);
        setUserCard(users?.data)
        console.log('click', user)
    }
    return (
        <>
            <div class='col-md-6 mx-auto d-flex' style={{ margin: '5% auto' }}>
                <input
                    class="form-control mr-sm-2"
                    type="text"
                    value={user}
                    onChange={(e) => { setUser(e.target.value) }}
                    placeholder="Search by Phone number"
                    aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleSearch}>Search</button>

            </div>

            {
                !userCard ? <p className='text-center font-italic'>Enter phone number to display patient details .</p> :

                    <div class='col-md-3 mx-auto'>
                        <UserCard
                            name={userCard?.name}
                            phone={userCard?.phone}
                            address={userCard?.address}
                        />
                    </div>
            }
        </>
    )
}

export default SearchBar;