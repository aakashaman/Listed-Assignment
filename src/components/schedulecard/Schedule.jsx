import s from './schedule.module.css';

export default function ScheduleCard() {
  return (
    <div className={s.scheduleCard}>
      <h2>Today meeting Schdeule</h2>
      <EventCard title="Meeting with suppliers from Kuta Bali" time="14.00-15.00 " place="at Sunset Road, Kuta, Bali  " color="
#9BDD7C" />
      <EventCard title="Check operation at Giga Factory 1" time="18.00-20.00" place="at Central Jakarta" color="#6972C3" />
 
    </div>
  );
}

function EventCard({ title, time, place, color }) {
    return (
      <div className={s.eventCard} style={{ borderLeftColor: color }}>
        <h3>{title}</h3>
        <p>{time}</p>
        <p>{place}</p>
      </div>
    );
  }
  
