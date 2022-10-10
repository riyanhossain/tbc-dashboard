import React from 'react';

export default function Table() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between items-center p-3 rounded-tr-lg bg-table overflow-x-scroll ">
        <p className="basis-2/12 px-4 text-sm text-table-text text-start font-DMSans">Date</p>
        <p className="basis-1/12  px-4 text-sm text-table-text text-start font-DMSans">League</p>
        <p className="basis-3/12 px-4 text-sm text-table-text text-start font-DMSans">
          <span className=" whitespace-nowrap">Pick of the Day</span>
        </p>
        <p className="basis-1/12  px-4 text-sm text-table-text text-start font-DMSans">Dime</p>
        <p className="basis-1/12  px-4 text-sm text-table-text text-start font-DMSans">Allocation</p>
        <p className="basis-1/12  px-4 text-sm text-table-text text-start font-DMSans">
          <span className=" whitespace-nowrap">Net Return</span>
        </p>
        <p className="basis-1/12  px-4 text-sm text-table-text text-start font-DMSans">Odds</p>
        <p className="basis-1/12  px-4 text-sm text-table-text text-start font-DMSans">Status</p>
      </div>

      <div className="w-full flex justify-between items-center p-2">
        <div></div>
      </div>
    </div>
  );
}
