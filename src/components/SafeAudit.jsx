import "../styles/PageStyles.css";
import axios from "axios";
import React, { useState } from "react";
import SideBar from "./SideBar";
import HorizontalNav from "./HorizontalNav";

const SafeAuditPage = () =>{
    const [startDay, setStartDay] = useState();
    const [endDay, setEndDay] = useState();
    const [currentDay, setCurrentDay] = useState(Date.toString(Date.now));
    const [pettyCash, setPettyCash] = useState(0);
    const [expected, setExpected] = useState(0);
    const [overShort, setOverShort] = useState(0);
    const [safeTotal, setSafeTotal] = useState(0);

  //changes the start day, end day, and current day
  /*function changeDayStart() {}
  function changeDayEnd() {}
  function changeDayCurrent() {}*/

  function clamp(value, min = 0){
    if (value < min){
        return min;
    }
        return value;
    }

  function Submit(event) {
    event.preventDefault();

    axios.post("https://cis424-rest-api.azurewebsites.net/SVSU_CIS424/ViewSafeTotalsForStore", {
        "storeID": ""
      })
      .then((response) => {
        console.log(response);
        if (response.data.IsValid == true) {
          //navigate(routes.home);
        } else {

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex h-screen bg-custom-accent">
      <SideBar currentPage={4} />
      <div className="flex flex-col w-full">
        <HorizontalNav />
        <div className="float-left ml-32 mt-12">
          <label className="text-main-color text-2xl ">Start Date:
            <input
                onChange={setStartDay}
                className="box-border text-center text-base ml-4 mr-12 w-32 border-border-color border-2 hover:bg-nav-bg bg-white"
                type="date"
                name="start"
            ></input>
          </label>
          <label className="text-main-color text-2xl ">End Date:
            <input
                onChange={setEndDay}
                className="box-border text-center text-base ml-4 mr-12 w-32 border-border-color border-2 hover:bg-nav-bg bg-white"
                type="date"
                name="start"
            ></input>
          </label>
        </div>
        <div className="float-left ml-32 mt-8">
          <div>
            <div onClick="" className=""></div>
            <p className="text-center w-252">{currentDay}</p>
            <table className="box-border border-border-color border-2">
              <tbody>
                <tr>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Name
                  </td>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Prev. Day Strap Amount
                  </td>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Prev. Day Loose Amount
                  </td>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Prev. Day Total Value
                  </td>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Current Day Strap Amount
                  </td>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Strap Amount
                  </td>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Current Day Loose Amount
                  </td>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Loose Amount
                  </td>
                  <td className="box-border border-border-color border-2 text-center w-28 h-12">
                    Current Day Total Value
                  </td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    1s
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    5s
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    10s
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    20s
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    50s
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    100s
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    Pennies
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    Nickles
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    Dimes
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
                <tr>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8">
                    Quarters
                  </td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                  <td className="bg-nav-bg box-border border-border-color border-2 text-center w-28 h-8"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="mt-4">
              <tbody>
                <tr>
                  <td>
                    <label className="text-main-color">Petty cash:
                        <input
                            value={pettyCash}
                            onChange={e => setPettyCash(clamp(e.target.value))} 
                            min="0"
                            className="box-border text-center mb-4 ml-6 mr-12 w-24 float-right border-border-color border-2 hover:bg-nav-bg bg-white"
                            type="number"
                        />
                    </label>
                  </td>
                  <td>
                    <label className="text-main-color">Over/Short:
                        <input
                            value={overShort}
                            onChange={e => setOverShort(clamp(e.target.value))} 
                            min="0"
                            className="box-border text-center mb-4 ml-6 mr-12 w-24 float-right border-border-color border-2 hover:bg-nav-bg bg-white"
                            type="number"
                        />
                    </label>
                  </td>
                  <td></td>
                  <td>
                    <button
                        type="submit"
                        value="submit"
                        className="flex w-36 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="text-main-color">Safe Expected:
                        <input
                            value={expected}
                            onChange={e => setExpected(clamp(e.target.value))} 
                            min="0"
                            className="box-border text-center mb-4 ml-6 mr-12 w-24 float-right border-border-color border-2 hover:bg-nav-bg bg-white"
                            type="number"
                        />
                    </label>
                  </td>
                  <td>
                    <label className="text-main-color">Safe Total:
                        <input
                            value={safeTotal}
                            onChange={e => setSafeTotal(clamp(e.target.value))} 
                            min="0" 
                            className="box-border text-center mb-4 ml-6 mr-12 w-24 float-right border-border-color border-2 hover:bg-nav-bg bg-white"
                            type="number"
                        />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeAuditPage;
