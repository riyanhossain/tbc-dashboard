import React from 'react'
import Table from './Table';

export default function Tables() {
    const buttuons = [ "Pick of the Day", "Community Bets"]
    const [active, setActive] = React.useState(buttuons[0])
  return (
    <section className="w-11/12 lg:max-w-[88rem] flex flex-col justify-start items-start">
      <div className='flex'>
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
      <Table />
    </section>
  );
}
