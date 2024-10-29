import React, { useState } from 'react'
import './navbar.css'
import Down_icon from '../../assets/down.svg'
import Display_icon from '../../assets/Display.svg'
import { saveToLocal, getFromLocal } from '../../utils'
const Navbar = ({ grouping, setGrouping, ordering, setOrdering }) => {
    const [show, setShow] = useState(false);
    const [showGrouping, setShowGrouping] = useState(false);
    const [showOrdering, setShowOrdering] = useState(false);
  return (
    <div className="nav-main">
        <span className="nav-grp" onClick={() => {
            setShow(!show)
            setShowGrouping(false)
            setShowOrdering(false)
        }}>
            <img src={Display_icon} alt="" />
            <p>Display</p>
            <img src={Down_icon} alt="" />
        </span>
        <span className={!show ? 'nav-hidden hidden' : 'nav-hidden'}>
            <div className='nav-hid-wrapper'>
                <div className="nav-grouping">
                    <span>Grouping</span>
                    <span className='nav-action' onClick={() => {
                        console.log("cli")
                        setShowGrouping(!showGrouping)
                        setShowOrdering(false)
                    }}>
                        <p>{grouping}</p>
                        <img src={Down_icon} alt="" />
                    </span>
                </div>
                <div className={!showGrouping ? "sub-nav-group hidden" : "sub-nav-group"}>
                    <span onClick={() => {
                        setGrouping("Status")
                        setShowGrouping(false)
                        saveToLocal("Status", ordering)
                    }}>Status</span>
                    <span onClick={() => {
                        setGrouping("User")
                        setShowGrouping(false)
                        saveToLocal("User", ordering)
                    }}>User</span>
                    <span onClick={() => {
                        setGrouping("Priority")
                        setShowGrouping(false)
                        saveToLocal("Priority", ordering)
                    }}>Priority</span>
                </div>
            </div>
            <div className='nav-hid-wrapper'>
                <div className="nav-ordering">
                    <span>Ordering</span>
                    <span className='nav-action' onClick={() => {
                        setShowOrdering(!showOrdering)
                        setShowGrouping(false)
                    }}>
                        <p>{ordering}</p>
                        <img src={Down_icon} alt="" />
                    </span>

                </div>
                <div className={!showOrdering ? "sub-nav-group hidden" : "sub-nav-group"}>
                    <span onClick={() => {
                        setOrdering("Priority")
                        setShowOrdering(false)
                        saveToLocal(grouping, "Priority")
                    }}>Priority</span>
                    <span onClick={() => {
                        setOrdering("Title")
                        setShowOrdering(false)
                        saveToLocal(grouping, "Title")
                    }}>Title</span>
                </div>
            </div>
        </span>
    </div>
  )
}

export default Navbar