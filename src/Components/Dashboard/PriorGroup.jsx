import React, { useEffect, useState } from 'react'
import High_icon from '../../assets/Img - High Priority.svg'
import Urgent_icon from '../../assets/SVG - Urgent Priority colour.svg'
import Medium_icon from '../../assets/Img - Medium Priority.svg'
import Low_icon from '../../assets/Img - Low Priority.svg'
import No_icon from '../../assets/No-priority.svg'
import './statusg.css'
import Add_icon from '../../assets/add.svg'
import Three_dot_icon from '../../assets/3 dot menu.svg'
import Cards from '../Cards'
import PriorCards from '../PriorCards'
import Avatar from '../Avatar'

const PriorGroup = ({ ticketData, userData }) => {
    const [backlog, setBacklog] = useState([]);
    const [todo, setTodo] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [cancelled, setCancelled] = useState([]);
    const setState = () => {
        let data = [];
        data = ticketData.filter((t) => t.priority == 0);
        setBacklog(data);
        data = ticketData.filter((t) => t.priority == 4);
        setInProgress(data);
        data = ticketData.filter((t) => t.status == 3);
        setTodo(data);
        data = ticketData.filter((t) => t.status == 2);
        setDone(data);
        data = ticketData.filter((t) => t.status == 1);
        setCancelled(data);
    }
    useEffect(() => {
        setState();
    }, [ticketData])
  return (
    <div className='statusg-main'>
        <div className="statusg-body">
            <div className="statusg-header">
                <span>
                    <img src={No_icon} />
                    <p>No priority</p>
                    <p>{backlog.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                backlog?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <PriorCards id={e.id} title={e.title} tags={e.tag[0]} user={user}  priority={e.priority} status={e.status}/>
                    )
                })
            }
        </div>
        <div className="statusg-body">
            <div className="statusg-header">
                <span>
                    <img src={Urgent_icon} />
                    <p>Urgent</p>
                    <p>{todo.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                todo?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <PriorCards id={e.id} title={e.title} tags={e.tag[0]} user={user}  priority={e.priority} status={e.status}/>
                    )
                })
            }
        </div>
        <div className="statusg-body">
            <div className="statusg-header">
                <span>
                    <img src={High_icon} />
                    <p>High</p>
                    <p>{inProgress.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                inProgress?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <PriorCards id={e.id} title={e.title} tags={e.tag[0]} user={user}  priority={e.priority} status={e.status}/>
                    )
                })
            }
        </div>
        <div className="statusg-body">
            <div className="statusg-header">
                <span>
                    <img src={Medium_icon} />
                    <p>Medium</p>
                    <p>{done.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                done?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <PriorCards id={e.id} title={e.title} tags={e.tag[0]} user={user}  priority={e.priority} status={e.status}/>
                    )
                })
            }
        </div>
        <div className="statusg-body">
            <div className="statusg-header">
                <span>
                    <img src={Low_icon} />
                    <p>Low</p>
                    <p>{cancelled.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                cancelled?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (

                        <PriorCards id={e.id} title={e.title} tags={e.tag[0]} user={user}  priority={e.priority} status={e.status}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PriorGroup