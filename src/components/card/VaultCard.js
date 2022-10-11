import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function VaultCard() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      'https://api.bscscan.com/api?module=account&action=balance&address=0x811Cfa28d8592C1Bf64AA60250dEFD89872Dd8E8&apikey=YZCXTQS4361QANZ1P7MCDD3HN765XGHT2K'
    );
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const { result } = data || {};
  const balance = (Number(result) / 1000000000000000000).toFixed(4) || 0;
  return (
    <div className="w-full md:w-[48%] lg:w-[32%] h-52 px-5 py-3 flex flex-col justify-between bg-[#00A24C] rounded">
      <div>
        <h1 className="text-lg font-medium font-DMSans text-white">Vault Balance</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold font-DMSans text-white">BNB {balance}</h1>
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-medium font-DMSans text-white">Weekly Fund Growth</h1>
          <h1 className="text-sm font-medium font-DMSans ">-</h1>
        </div>
        <div>
          <h1 className="text-sm font-medium font-DMSans text-white">Betting Stack</h1>
          <h1 className="text-sm font-medium font-DMSans ">-</h1>
        </div>
      </div>
    </div>
  );
}
