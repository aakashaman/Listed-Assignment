import s from './sidebar.module.css';
import dashboard from './resources/dashboard.svg';
import transaction from './resources/transaction.svg';
import schedule from './resources/schedule.svg';
import user from './resources/user.svg';
import setting from './resources/setting.svg';

const items = [
  { img: dashboard, text: "Dashboard" },
  { img: transaction, text: "Transactions" },
  { img: schedule, text: "Schedules" },
  { img: user, text: "Users" },
  { img: setting, text: "Settings" },
];

export default function Sidebar() {
  return (
    <div>
      <div className={s.card}>
        <h1 className={s.board_text}>Board.</h1>
        <ul className={s.content}>
          {items.map((item, index) => (
            <li style={{ display: "flex" }} key={index}>
              <img src={item.img} alt={`Icon ${index}`} />
              <div style={{ marginLeft: "10px" }}>{item.text}</div>
            </li>
          ))}
          <li style={{ display: "flex", marginTop: "33vh", flexDirection: "column", gap: "20px" }}>
            <div style={{ marginLeft: "10px" }}>Help</div>
            <div style={{ marginLeft: "10px" }}>Contact Us</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
