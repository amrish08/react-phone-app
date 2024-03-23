import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Assets/PhoneNumberValidation.css';
import Logo from './Assets/Images/logo.png';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

function PhoneNumberValidation() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
        setIsValidPhoneNumber(value.length >= 10);
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    };



    return (
        <div className='container-fluid'>
            <div class="card text-center">
                <div class="card-header">
                    <h2>Hack Phone Number</h2>
                </div>
                <form>
                    <div class="card-body">
                        <img src={Logo} className='logo' />
                        <div className='phone-input-container'>
                            <label>
                                Phone Number:
                                <PhoneInput
                                    country={'us'}
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    inputProps={{
                                        required: true,
                                    }}
                                />
                                { phoneNumber && (
                                     <Link to='/block' className="btn btn-dark my-4">Get Data</Link>
                                 )}
                            </label>
                            {!valid && <p>Please enter  valid phone number</p>}
                        </div>
                    </div>
                </form>
                <div class="card-footer text-muted">
                    <p>Copyright © 2024 Hack-Phone-Number Inc.</p>
                </div>
            </div>


        </div>

    )
}

export default PhoneNumberValidation;