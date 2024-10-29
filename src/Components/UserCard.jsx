import React from 'react'
import './card.css'
import ThreeDot from '../assets/3 dot menu.svg'
import Avatar from './Avatar'
import High_icon from '../assets/Img - High Priority.svg'
import Urgent_icon from '../assets/SVG - Urgent Priority grey.svg'
import Medium_icon from '../assets/Img - Medium Priority.svg'
import Low_icon from '../assets/Img - Low Priority.svg'
import No_icon from '../assets/No-priority.svg'
import Backlog_icon from '../assets/Backlog.svg'
import Canceled_icon from '../assets/Cancelled.svg'
import Done_icon from '../assets/Done.svg'
import Progress_icon from '../assets/in-progress.svg'
import Todo_icon from '../assets/To-do.svg'
const UserCard = ({ id, title, tags, user, priority, status }) => {
    // console.log(user)
  return (
    <div className='cards'>
        <div className="card-header">
            <span>{id}</span>
            {/* <Avatar name={user.name} /> */}
        </div>
        <div className="card-body">
            {
                status == "Backlog" ? (<img src={Backlog_icon} />) :
                status == "Done" ? (<img src={Done_icon} />) :
                status == "Progress" ? (<img src={Progress_icon} />) :
                status == "Todo" ? (<img src={Todo_icon} />) : (<img src={Canceled_icon} />) 
            }
            <p>{title}</p>
        </div>
        <div className="card-footer">
            {
                priority == 4 ? (<img src={Urgent_icon} />) : 
                priority == 3 ? (<img src={High_icon} />) : 
                priority == 2 ? (<img src={Medium_icon} />) : 
                priority == 1 ? (<img src={Low_icon} />) : (<img src={No_icon} />)
            }
            <span>{tags}</span>
        </div>
    </div>
  )
}

export default UserCard