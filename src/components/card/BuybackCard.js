import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function BuybackCard() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      'https://api.bscscan.com/api?module=account&action=balance&address=0x397484a29e59f746e897140320425bbbf27ee334&apikey=YZCXTQS4361QANZ1P7MCDD3HN765XGHT2K'
    );
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const { result } = data || {};
  const buyback = (Number(result) / 1000000000000000000).toFixed(4) || 0;
  return (
    <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
      <div>
        <h1 className="text-lg font-medium font-DMSans text-white">Buyback Stats</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold font-DMSans text-[#00A24C]">BNB {buyback}</h1>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-medium font-DMSans text-white">Total Value</h1>
          <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">-</h1>
        </div>
        <div>
          <h1 className="text-sm font-medium font-DMSans text-white">Out of Supply</h1>
          <h1 className="text-sm font-medium font-DMSans text-end text-red-500">-</h1>
        </div>
      </div>
    </div>
  );
}
