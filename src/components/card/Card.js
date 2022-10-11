import React, { useEffect } from 'react';
import axios from 'axios';
import Chart1 from '../charts/Chart1';
import Chart2 from '../charts/Chart2';
import Chart3 from '../charts/Chart3';
import VaultCard from './VaultCard';
import MarketCapCard from './MarketCapCard';
import HoldingCard from './HoldingCard';
import BuybackCard from './BuybackCard';

export default function Card({ data }) {
  const { stats, winrate, netreturn } = data || {};
  const [newdata, setNewData] = React.useState([]);
  const getData = async () => {
    const res = await axios.get('https://api.betcoinscan.com/buyback.php');
    setNewData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const { buybacks } = newdata || {};
  return (
    <section className="w-11/12 lg:max-w-[88rem] flex justify-center items-center mt-24">
      <div className="w-full  flex flex-col md:flex-wrap md:flex-row justify-center md:justify-between gap-y-6">
        {/* Vault Balance 1 */}
        <VaultCard />
        {/* MarketCap Card */}
        <MarketCapCard />
        {/* Holdings Card */}
        <HoldingCard />
        {/* Buyback Card */}
        <BuybackCard />
        {/* card 5 */}
        <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
          <div>
            <h1 className="text-lg font-medium font-DMSans text-white">Win Rate</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold font-DMSans text-[#00A24C]">{stats?.winrate}%</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Won</h1>
              <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">{stats?.won}</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Push</h1>
              <h1 className="text-sm font-medium font-DMSans text-slate-300 text-center">{stats?.push}</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Lost</h1>
              <h1 className="text-sm font-medium font-DMSans text-end text-red-500">{stats?.lost}</h1>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
          <div>
            <h1 className="text-lg font-medium font-DMSans text-white">Net Return</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold font-DMSans text-[#00A24C]">
              {stats?.netresult > 0 ? `$${stats?.netresult}` : `-$${stats?.netresult.toString().slice(1)}`}
            </h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Won</h1>
              <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">{stats?.profit}</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Push</h1>
              <h1 className="text-sm font-medium font-DMSans text-slate-300 text-center">{stats?.push}</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white text-end">Loss</h1>
              <h1 className="text-sm font-medium font-DMSans text-end text-red-500">
                -${stats?.loss.toString().slice(1)}
              </h1>
            </div>
          </div>
        </div>
        {/* chart 1 */}
        <Chart1 buybacks={buybacks} />
        {/* chart 2 */}
        <Chart2 winrate={winrate} />
        {/* chart 3 */}
        <Chart3 netreturn={netreturn} />
      </div>
    </section>
  );
}
