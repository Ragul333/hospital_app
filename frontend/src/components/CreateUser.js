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
            {/* <Grid container>
            <Grid item sm={3}></Grid>
            <Grid item sm={6}>
                <TextField
                classNameName='padding-2-percent'
                label='Name'
                variant='outlined'
                name='name'
                    value={user?.name}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <TextField
                    name='address'
                    classNameName='padding-2-percent'
                    label='Address'
                    multiline
                    rows={4}
                    variant='outlined'
                    value={user?.address}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    name='phone'
                    classNameName='padding-2-percent'
                    label='Phone'
                    variant='outlined'
                    value={user?.phone}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='date'
                    classNameName='padding-2-percent'
                    name='date'
                    value={user?.date}
                    onChange={handleChange}
                />
                <br />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                >
                    CREATE
                </Button>
            </Grid>
            <Grid item sm={3}>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Note archived"
                    action={action}
                />

            </Grid>
        </Grid>
 */}
            <div className='container'>
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

                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e)=>handleSubmit(e)}
                >Create</button>
            </div>
        </>)
}

export default CreateUser;