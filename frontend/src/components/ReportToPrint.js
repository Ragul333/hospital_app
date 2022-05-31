import axios from 'axios';
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ReportToPrint = ({ phone }) => {
    const componentRef = useRef();

    const URL = 'http://localhost:5000';
    const [num, setNum] = useState('');
    const location = useLocation();

    const phoneNum = location.state.phone;
    console.log(phoneNum)

    const [reports, setReports] = useState([])
    useEffect(() => {
        async function fetchdata() {
            if (phoneNum.length > 0) {
                const data = await axios.get(`${URL}/getReport/${phoneNum}`)
                setReports(data?.data)
            }
        }

        fetchdata()
    }, [phoneNum])

    return (
        <>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            {reports.length < 0 ? "Loading" : (
                reports?.map((data) => {
                    return (
                        <div class="card" style={{ width: "18rem" }} ref={componentRef}>
                            <div class="card-body">
                                <h5 class="card-title">{data?.name}</h5>
                                <p class="card-text">{data?.address}</p>
                                <p class="card-text">{data?.phone}</p>
                                <p class="card-text">{data?.date}</p>

                                {
                                    data?.medicine?.map((ele) => {
                                        return (
                                            <p class="card-text">{ele}</p>
                                        )
                                    })
                                }

                                <Link to="/Report-to-print" state={{ data }}>
                                    <button className="btn btn-primary-outline ml-auto">
                                        P
                                    </button>
                                </Link>
                            </div>
                        </div>)
                }))}
        </>
    )
}

export default ReportToPrint;