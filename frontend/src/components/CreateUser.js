import React, { useState } from 'react';
import { Button, Grid, IconButton, Snackbar, TextField } from '@mui/material';
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

    const handleSubmit = async () => {
        const userCreated = await axios.post(`${URL}/createReport`, user);
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

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
              X
          </IconButton>
        </React.Fragment>
      );

    return (
        <Grid container>
            <Grid item sm={3}></Grid>
            <Grid item sm={6}>
                <TextField
                    name='name'
                    className='padding-2-percent'
                    label='Name'
                    variant='outlined'
                    value={user?.name}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <TextField
                    name='address'
                    className='padding-2-percent'
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
                    className='padding-2-percent'
                    label='Phone'
                    variant='outlined'
                    value={user?.phone}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='date'
                    className='padding-2-percent'
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

    )
}

export default CreateUser;