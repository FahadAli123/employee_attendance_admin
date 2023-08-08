import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Loader from "../../../Components/Loader";
import deleteIcon from "../../../Assets/icons/delete.png";
import editIcon from "../../../Assets/icons/edit.png";
import eyeIcon from "../../../Assets/icons/eye.png";
import shareIcon from "../../../Assets/icons/share.png";

import { GetAllUsers } from "../../../services/UserService";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await GetAllUsers();
      console.log(response);
      setData(response.data);
      setLoading(false);
    }

    fetchUsers();

    return () => {
      setData([]);
    };
  }, []);

  return (
    <div className="w-full h-full pt-5">
      {loading && <Loader />}
      <div class="text-[30px] font-medium ">Users</div>
      <span class="text-[#AEAEAE] font-light">
        Details about students and teachers accounts.
      </span>
      <div className="h-full mt-10 w-full bg-white rounded-md shadow-sm p-5">
        <div className="w-full flex flex-row items-center justify-between">
          <div class="text-[22px] font-medium ">Accounts</div>
          <div class="w-[40%] flex flex-row items-center justify-between">
            <div class="w-[67px] cursor-pointer h-[30px] flex items-center justify-center rounded-md bg-white border-black border-[1px]">
              Filters
            </div>
            <div class="w-[141px] cursor-pointer flex items-center justify-center h-[30px] text-white rounded-md bg-primary">
              Students Account
            </div>
            <div class="w-[141px] cursor-pointer h-[30px] flex items-center justify-center text-white rounded-md bg-primary">
              Teachers Account
            </div>
            <div class="w-[67px] cursor-pointer h-[30px] flex items-center justify-center rounded-md bg-primary">
              <img src={shareIcon} />
            </div>
          </div>
        </div>

        <table class=" w-[100%] bg-white m-auto mt-10 rounded-lg">
          <tr>
            {/* <th class="font-medium text-[#404040] text-left px-2 py-2">
              Created At
            </th> */}
            <th class="font-medium text-[#404040] text-left px-2 py-2">ID</th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              UserName
            </th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              Account Type
            </th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              Status
            </th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              Actions
            </th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                class="border-b-[1px] h-14 cursor-pointer hover:bg-slate-100"
              >
                {/* <td class="text-[#AEAEAE] text-Left px-2 py-2">
                  {item.updatedAt}
                </td> */}
                <td class="text-[#AEAEAE] text-left px-2 py-2">
                  {item.user_id}
                </td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">{item.name}</td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">{item.role}</td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">active</td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">
                  <div className="flex w-[50%] flex-row items-center justify-between">
                    <img src={eyeIcon} />
                    <img src={editIcon} />
                    <img src={deleteIcon} />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default withRouter(Users);
