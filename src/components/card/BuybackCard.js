import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function BuybackCard() {
  const [data, setData] = useState([]);
  const [bnbPrice, setBnbPrice] = useState(0);
  const getData = async () => {
    try {
      const res = await axios.get(
        'https://api.bscscan.com/api?module=account&action=balance&address=0x000000000000000000000000000000000000dead&apikey=YZCXTQS4361QANZ1P7MCDD3HN765XGHT2K'
      );
      setData(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const getBnbPrice = async () => {
    try {
      const bnb = await axios.get(
        'https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=YZCXTQS4361QANZ1P7MCDD3HN765XGHT2K'
      );
      setBnbPrice(bnb?.data?.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
    getBnbPrice();
  }, []);

  const buyback = (Number(data) / 1000000000000000000).toFixed(0) || 0;
  const totalValue = ((Number(data) / 1000000000000000000) * Number(bnbPrice.ethusd)).toFixed(2) || 0;

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
          <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">{totalValue}</h1>
        </div>
        <div>
          <h1 className="text-sm font-medium font-DMSans text-white">Out of Supply</h1>
          <h1 className="text-sm font-medium font-DMSans text-end text-red-500">-</h1>
        </div>
      </div>
    </div>
  );
}
