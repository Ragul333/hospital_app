import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserCard = ({ name, address, phone }) => {
    const [num, setNum] = useState('');
    const navigate = useNavigate();
    const [redirect, setredirect] = useState(false);
    const toComponentB = () => {
        navigate('/Report', { state: { id: 1, name: 'sabaoon' } });
    }
        const handleProp = (phone) => {
            console.log(phone);
            setredirect(true);
        }
        return (
            <>
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{address}</p>
                        <p class="card-text">{phone}</p>
                    <div class='d-flex'>
                        <Link to="/Report" state={{ name,address,phone }}>
                            <button class="btn btn-warning-outline">Generate report</button>
                        </Link>
                    
                        <Link to="/ReportCard " state={{ phone }}>
                            <button class="btn btn-warning-outline ml-2">View reports</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default UserCard;