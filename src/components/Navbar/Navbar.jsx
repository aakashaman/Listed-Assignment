import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons'
import s from "./navbar.module.css"
import bell from './bell.svg'
export default function Navbar() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2%" }}>
      <h1 style={{ flexGrow: 1 }}>Dashboard</h1>
      <div className={s.searchcard} style={{ marginRight: "2%" }}>
        <div className={s.searchbox}>
          <input type="text" placeholder="Search..." className={s.searchinput} />
          <FontAwesomeIcon icon={faSearch} className={s.searchicon} />
        </div>
        <div className={s.notification}>
            <img src={bell} alt="bell" className={s.bell} />
          <div className={s.profilepicture}>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="profile"
              className={s.profileimage}
            />
          </div>
          <button className={s.logoutb} onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
