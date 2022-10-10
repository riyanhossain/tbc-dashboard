import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import Tables from './components/tables/Tables';

function App() {
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center gap-y-4">
        <Card />
        <div className="w-11/12 lg:max-w-[88rem] flex justify-start items-center">
          <h1 className="text-white font-semibold font-DMSans text-xl">History</h1>
        </div>
        <Tables />
      </div>
    </>
  );
}

export default App;
