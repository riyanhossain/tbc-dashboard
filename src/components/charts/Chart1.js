import React from 'react';
import Chart from 'react-apexcharts';

export default function Chart1() {
    
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
        data: [45, 52, 38, 45, 19, 23, 2],
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
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
      labels: {
        style: {
          colors: '#AEBCD3',
          fontSize: '14px',
          fontFamily: 'DM Sans',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
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
      size: 0,
      colors: ['#22c55e'],
      strokeColors: '#22c55e',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: 'circle',
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
      tooltip: {
        enabled: false,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: true,
        theme: 'dark',
        style: {
          fontSize: '12px',
          fontFamily: undefined,
        },
        onDatasetHover: {
          highlightDataSeries: false,
        },
        x: {
          show: true,
          format: 'dd MMM',
          formatter: undefined,
        },
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
        z: {
          formatter: undefined,
          title: 'Size: ',
        },
        marker: {
          show: true,
        },
        items: {
          display: 'flex',
        },
        fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
        },
      },
    },
  };
  return (
    <div className="w-full md:w-[48%] lg:w-[32%]  h-52 px-5 py-3 flex flex-col justify-between bg-primary rounded shadow shadow-inherit">
      <div>
        <h1 className="text-lg font-medium font-DMSans text-white">Buyback per Day</h1>
      </div>
      <div className="flex justify-center w-full">
        <Chart options={options} series={options.series} type={'area'} width="380" height={160} />
      </div>
    </div>
  );
}
