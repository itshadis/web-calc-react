import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";

const StandardCalc = () => {
  const Button = (props) => {
    const { func, char, val } = props;
    return(
      <div  iv className="flex justify-center items-center">
        <button onClick={func} className="transition-all duration-100 hover:scale-150" value={val}>{char}</button>
      </div>
    );
  };

  let [screen, setScreen] = useState("");
  let [result, setResult] = useState('');

  const handleScreen = (e) => {
    e = e.target.value;
    setScreen((current) => current + e);
  }

  const handleResultScreen = () => {
    if(screen.includes("/")) {
      let arrayNum = [...screen];
      let numArray1 = arrayNum.splice(0, arrayNum.indexOf("/"));
      let numArray2 = arrayNum.splice(1, arrayNum.length);

      let numBeta1 = numArray1.join("");
      let numBeta2 = numArray2.join("");

      let num1 = parseFloat(numBeta1);
      let num2 = parseFloat(numBeta2);

      return setResult(num1 / num2);
    }
    if(screen.includes("X")) {
      let arrayNum = [...screen];
      let numArray1 = arrayNum.splice(0, arrayNum.indexOf("X"));
      let numArray2 = arrayNum.splice(1, arrayNum.length);

      let numBeta1 = numArray1.join("");
      let numBeta2 = numArray2.join("");

      let num1 = parseFloat(numBeta1);
      let num2 = parseFloat(numBeta2);

      return setResult(num1 * num2);
    }
    if(screen.includes("+")) {
      let arrayNum = [...screen];
      let numArray1 = arrayNum.splice(0, arrayNum.indexOf("+"));
      let numArray2 = arrayNum.splice(1, arrayNum.length);

      let numBeta1 = numArray1.join("");
      let numBeta2 = numArray2.join("");

      let num1 = parseFloat(numBeta1);
      let num2 = parseFloat(numBeta2);

      return setResult(num1 + num2);
    }
    if(screen.includes("-")) {
      let arrayNum = [...screen];
      let numArray1 = arrayNum.splice(0, arrayNum.indexOf("-"));
      let numArray2 = arrayNum.splice(1, arrayNum.length);

      let numBeta1 = numArray1.join("");
      let numBeta2 = numArray2.join("");

      let num1 = parseFloat(numBeta1);
      let num2 = parseFloat(numBeta2);

      return setResult(num1 - num2);
    }
  }

  const handleDelete = () => {
    setScreen((current) => current.slice(0, -1));
  }

  const clearScreen = () => {
    setScreen("");
    setResult("");
  }

  return (
    <PageLayout>
      <div className="flex flex-col justify-center w-80 h-full mx-auto">
        <div className="view h-36 w-full border border-black rounded-2xl mb-1">
          <div className="operation flex justify-end items-center pr-5 text-3xl w-full h-2/3">{screen}</div>
          <div className="result flex justify-end pr-5 w-full h-1/3">{result}</div>
        </div>

        <div className="input grid grid-cols-4 h-80 w-full border border-black rounded-2xl text-xl">
          <Button func={clearScreen}  char="C" />
          <Button func={handleScreen} val="/" char="/" />
          <Button func={handleScreen} val="X" char="X" />
          <Button func={handleDelete} char="Del" />
          <Button func={handleScreen} val="7" char="7" />
          <Button func={handleScreen} val="8" char="8" />
          <Button func={handleScreen} val="9" char="9" />
          <Button func={handleScreen} val="-" char="-" />
          <Button func={handleScreen} val="4" char="4" />
          <Button func={handleScreen} val="5" char="5" />
          <Button func={handleScreen} val="6" char="6" />
          <Button func={handleScreen} val="+" char="+" />
          <Button func={handleScreen} val="1" char="1" />
          <Button func={handleScreen} val="2" char="2" />
          <Button func={handleScreen} val="3" char="3" />
          <Button func={handleResultScreen} char="=" />
          <Button func={handleScreen} val="%" char="%" />
          <Button func={handleScreen} val="0" char="0" />
          <Button func={handleScreen} val="." char="." />
        </div>
      </div>
    </PageLayout>
  );
};

export default StandardCalc;