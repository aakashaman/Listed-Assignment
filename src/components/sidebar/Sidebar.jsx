import s from './sidebar.module.css';


export default function Sidebar(){
    return(
        <div>
            <div className={s.card}>
                <h1 className={s.board_text}>Board.</h1>
                <ul className={s.content}>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>

            </div>
            

        
        </div>
    )
}