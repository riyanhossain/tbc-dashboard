import React from 'react'
import { ScaleLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <ScaleLoader color="#00AE52" />
    </div>
  );
}
