import { useState, useEffect } from 'react';
import s from './card.module.css';
import rev from './resources/tr.svg';
import trans from './resources/tt.svg';
import like from './resources/tl.svg';
import user from './resources/tu.svg';

export default function InfoCard() {
  const [revenues, setRevenues] = useState('');
  const [transactions, setTransactions] = useState('');
  const [likes, setLikes] = useState('');
  const [users, setUsers] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://listed-server-6mcm.vercel.app/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRevenues(data.revenues);
        setTransactions(data.transactions);
        setLikes(data.likes);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.card}>
      <Card title="Total revenues" number={revenues} icon={rev} className={s.totalRevenues} />
      <Card title="Total Transaction" number={transactions} icon={trans} className={s.totalTransactions} />
      <Card title="Total Likes" number={likes} icon={like} className={s.totalLikes} />
      <Card title="Total Users" number={users} icon={user} className={s.totalUsers} />
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
