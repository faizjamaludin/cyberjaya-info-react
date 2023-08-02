import React from 'react'
import Topnav from "../../components/Topnav";
import Footer from "../../components/Footer";

import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector } from '../../features/store';

function EventsPage() {

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
    console.log(isAuthenticated);

    return (
        <div className="w-full justify-center items-center flex flex-col">
            <Topnav />
            <div className="container flex justify-center items-center flex-col">

            </div>
            <Footer />
        </div>
    )
}

export default EventsPage