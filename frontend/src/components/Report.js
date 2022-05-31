import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CreateReport = (props) => {
    const URL = 'http://localhost:5000';
    const location = useLocation();

    const phoneNum = location.state.phone;
    const userName = location.state.name;
    const userAddress = location.state.address;
    const [open, setOpen] = useState(false);
    const [report, setreport] = useState({
        name: userName ? userName : "",
        date: "",
        address: userAddress ? userAddress : "",
        phone: phoneNum ? phoneNum : "",
        medicine: "",
        summary: "",
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setreport((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reportCreated = await axios.post(`${URL}/createReport`, report);
        if (reportCreated) {
            setOpen(true);
        }
        setreport({
            name: "",
            date: "",
            address: "",
            phone: "",
            medicine: "",
            summary: "",
        });
        setOpen(false);
    }

    const handleClose = (event) => {
        setOpen(false);
    };


    return (
        <>
            {
                report.length === 0 ? "Loading" :
                    <div className='container'>
                        <div className='col-md-6 mx-auto' style={{ border: '1px solid lightgrey', padding: '1%', margin: '2%' }}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    aria-describedby="emailHelp"
                                    name='name'
                                    value={report?.name}
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
                                    value={report?.address}
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
                                    value={report?.phone}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter phone" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Medicine</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="medicine"
                                    aria-describedby="emailHelp"
                                    name='medicine'
                                    value={report?.medicine}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter medicine" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Summary</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="summary"
                                    aria-describedby="emailHelp"
                                    name='summary'
                                    value={report?.summary}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter summary" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    aria-describedby="emailHelp"
                                    name='date'
                                    value={report?.date}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Enter Date" />
                            </div>
                            <div className='col-md-4 mx-auto'>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={(e) => handleSubmit(e)}
                                >Create Report</button>
                            </div>
                        </div>
                    </div>
            }
        </>)
}

export default CreateReport;