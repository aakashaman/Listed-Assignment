import s from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faMoneyBillAlt, faCalendarAlt, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div>
      <div className={s.card}>
        <h1 className={s.board_text}>Board.</h1>
        <ul className={s.content}>
          <li style={{display:"flex"}}>
            <FontAwesomeIcon icon={faChartBar} />
            <div style={{marginLeft:"10px"}}>Dashboard</div>
          </li>
          <li style={{display:"flex"}}>
            <FontAwesomeIcon icon={faMoneyBillAlt} />
            <div style={{marginLeft:"10px"}}>Transactions</div>
          </li>
          <li style={{display:"flex"}}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <div style={{marginLeft:"10px"}}>Schedules</div>
          </li>
          <li style={{display:"flex"}}>
            <FontAwesomeIcon icon={faUsers} />
            <div style={{marginLeft:"10px"}}>Users</div>
          </li>
          <li style={{display:"flex"}}>
            <FontAwesomeIcon icon={faCog} />
            <div style={{marginLeft:"10px"}}>Settings</div>
          </li>
          <li style={{display:"flex",marginTop:"33vh",flexDirection:"column",gap:"20px" }}>
            <div style={{marginLeft:"10px"}}>Help</div>
            <div style={{marginLeft:"10px"}}>Contact Us</div>
          </li>
        </ul>
    
       
      </div>
    </div>
  )
}
