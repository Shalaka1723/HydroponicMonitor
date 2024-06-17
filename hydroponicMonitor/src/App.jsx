import React, { useState } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";
import GaugeChart from "react-gauge-chart";

const App = () => {
  const [value, setValue] = useState("");
  let phValue=(value)=>{
   let result = value/14
   setValue(result)
  }


  return (
    <>
      <div className="flex flex-col bg-lime-100 m-[1%] place-items-center h-screen rounded-lg">
        <div className=" bg-sky-900 top-1/2 shadow-lg fixed rounded-full w-32 h-32 px-5 text-center text-white z-10 opacity-90">
          <h1 className=" mt-5 text-wrap text-base">MY HYDROPONIC STATS</h1>
        </div>
        <div className="flex flex-row h-1/2 w-full m-4 justify-center">
          <div className=" bg-lime-300 opacity-75 rounded-xl w-1/3 m-4">
            <h1 className=" text-center text-sky-900 font-semibold text-3xl mt-2">
              Water Temperature
            </h1>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                },
              ]}
              width={500}
              height={300}
            />
          </div>
          <div className=" bg-sky-700 shadow-lg rounded-full w-96 h-96">
            <div className=" grid grid-cols-2 m-2 pl-5 pt-20 text-white text-center items-center justify-items-center  ">
              <div className=" ">
                <div className="my-3   ">Water Ph</div>
                <div className="my-3  ">Water Temperature</div>
                <div className="my-3  ">Atmospheric Temperature</div>
                <div className="my-3  ">Humidy</div>
                <div className="my-3  ">Water Level</div>
              </div>

              <div className="  ">
                <div className="my-3  ">7</div>
                <div className="my-3  ">25°C</div>
                <div className="my-3  ">25°C</div>
                <div className="my-3  ">50%</div>
                <div className="my-3  ">30%</div>
              </div>
            </div>
          </div>
          <div className=" bg-lime-300 opacity-75 rounded-xl w-1/3 m-4">
            <h1 className=" text-center text-sky-900 font-semibold text-3xl mt-2">
              Humidity
            </h1>
            <Gauge
              width={400}
              height={250}
              value={75}
              startAngle={-90}
              endAngle={90}
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 40,
                  transform: "translate(0px, 0px)",
                },
              }}
              text={({ value }) => `${value}%`}
            />
          </div>
        </div>
        <div className="flex flex-row h-1/2 w-full m-4 justify-center">
          <div className=" bg-lime-300 opacity-75 rounded-xl w-1/3 m-4">
            <h1 className=" text-center text-sky-900 font-semibold text-3xl mt-2">
              Water ph
            </h1>
            <h1 className=" text-xl text-center shadow-md content-center"></h1>
            <input
              type="number"
              value={value}
              onChange={(e)=>{phValue(e.target.value)}}

              className="pl-2 py-1 ml-2 border-2 rounded-md"
            />
            <div className=" w-96">
              <GaugeChart
                id="gauge-chart1"
                nrOfLevels={6}
                percent={value}
                hideText={false}
                textColor="#F35725"
                needleBaseColor="#F35725"
                arcPadding={0.015}
                cornerRadius={50}
                arcWidth={0.19}
                formatTextValue={(value) => `${Math.round(value / 100)}`}
                needleColor="#F35725"
                colors={[
                  "#EC1B26",
                  "#F46433",
                  "#F88F1F",
                  "#FFC323",
                  "#FEF100",
                  "#85C341",
                  "#4CB748",
                  "#35A94B",
                  "#0CB7B6",
                  "#4690CE",
                  "#3753A5",
                  "#5A51A2",
                  "#64459D",
                  "#6C2181",
                  "#49176E",
                ]}
                arcsLength={Array(15).fill(1 / 15)}
              />
            </div>
          </div>
          <div className=" bg-lime-300 opacity-75 rounded-3xl w-1/3 m-4">
            <h1 className=" text-center text-sky-900 font-semibold text-3xl mt-2">
              Water Level
            </h1>
            <Gauge
              width={400}
              height={250}
              value={75}
              startAngle={-90}
              endAngle={90}
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 40,
                  transform: "translate(0px, 0px)",
                },
              }}
              text={({ value }) => `${value}%`}
            />
          </div>
          <div className=" bg-lime-300 opacity-75 rounded-xl w-1/3 m-4">
            <h1 className=" text-center text-sky-900 font-semibold text-3xl mt-2">
              Atmospheric Temperature
            </h1>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [4, 5.5, 4, 5, 3.5, 5],
                  area: true,
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
