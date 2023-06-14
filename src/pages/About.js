import React from "react";
import PageLayout from "../Layout/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <div className="h-screen flex justify-center w-[90%] mt-6 mx-auto">
        <div className="w-[600px]">
          <p className="p-6 bg-emerald-300 rounded-3xl text-justify">Web - Calc merupakan aplikasi perhitungan dengan berbagai keperluan seperti perhitungan sederhana kali bagi tambah kurang (standar calculator), perhitungan berat badan ideal (BMI), perhitungan konversi suhu dan perhitungan-perhitungan lainnya yang nantinya akan di tambahkan kedalam aplikasi ini.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;