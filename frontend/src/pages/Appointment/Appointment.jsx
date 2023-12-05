import React from 'react';
// import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm';

const Appointment = () => {

    return (
        <>
            <PageHeader title="Our Services" content="Appointment" />
            <AppointmentForm />
        </>
    );
};

export default Appointment;