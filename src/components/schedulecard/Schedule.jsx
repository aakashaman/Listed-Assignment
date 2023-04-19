import s from './schedule.module.css';

export default function ScheduleCard() {
  return (
    <div className={s.scheduleCard}>
      <h2>Today meeting Schdeule</h2>
      <EventCard title="Meeting with suppliers from Kuta Bali" time="14.00-15.00 " place="at Sunset Road, Kuta, Bali " />
      <EventCard title="Check operation at Giga Factory 1" time="18.00-20.00" place="at Central Jakarta" />
 
    </div>
  );
}

function EventCard({ title, time, place }) {
  return (
    <div className={s.eventCard}>
      <h3>{title}</h3>
      <p>{time}</p>
      <p>{place}</p>
    </div>
  );
}
