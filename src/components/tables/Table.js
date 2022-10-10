import moment from 'moment';
import React from 'react';

export default function Table({ bets }) {
  let betsArray = [];
  if (bets) {
    betsArray = Object.values(bets);
  }
  return (
    <div className="w-full overflow-x-scroll md:overflow-x-hidden">
      <table className="w-full">
        {/* table header */}
        <thead className="w-full">
          <tr className="w-full flex justify-between items-center p-3 rounded-tr-lg bg-table">
            <th className="w-[6rem] lg:basis-2/12 lg:px-4 text-sm text-table-text text-start font-DMSans">Date</th>
            <th className="w-[5rem] lg:basis-1/12 lg:px-4 text-sm text-table-text text-start font-DMSans">League</th>
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
          </tr>
        </thead>
        {/* table body */}
        <tbody className="w-full">
          {betsArray?.map((bet, index) => {
            const {
              Allocation,
              Date: date,
              Dime,
              Game,
              League,
              Link,
              Livescore,
              Odds,
              TimestampUTC,
              Won,
              'Pick of the day': pick,
              'Net Return': netReturn,
            } = bet;
            return (
              <tr
                className="w-full flex justify-between items-center px-3  p-2 rounded-tr-lg bg-primary hover:bg-table"
                key={index}
              >
                <td className="w-[6rem] lg:basis-2/12 lg:px-4 text-sm text-table-text text-start font-DMSans ">
                  {date.split('.').join('/')} {moment(new Date(TimestampUTC * 1000)).format('LT')}
                </td>
                <td className="w-[5rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">
                  {League}
                </td>
                <td className="flex flex-col justify-start w-[9rem] lg:basis-3/12 lg:px-4 ">
                  <a
                    href={Link}
                    target="_blank"
                    rel="noreferrer"
                    className=" text-sm text-white font-bold hover:text-green-500 transition-colors text-start font-DMSans"
                  >
                    {pick}
                  </a>
                  <p className="text-table-text text-xs">{Game}</p>
                </td>
                <td className="w-[3rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">
                  {Dime}
                </td>
                <td className="w-[5rem] lg:basis-1/12 lg:px-4 text-sm text-table-text text-start font-DMSans">
                  {' '}
                  ${Allocation}
                </td>
                <td className="w-[6rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">
                  -${netReturn}
                </td>
                <td className="w-[3rem] lg:basis-1/12  lg:px-4 text-sm text-table-text text-start font-DMSans">
                  {Odds}
                </td>
                <td className="w-[3rem] lg:basis-1/12  lg:px-4 ">
                  {Won ? (
                    <a
                      href={Livescore}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-red-500 underline text-start font-DMSans"
                    >
                      Lost
                    </a>
                  ) : (
                    <a href={Livescore} className="text-sm text-green-500 underline text-start font-DMSans">
                      Won
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
