import React from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MoneyIcon from "@mui/icons-material/Money";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Business from "@mui/icons-material/Business";
import PersonPin from "@mui/icons-material/PersonPin";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddBox from "@mui/icons-material/AddBox";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssistantIcon from '@mui/icons-material/Assistant';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { primaryColor } from "../Helpers/Colors";
import { Dashboard } from "@material-ui/icons";
import { Settings, People } from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";

import logo from "../Assets/Images/ict-logo.png";

const isNotActiveStyle =
  "flex items-center px-7 gap-3 text-[15px] text-black-500 hover:text-black transition-all duration-200 ease-in-out capitalize cursor-pointer";
const isActiveStyle =
  "flex items-center px-7 gap-3 text-[15px] text-primary font-bold border-r-2 border-primary transition-all duration-200 ease-in-out capitalize cursor-pointer";

const generalList = [
  {
    id: 1,
    text: "Dashboard",
    icon: <Dashboard />,
    url: "/dashboard",
  },
  {
    id: 2,
    text: "Create Organization",
    icon: <AddBox />,
    url: "/createOrganization",
  },
  {
    id: 3,
    text: "Organizations",
    icon: <Business />,
    url: "/organizations",
  },
  {
    id: 4,
    text: "Users",
    icon: <People />,
    url: "/users",
  },
  {
    id: 5,
    text: "Employee",
    icon: <PersonPin />,
    url: "/employees",
  },
  {
    id: 6,
    text: "Administrator",
    icon: <SupervisorAccountIcon />,
    url: "/administrators",
  },
  {
    id: 7,
    text: "Create Assistants",
    icon: <AssistantIcon />,
    url: "/createAssistant",
  },
  // {
  //   id: 7,
  //   text: "Profile",
  //   icon: <AddBusinessIcon />,
  //   url: "/profile",
  // },
];

const SideBar = ({ closeToggle }) => {
  const history = useHistory();
  const handleCloseSideBar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className="flex flex-col justify-between bg-white h-screen overflow-y-scroll min-w-220 hide-scrollbar shadow-md">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center cursor-pointer"
          onClick={handleCloseSideBar}
        >
          <img src={logo} alt="logo" className="w-32 mb-[26px]" />
        </Link>
        <div className="flex flex-col gap-7">
          {generalList.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              className={isNotActiveStyle}
              activeClassName={isActiveStyle}
              onClick={handleCloseSideBar}
            >
              {item.icon}
              {item.text}
            </NavLink>
          ))}
        </div>
      </div>
      <div
        class="w-[90%] p-4 bg-white mr-auto ml-auto mb-4 rounded-lg text-white flex flex-row cursor-pointer hover:border-2 hover:border-[#212121] drop-shadow-md"
        onClick={() => {
          confirmAlert({
            title: "Logout",
            message: "Are you sure you want to do this.",
            buttons: [
              {
                label: "Yes",
                onClick: () => {
                  localStorage.setItem("isLoggedIn", false);
                  window.location.reload();
                },
              },
              {
                label: "No",
                onClick: () => {},
              },
            ],
          });
        }}
      >
        <LogoutIcon style={{ color: "#212121" }} />
        <h1 class="ml-2 text-[18px] text-[#212121] "> Logout</h1>
      </div>
    </div>
  );
};

export default SideBar;
