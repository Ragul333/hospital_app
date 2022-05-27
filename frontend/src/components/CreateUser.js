import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const URL = 'http://localhost:5000';

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({
        name: "",
        date: "",
        address: "",
        phone: "",
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userCreated = await axios.post(`${URL}/createUser`, user);
        if (userCreated) {
            setOpen(true);
        }
        setUser({
            name: "",
            date: "",
            address: "",
            phone: "",
        });
        setOpen(false);
    }

    const handleClose = (event) => {
        setOpen(false);
    };


    return (
        <>
            <div className='container'>
                <div className='col-md-6 mx-auto' style={{ border: '1px solid lightgrey', padding: '1%',margin:'2%' }}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="emailHelp"
                            name='name'
                            value={user?.name}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            aria-describedby="emailHelp"
                            name='address'
                            value={user?.address}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter address" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            aria-describedby="emailHelp"
                            name='phone'
                            value={user?.phone}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter phone" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            aria-describedby="emailHelp"
                            name='date'
                            value={user?.date}
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter Date" />
                    </div>
                    <div className='col-md-4 mx-auto'>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => handleSubmit(e)}
                    >Create</button>
                </div>
                </div>
            </div>
        </>)
}

export default CreateUser;