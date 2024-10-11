import React from 'react';
import Lights from "@/components/lights";
import Display from "@/components/display";
import Types from "@/components/types";
import Stats from "@/components/stats";

export default function pokebody() {
  return (
    <div id="entire" className="flex flex-wrap mt-10 justify-center">
      <div id="left-side" className="flex flex-col bg-red-600 w-[400px] h-[500px] rounded-md">
        <Lights />
        <div id="line1" className="mt-[20px] h-[2px] w-[208px] bg-black border border-black"></div>
        <div id="line2" className="relative top-[-20px] left-[200px] -rotate-45 h-[2px] w-[51px] bg-black border border-black"></div>
        <div id="line3" className="relative top-[-40px] left-[243px] h-[2px] w-[157px] bg-black border border-black"></div>
        <div className="flex flex-col">
          <Display />
          <Types />
          <div id="mid-axis" className="relative left-[356px] bottom-[385px] h-[429px] w-[44px] swivel border-x border-black border-opacity-20 max-[853px]:rounded-br-md">
            <div className="mt-[40px] w-[43px] h-[2px] bg-black"></div>
            <div className="mt-[345px] w-[43px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>
      <div id="right-side" className="flex flex-col mt-[70.75px] bg-red-600 w-[356px] h-[429.25px] max-[853px]:mt-2 rounded-br-md max-[853px]:rounded-md">
        <div>
          <div className="triangle ml-[113px] bg-black"></div>
          <div className="ml-[149.75px] mt-[-36.75px] h-[36.75px] w-[206.25px] bg-black"></div>
        </div>
        <div className="mt-[30px] mx-auto h-[100px] w-[300px] bg-black rounded-md border border-black shadow-[rgba(0,0,10,0.75)_2px_2px_2px_0px]">
          <Stats />
        </div>
        <div className="mt-[20px] mx-auto h-[90px] w-[300px] bg-[#3e8ede] rounded border border-black shadow-[rgba(0,0,10,0.75)_2px_2px_2px_0px]">
          <table>
            <thead>
              <tr>
                <td className="h-[40px] w-[60px] border-r border-b border-black"></td>
                <td className="h-[40px] w-[60px] border-r border-b border-black"></td>
                <td className="h-[40px] w-[60px] border-r border-b border-black"></td>
                <td className="h-[40px] w-[60px] border-r border-b border-black"></td>
                <td className="h-[40px] w-[60px] border-b border-black"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="h-[40px] w-[60px] border-r border-black"></td>
                <td className="h-[40px] w-[60px] border-r border-black"></td>
                <td className="h-[40px] w-[60px] border-r border-black"></td>
                <td className="h-[40px] w-[60px] border-r border-black"></td>
                <td className="h-[40px] w-[60px] border-black"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative left-[210px] top-2 h-[7px] w-[55px] bg-black rounded shadow-[rgba(0,0,10,0.75)_1px_1px_2px_0px]"></div>
        <div className="relative left-[270px] top-[2.25px] h-[6.75px] w-[55px] bg-black rounded shadow-[rgba(0,0,10,0.75)_1px_1px_2px_0px]"></div>
        <div className="relative top-3 left-7 h-[55px] w-[120px] bg-white border border-black rounded shadow-[rgba(0,0,10,0.75)_1px_1px_2px_0px]">
          <table>
            <thead>
              <tr>
                <td className="h-[50px] w-[60px] border-r border-black"></td>
                <td className="h-[50px] w-[60px] border-black"></td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="relative top-[-20px] left-[290px] h-[35px] w-[30px] rounded-full radial-grad-4 border border-black border-opacity-75"></div>
        <div className="relative top-[10px] left-[30px] h-[50px] w-[135px] bg-black border border-black rounded shadow-[rgba(0,0,10,0.75)_1px_1px_2px_0px]"></div>
        <div className="relative top-[-32px] left-[190px] h-[50px] w-[135px] bg-black border border-black rounded shadow-[rgba(0,0,10,0.75)_1px_1px_2px_0px]"></div>
      </div>
    </div>
  )
}

//Fix transition between the 3 black lines & Right-side triangle

//See if the table cells can be iterated to reduce lines