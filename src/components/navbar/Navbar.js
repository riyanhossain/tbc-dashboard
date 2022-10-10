import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-screen h-16 bg-primary shadow shadow-inherit flex items-center fixed">
      <div className="mx-auto w-11/12 lg:max-w-[88rem] flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold">Navbar</h1>
        <div className='flex gap-x-2'>
          <button className="px-3 py-2 font-DMSans bg-[#1475E1] rounded-sm text-white font-semibold text-sm">
            Bet on
          </button>
          <button className="px-3 py-2 font-DMSans bg-[#00AE52] rounded-sm text-white font-semibold text-sm">
            Buy $BET
          </button>
        </div>
      </div>
    </nav>
  );
}
