import React, { useEffect, useState } from 'react'
import Cards from '../Components/Cards';
import './dash.css'
import StatusGroup from '../Components/Dashboard/StatusGroup';
import Navbar from '../Components/Navbar/Navbar';

const Dashboard = () => {
    const [ticketData, setTicketData] = useState([]);
    const [userData, setUserData] = useState([]);
    const fetchAPI = async() => {
        try {
            const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const data = await res.json()
            setTicketData(data["tickets"] || [])
            setUserData(data.users || [])
            console.log((data["users"]));
            console.log(data["tickets"])

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchAPI();
    }, [])
  return (
    <div className='dash-main'>
        {ticketData.length > 0 ? (
            <>
            <Navbar />
            <StatusGroup ticketData={ticketData} userData={userData} />
            </>
        ) : (
            <p>Loading tickets...</p> // Provide fallback UI if ticketData is empty
        )}
    </div>
  )
}

export default Dashboard