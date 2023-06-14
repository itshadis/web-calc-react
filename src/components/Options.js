import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  const options = [
    {
      id: 1,
      value: "Standard Calc",
      link: "/calc-repo/standard-calc",
    },
    {  
      id: 2,
      value: "BMI",
      link: "/calc-repo/bmi",
    },
    {
      id: 3,
      value: "Temperature",
      link: "/calc-repo/temperature",
    }
  ]

  return (
    <div className="h-screen mt-6">
      <h1 className="text-center">Selamat datang di web-calc, pilih opsi perhitungan..</h1>
      <div className="mt-4 flex justify-center gap-2">
        { options.map(({...item}) => (
          <Link to={ item.link }>
            <button className="p-4 bg-sky-800 rounded-md text-sm text-white font-semibold hover:bg-sky-700 active:scale-95 transition-all duration-75" key={item.id}>{item.value}
            </button>
          </Link>
        )) }
      </div>
    </div>
  );
};

export default Options;