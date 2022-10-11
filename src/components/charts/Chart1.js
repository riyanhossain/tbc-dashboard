import moment from 'moment';
import React from 'react';
import Chart from 'react-apexcharts';

export default function Chart1({ buybacks }) {
  const { labels, values } = buybacks || {};
  const newLabels = labels?.map((date) => moment(date).format('MMM DD'));

  const options = {
    chart: {
      id: 'chartContainer',
      height: 280,
      type: 'area',
      toolbar: {
        show: false, //Disable toolbar
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "buyback",
        data: values || [],
      },
    ],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: 'black', // optional, if not defined - uses the shades of same color in series
        // inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [],
      },
      colors: ['#00A24C'],
    },
    xaxis: {
      categories: newLabels,
      labels: {
        style: {
          colors: '#AEBCD3',
          fontSize: '1px',
          fontFamily: 'DM Sans',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
      },
      tooltip: {
        enabled: true,
        style: {
          backgroundColor: '#1F2937',
          color: "white"
        },
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false, // you can either change hear to disable all grids
    },
    stroke: {
      curve: 'straight',
      colors: ['#22c55e'],
      width: 2,
    },
    markers: {
      colors: ['#22c55e'],
      strokeColors: 'white',
      strokeWidth: 3,
      shape: 'circle',
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
  };
  return (
    <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
      <div>
        <h1 className="text-lg font-medium font-DMSans text-white">Buyback per Day</h1>
      </div>
      <div className="flex justify-center w-full overflow-hidden">
        <Chart options={options} series={options.series} type={'area'} width="380" height={160} />
      </div>
    </div>
  );
}
