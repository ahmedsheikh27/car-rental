'use client'
import React, { useEffect, useState, useContext } from 'react';
import { getLoaction, createBooking } from '@/services';
import { BookingContext } from '@/context/BookingContext';

function Form({ car }: any) {
    const [pickLocation, setPickLocation] = useState<any>([]);
    const [toastMsg, setToastMsg] = useContext(BookingContext)
    const [formValue, setFormValue] = useState({
        location: '',
        pickupdate: '',
        dropoffdate: '',
        pickuptime: '',
        dropofftime: '',
        contactNumber: '',
        userName: '',
        email: '',
        carId: { connect: { id: car?.id } },
    });


    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        userLocation();
    }, []);

    useEffect(() => {
        if (car) {
            setFormValue({
                ...formValue,
                carId: { connect: { id: car.id } },
            });
        }
    }, [car]);

    const userLocation = async () => {
        try {
            const resp = await getLoaction();
            console.log('Response:', resp);
            setPickLocation(resp?.userLocations || []);
        } catch (error) {
            console.error('Error fetching locations:', error);
            setPickLocation([]);
        }
    };
    

    const handleChange = (event: any) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };

    const handleClick = async () => {
        try {
            console.log('Form Data:', formValue);
            const resp = await createBooking(formValue);
            console.log('Booking response:', resp);
            if (resp) {
                setToastMsg(true)
            }
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    return (
        <div>
            <div className="flex flex-col mb-5">
                <label className="text-gray-400">Pick Up Location</label>
                <select
                    className="select select-bordered w-full max-w-lg"
                    name="location"
                    onChange={handleChange}>
                    <option disabled selected>
                        Pick Up Location?
                    </option>
                    {pickLocation.map((loc: any, index: number) => (
                        <option key={index} value={loc?.address}>
                            {loc?.address}
                        </option>
                    ))}

                </select>
            </div>
            <div className="flex gap-5 mb-5">
                <div className="flex flex-col w-[145px] lg:w-full">
                    <label className="text-gray-400">Pick Up Date</label>
                    <input
                        type="date"
                        name="pickupdate"
                        onChange={handleChange}
                        min={today}
                        value={formValue.pickupdate}
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="flex flex-col w-[145px] lg:w-full">
                    <label className="text-gray-400">Drop Off Date</label>
                    <input
                        type="date"
                        name="dropoffdate"
                        onChange={handleChange}
                        min={formValue.pickupdate}
                        value={formValue.dropoffdate}
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
            </div>
            <div className="flex gap-5 mb-5">
                <div className="flex flex-col w-full">
                    <label className="text-gray-400">Pick Up Time</label>
                    <input
                        type="time"
                        name="pickuptime"
                        onChange={handleChange}
                        value={formValue.pickuptime}
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-gray-400">Drop Off Time</label>
                    <input
                        type="time"
                        name="dropofftime"
                        onChange={handleChange}
                        value={formValue.dropofftime}
                        className="input input-bordered w-full max-w-lg"
                    />
                </div>
            </div>
            <div className="flex flex-col mb-5 w-full">
                <label className="text-gray-400">Name</label>
                <input
                    type="text"
                    name="userName"
                    onChange={handleChange}
                    value={formValue.userName}
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="flex flex-col mb-5 w-full">
                <label className="text-gray-400">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formValue.email}
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="flex flex-col mb-5 w-full">
                <label className="text-gray-400">Contact Number</label>
                <input
                    type="number"
                    name="contactNumber"
                    onChange={handleChange}
                    value={formValue.contactNumber}
                    className="input input-bordered w-full max-w-lg"
                />
            </div>
            <div className="modal-action">
                <button className="btn">Close</button>
                <button className="btn btn-primary" onClick={handleClick}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default Form;
