import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom';
import Loader from '../../../Components/Loader';

//Icons 
import AddchartIcon from '@mui/icons-material/Addchart';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BalanceIcon from '@mui/icons-material/Balance';


//Dashboard Graphs UI elements..
import Earnings from '../../../Components/Dashboard/Earnings';
import Sales from '../../../Components/Dashboard/Sales';
import AppoitmentsChart from '../../../Components/Dashboard/AppoitmentsChart';
import Users from '../../../Components/Dashboard/Users';
import BarbersWithMostAppoitments from '../../../Components/Dashboard/BarbersWithMostAppoitments';


//import apis functions from 
import { AppointmentStats, GetUsersPerMonthRegisters } from '../../../Helpers/Backend';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [appoitmentsChartData, setAppoitmentsChartData] = useState({
        Total: 100,
        data: [
            { name: 'Completed', value: 400 },
            { name: 'Cancels', value: 150 },
            { name: 'Pending', value: 30 },
        ]
    });

    const [userData, setUserData] = useState([])



    useEffect(() => {
        setLoading(true);

        AppointmentStats()
            .then(res => {
                console.log("res", res.data.data);
                setAppoitmentsChartData({
                    Total: res.data.total_app,
                    data: [
                        { name: 'Completed', value: res.data.data.completedBookings },
                        { name: 'Confirm', value: res.data.data.confirmedBookings },
                        { name: 'Pending', value: res.data.data.pendingBookings },
                        { name: 'Rejected', value: res.data.data.rejectedBookings },
                    ]
                });
            })
            .catch(err => {
                console.log("err", err);
            })

        GetUsersPerMonthRegisters()
            .then(res => {
                console.log(res.data);
                const Months = [
                    {
                        name: 'Jan',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Feb',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Mar',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Apr',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'May',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Jun',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Jul',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Aug',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Sep',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Oct',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Nov',
                        user: 0,
                        barber: 0,
                    },
                    {
                        name: 'Dec',
                        user: 0,
                        barber: 0,
                    }
                ];

                res.data.data.forEach(element => {
                    let tempName = "";
                    for (let i = 0; i < element.name.length; i++) {
                        let t = element.name.charAt(i);
                        if (i < 3) {
                            tempName += t;
                        } else {
                            break;
                        }
                    }
                    Months.forEach(e => {
                        if (e.name.toUpperCase() === tempName.toUpperCase()) {
                            e.user = element.user;
                            e.barber = element.barber;
                        }
                    })
                })
                setUserData(Months);
            })
            .catch(err => {
                console.log(err);
            })
        setLoading(false);
    }, [])


    return (
      <div class=" w-full h-full">
        {loading && <Loader />}
        <div class="text-[30px] font-medium ">Dashboard</div>
        <span class="text-[#AEAEAE] font-light">
          Get details about Schoooler platform.
        </span>

        <div class="w-full  mb-4 flex flex-row flex-wrap justify-between items-center  mt-1 cursor-pointer">
          <div class="w-[250px] h-full p-4 bg-white drop-shadow-md rounded-lg">
            <div class="flex flex-row justify-between flex-wrap">
              <div class="ml-2 text-[16px] flex flex-col ">
                <h2>Total Users:</h2>
                <h2 class="font-bold">£4200.45</h2>
              </div>
              <div class="bg-primary p-2 rounded-lg text-white">
                <AddchartIcon />
              </div>
            </div>
          </div>
          <div class="w-[250px] h-full p-4 bg-white drop-shadow-md rounded-lg">
            <div class="flex flex-row justify-between flex-wrap">
              <div class="ml-2 text-[16px] flex flex-col ">
                <h2>Total Students:</h2>
                <h2 class="font-bold">£4200.45</h2>
              </div>
              <div class="bg-primary p-2 rounded-lg text-white">
                <AddchartIcon />
              </div>
            </div>
          </div>
          <div class="w-[250px] h-full p-4 bg-white drop-shadow-md rounded-lg">
            <div class="flex flex-row justify-between flex-wrap">
              <div class="ml-2 text-[16px] flex flex-col ">
                <h2>Total Teachers:</h2>
                <h2 class="font-bold">£4200.45</h2>
              </div>
              <div class="bg-primary p-2 rounded-lg text-white">
                <AddchartIcon />
              </div>
            </div>
          </div>
          <div class="w-[250px] h-full p-4 bg-white drop-shadow-md rounded-lg">
            <div class="flex flex-row justify-between flex-wrap">
              <div class="ml-2 text-[16px] flex flex-col ">
                <h2>New Orders:</h2>
                <h2 class="font-bold">£4200.45</h2>
              </div>
              <div class="bg-primary p-2 rounded-lg text-white">
                <AddchartIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-10 flex flex-col lg:flex-row justify-between items-center mt-5">
          <div className="w-full  max-h-[35rem] overflow-hidden lg:w-[48%]   bg-white shadow-sm rounded-md p-4">
            <span>Posted Questions Students:</span>
            <BarbersWithMostAppoitments />
          </div>
          <div className="w-full  max-h-[35rem] overflow-hidden lg:w-[48%]  bg-white shadow-sm rounded-md p-4">
            <span>Teacher Offers on Students Posted Questions:</span>
            <BarbersWithMostAppoitments />
          </div>
        </div>

        <div className="w-full h-[62rem] lg:h-[30rem] flex flex-col md:flex-row flex-wrap justify-between items-center">
          <div className="w-[100%] lg:w-[34%] h-[30rem] bg-white shadow-sm rounded-sm p-4">
            <span>New Users:</span>
            <Earnings />
          </div>
          <div className="w-[100%] lg:w-[65%] h-[30rem] bg-white shadow-sm rounded-sm p-4">
            <span>Overview of Completed Orders:</span>
            <Sales />
          </div>
        </div>

        <div className="w-full mb-10 flex flex-col lg:flex-row justify-between items-center mt-5">
          <div className="w-full  max-h-[35rem] overflow-hidden lg:w-[48%]   bg-white shadow-sm rounded-md p-4">
            <span>Manage Request:</span>
            <BarbersWithMostAppoitments />
          </div>
          <div className="w-full  max-h-[35rem] overflow-hidden lg:w-[48%]  bg-white shadow-sm rounded-md p-4">
            <span>Order Success Rate:</span>
            <BarbersWithMostAppoitments />
          </div>
        </div>
      </div>
    );
}

export default withRouter(Home);

