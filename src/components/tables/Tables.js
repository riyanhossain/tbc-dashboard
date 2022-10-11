import React from 'react';
import Table from './Table';
// import axios from 'axios';
import { communityJSON } from '../../data/data';

export default function Tables({ bets = {} }) {
  const buttuons = ['Pick of the Day', 'Community Bets'];
  const [active, setActive] = React.useState(buttuons[0]);
  // const [data, setData] = React.useState([]);
  //   const getData = async () => {
  //     const res = await axios.get('https://api.betcoinscan.com/community.php');
  //     setData(res.data?.bets);
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <section className="w-11/12 lg:max-w-[88rem] flex flex-col justify-start items-start">
      <div className="flex">
        {buttuons.map((btn, index) => {
          return (
            <button
              className={`font-DMSans text-sm px-5 py-3 rounded-t-lg ${
                active === btn ? 'bg-table text-white font-medium ' : 'bg-primary text-table-text'
              }`}
              key={index}
              onClick={() => setActive(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>
      <Table bets={active === 'Pick of the Day' ? bets : communityJSON?.bets} />
    </section>
  );
}
