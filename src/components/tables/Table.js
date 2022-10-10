import React from 'react';

export default function Table() {
  return (
    <div className="w-full overflow-x-scroll md:overflow-hidden">
      <table className="w-full">
        {/* table header */}
        <thead className="w-full flex justify-between items-center p-3 rounded-tr-lg bg-table">
          <th className="w-[4.5rem] lg:basis-2/12 lg:px-4 text-sm text-table-text text-start font-DMSans">Date</th>
          <th className="w-[4rem] lg:basis-1/12 lg:px-4 text-sm text-table-text text-start font-DMSans">League</th>
          <th className=" w-[9rem] lg:basis-3/12 lg:px-4 text-sm text-table-text text-start font-DMSans">
            <span className="">Pick of the Day</span>
          </th>
          <th className="w-[3rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans ">Dime</th>
          <th className="w-[5rem] lg:basis-1/12   lg:px-4 text-sm text-table-text text-start font-DMSans ">
            Allocation
          </th>
          <th className="w-[6rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">
            <span className=" ">Net Return</span>
          </th>
          <th className="w-[3rem] lg:basis-1/12   lg:px-4 text-sm text-table-text text-start font-DMSans ">Odds</th>
          <th className="w-[3rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans ">Status</th>
        </thead>
        {/* table body */}
        <tbody className="w-full">
          <tr className="w-full flex justify-between items-center   p-3 rounded-tr-lg bg-table">
            <td className="w-[4.5rem] lg:basis-2/12 lg:px-4 text-sm text-table-text text-start font-DMSans ">
              10/9/2022 11:00 PM
            </td>
            <td className="w-[4rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">NFL</td>
            <td className="flex flex-col justify-start w-[9rem] lg:basis-3/12 lg:px-4 ">
              <a
                href="/"
                className=" text-sm text-white font-bold hover:text-green-500 transition-colors text-start font-DMSans"
              >
                Miami Dolphins (-3.5)
              </a>
              <p className="text-table-text text-xs">New York Jets vs Miami Dolphins</p>
            </td>
            <td className="w-[3rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">0</td>
            <td className="w-[5rem] lg:basis-1/12 lg:px-4 text-sm text-table-text text-start font-DMSans"> $7,500</td>
            <td className="w-[6rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">-$7,500</td>
            <td className="w-[3rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">1.99</td>
            <td className="w-[3rem] lg:basis-1/12  lg:px-4 ">
              <a href="/" className="text-sm text-red-500 underline text-start font-DMSans">
                Lost
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
