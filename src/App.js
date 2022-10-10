import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import Tables from './components/tables/Tables';

function App() {
  const [data, setData] = useState([]);
  const { bets } = data;
  const getData = async () => {
    const res = await axios.get('https://api.betcoinscan.com');
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center gap-y-4">
        <Card data={data}/>
        <div className="w-11/12 lg:max-w-[88rem] flex justify-start items-center">
          <h1 className="text-white font-semibold font-DMSans text-xl">History</h1>
        </div>
        <Tables bets={bets}/>
      </div>
    </>
  );
}

export default App;
