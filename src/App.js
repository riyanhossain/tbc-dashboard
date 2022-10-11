import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import Spinner from './components/loader/Spinner';
import Navbar from './components/navbar/Navbar';
import Tables from './components/tables/Tables';

const Card = React.lazy(() => import('./components/card/Card'));

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

  return (
    <React.Suspense fallback={<Spinner />}>
      <React.Suspense fallback={<Spinner />}>
        <Navbar />
      </React.Suspense>
      <div className="w-screen flex flex-col items-center gap-y-4">
        <React.Suspense fallback={<Spinner />}>
          <Card data={data} />
        </React.Suspense>
        <div className="w-11/12 lg:max-w-[88rem] flex justify-start items-center">
          <h1 className="text-white font-semibold font-DMSans text-xl">History</h1>
        </div>
        <React.Suspense fallback={<Spinner />}>
          <Tables bets={bets} />
        </React.Suspense>
      </div>
    </React.Suspense>
  );
}

export default App;
