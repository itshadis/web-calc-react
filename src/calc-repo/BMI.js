import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";
import { MdExpandLess } from "react-icons/md";

const BMI = () => {
  const [BMI, setBMI] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleHeightInput = (e) =>{
    setHeight(parseFloat((e.target.value / 100)**2));
  }

  const handleWightInput = (e) => {
    setWeight(parseFloat(e.target.value));
  }

  const submitHandler = (e) =>{
    e.preventDefault();
   
    setBMI((weight / height).toFixed(1).toString());
  }
  
  
  return (
    <PageLayout>
      <div className="w-[90%] h-full flex flex-col max-md:items-center gap-10 md:flex-row md:justify-evenly mx-auto mt-8">
        <div className="info w-80">
          <p className="text-justify">Indeks massa tubuh (body mass indeks) atau disingkat BMI adalah pengukuran yang digunakan untuk menentukan golongan berat badan sehat dan tidak sehat.
          </p>
          <div className="flex justify-center gap-2 mt-3">
            <ul>
              <li className="flex items-center justify-end"><MdExpandLess style={{transform: "rotate(-90deg)"}} size={"20px"} /><span>18,5</span>
              </li>
              <li className="flex items-center justify-end"><span className="indent-5">18,5 - 22,9</span></li>
              <li className="flex items-center justify-end"><span className="indent-5">23 - 29,9</span></li>
              <li className="flex items-center justify-end"><MdExpandLess style={{transform: "rotate(90deg)"}} size={"20px"} /><span>30</span>
              </li>
            </ul>
            <ul>
              <li>= kurus</li>
              <li>= normal</li>
              <li>= gemuk</li>
              <li>= obesitas</li>
            </ul>
          </div>
        </div>

        <div className="calculation flex justify-center">
          <form className=" flex flex-col gap-2" onSubmit={submitHandler}>
            <div className="flex gap-4">
              <div className="flex flex-col ">
                <label for="height">Tinggi badan</label>
                <input className="w-40 h-7 rounded border border-black outline-none text-center" type="number" name="height" id="height" onChange={handleHeightInput} />
              </div>
              <div className="flex flex-col">
                <label for="weight">Berat badan</label>
                <input className="w-40 h-7 rounded border border-black outline-none text-center" type="number" name="weight" id="weight" onChange={handleWightInput} />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-40 h-7 rounded border border-black outline-none text-center">{BMI}</div>
            </div>
          
            <div className="">
              <button className="py-1 px-14 rounded bg-emerald-300" type="submit">check</button>
            </div>
          </form>
        </div>
      </div>  
    </PageLayout>
  );
};

export default BMI;