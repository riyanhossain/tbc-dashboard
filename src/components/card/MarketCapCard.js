import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function MarketCapCard() {
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
      const {price } = data || {};
      const marketCap = (Number(price) * 100000000000).toFixed(0) || 0;
  return (
    <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
      <div>
        <h1 className="text-lg font-medium font-DMSans text-white">Market Cap</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold font-DMSans text-[#00A24C]">$ {marketCap}</h1>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-medium font-DMSans text-white">$BET Price</h1>
          <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">$ {Number(price).toFixed(10)}</h1>
        </div>
        <div>
          <h1 className="text-sm font-medium font-DMSans text-white">24h Changes</h1>
          <h1 className="text-sm font-medium font-DMSans text-white text-end">
            <span className="bg-red-500 px-1 rounded-sm">-</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
