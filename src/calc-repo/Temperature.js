import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";

const Temperature = () => {
  const [val, setVal] = useState();
  const [option, setOption] = useState();
  const [celcius, setCelcius] = useState();
  const [fahrenheit, setFahrenheit] = useState();
  const [kelvin, setKelvin] = useState();
  const [reamur, setReamur] = useState();
  
  const handlerInput = (e) => {
    setVal(parseFloat(e.target.value));
  }

  const handlerOptions = (e) => {
    setOption(e.target.value);
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    
    if(option === "") alert("Select Temperature Please..");
    if(option === "celcius") {
      setCelcius(val);
      setFahrenheit(((val+32)*(9/5)).toFixed(1));
      setKelvin(val+273);
      setReamur((val*(4/5)).toFixed(1));
    }
    if(option === "fahrenheit") {
      setCelcius(((5/9)*(val-32)).toFixed(1));
      setFahrenheit(val);
      setKelvin((((5/9)*(val-32))+273).toFixed(1));
      setReamur(((4/9)*(val-32)).toFixed(1));
    }
    if(option === "kelvin") {
      setCelcius(val-273);
      setFahrenheit((((9/5)*(val-273))+32).toFixed(1));
      setKelvin(val);
      setReamur(((4/5)*(val-273)).toFixed(1));
    }
    if(option === "reamur") {
      setCelcius(((5/4)*val).toFixed(1));
      setFahrenheit((((9/4)*(val))+32).toFixed(1));
      setKelvin((((5/4)*(val))+273).toFixed(1));
      setReamur(val);
    }
  }

  return (
    <PageLayout>
      <div className="w-[90%] h-full mx-auto mt-8">
        <div className="flex flex-col gap-2 items-center">
          <div>
            <span>Temperature</span>
          </div>
          <div>
            <input className="w-20 h-10 mb-6 rounded-md text-sm text-center outline-none border border-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="Input" onChange={handlerInput} />
          </div>
          <div>
            <span>From</span>
          </div>
          <div>
            <select className="w-48 h-10 border rounded-md cursor-pointer border-gray-300 mb-6 px-1 outline-none" onChange={handlerOptions} defaultValue={"Select.."}>
              <option value="">Select..</option>
              <option value="celcius">Celcius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
              <option value="reamur">Reamur</option>
            </select>
          </div>
          <div>
            <form action="" onSubmit={handlerSubmit}>
              <button className="py-2 px-5 bg-emerald-300 rounded-md hover:bg-emerald-400 mb-2" type="submit">Result</button>
            </form>
          </div>
          <div className="flex gap-4">
            <ul className="text-end">
              <li>Celcius</li>
              <li>Fahrenheit</li>
              <li>Kelvin</li>
              <li>Reamur</li>
            </ul>
            <ul>
              <li>: <span>{celcius}</span>&deg;C</li>
              <li>: {fahrenheit}&deg;F</li>
              <li>: {kelvin}&deg;K</li>
              <li>: {reamur}&deg;R</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Temperature;