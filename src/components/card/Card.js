import React from 'react';
// #00A24C
export default function Card() {
  return (
    <section className="w-11/12 lg:max-w-[88rem] flex justify-center items-center mt-6">
      <div className="w-full  flex flex-col md:flex-wrap md:flex-row justify-center md:justify-between gap-y-6">
        {/* card 1 */}
        <div className="w-full md:w-[48%] lg:w-[32%] h-52 px-5 py-3 flex flex-col justify-between bg-[#00A24C] rounded">
          <div>
            <h1 className="text-lg font-medium font-DMSans text-white">Betting Fund</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold font-DMSans text-white">$115,000</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Weekly Fund Growth</h1>
              <h1 className="text-sm font-medium font-DMSans ">5%</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Betting Stack</h1>
              <h1 className="text-sm font-medium font-DMSans ">$21,000</h1>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
          <div>
            <h1 className="text-lg font-medium font-DMSans text-white">Market Cap</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold font-DMSans text-[#00A24C]">$3,537,550</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">$BET Price</h1>
              <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">$21,000</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">24h Changes</h1>
              <h1 className="text-sm font-medium font-DMSans text-white text-end">
                <span className="bg-red-500 px-1 rounded-sm">-1.76%</span>
              </h1>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
          <div>
            <h1 className="text-lg font-medium font-DMSans text-white">My Holdings</h1>
          </div>
          <div className="flex justify-center ">
            <form className="w-full flex justify-between items-center gap-x-2">
              <input
                type="text"
                className="w-full h-10 px-6 p-2 rounded-sm text-white bg-secondary"
                placeholder="Eg: 100,000"
              />
              <input
                type="submit"
                value={'SAVE'}
                className="bg-white p-2 rounded-sm px-6  text-sm font-DMSans font-bold"
              />
            </form>
          </div>
          <div className="flex justify-start">
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Net Worth</h1>
              <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">$0</h1>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
          <div>
            <h1 className="text-lg font-medium font-DMSans text-white">Buyback Stats</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold font-DMSans text-[#00A24C]">$3,689,964</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Total Value</h1>
              <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">$130,928</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Out of Supply</h1>
              <h1 className="text-sm font-medium font-DMSans text-end text-red-500">3.69%</h1>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
          <div>
            <h1 className="text-lg font-medium font-DMSans text-white">Win Rate</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold font-DMSans text-[#00A24C]">51.72%</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Won</h1>
              <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">15</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Push</h1>
              <h1 className="text-sm font-medium font-DMSans text-slate-300 text-center">1</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Lost</h1>
              <h1 className="text-sm font-medium font-DMSans text-end text-red-500">14</h1>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
          <div>
            <h1 className="text-lg font-medium font-DMSans text-white">Net Return</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold font-DMSans text-[#00A24C]">$2,150</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Won</h1>
              <h1 className="text-sm font-medium font-DMSans text-[#00A24C] ">$43,550</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white">Push</h1>
              <h1 className="text-sm font-medium font-DMSans text-slate-300 text-center">1</h1>
            </div>
            <div>
              <h1 className="text-sm font-medium font-DMSans text-white text-end">Loss</h1>
              <h1 className="text-sm font-medium font-DMSans text-end text-red-500">-$41,400</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
