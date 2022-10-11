import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function HoldingCard() {
    const [holdings, setHoldings] = useState('' || localStorage.getItem('holdings'));
          const [data, setData] = useState([]);
          const getData = async () => {
            const res = await axios.get(
              'https://api.pancakeswap.info/api/v2/tokens/0x397484a29e59f746e897140320425bbbf27ee334'
            );
            setData(res.data?.data);
          };
          useEffect(() => {
            getData();
          }, []);
    const netWorth = (holdings * data?.price).toFixed(6) || 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('holdings', holdings);
    }
  return (
    <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
      <div>
        <h1 className="text-lg font-medium font-DMSans text-white">My Holdings</h1>
      </div>
      <div className="flex justify-center ">
        <form className="w-full flex justify-between items-center gap-x-2" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full h-10 px-6 p-2 rounded-sm text-white bg-secondary"
            placeholder="Eg: 100,000"
            onChange={(e) => setHoldings(e.target.value)}
            value={holdings}
          />
          <input type="submit" value={'SAVE'} className="bg-white p-2 rounded-sm px-6  text-sm font-DMSans font-bold active:bg-slate-200 hover:bg-slate-100" />
        </form>
      </div>
      <div className="flex justify-start">
        <div>
          <h1 className="text-sm font-medium font-DMSans text-white">Net Worth</h1>
          <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">${holdings ? netWorth : 0}</h1>
        </div>
      </div>
    </div>
  );
}
