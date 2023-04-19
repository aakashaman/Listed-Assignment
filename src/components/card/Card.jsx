import s from './card.module.css';
import rev from './resources/tr.svg';
import trans from './resources/tt.svg';
import like from './resources/tl.svg';
import user from './resources/tu.svg';

export default function InfoCard() {
  return (
    <div className={s.card}>
      <Card title="Total revenues" number="$2,129,430" icon={rev} className={s.totalRevenues} />
      <Card title="Total Transaction" number="1520" icon={trans} className={s.totalTransactions} />
      <Card title="Total Likes" number="9721" icon={like} className={s.totalLikes} />
      <Card title="Total Users" number="892" icon={user} className={s.totalUsers} />
    </div>
  );
}

function Card({ title, number, icon, className }) {
  return (
    <div className={`${s.infoCard} ${className}`}>
      <div className={s.iconContainer}>
        <img src={icon} alt="Icon" />
      </div>
      <div className={s.content}>
        <h3>{title}</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}
