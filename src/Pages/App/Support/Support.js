import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Loader from "../../../Components/Loader";
import deleteIcon from "../../../Assets/icons/delete.png";
import editIcon from "../../../Assets/icons/edit.png";
import eyeIcon from "../../../Assets/icons/eye.png";
import shareIcon from "../../../Assets/icons/share.png";

import { GetMessages } from "../../../services/SupportService";

const Support = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await GetMessages();
      console.log(response);
      setData(response.data);
      setLoading(false);
    }

    fetchData();

    return () => {
      setData([]);
    };
  }, []);

  return (
    <div className="w-full h-full pt-5">
      {loading && <Loader />}
      <div class="text-[30px] font-medium ">Support</div>
      <span class="text-[#AEAEAE] font-light">
        All Custom Support Messages By Users.
      </span>
      <div className="h-full mt-10 w-full bg-white rounded-md shadow-sm p-5">
        <div className="w-full flex flex-row items-center justify-between">
          <div class="text-[22px] font-medium ">Support</div>
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
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              Created At
            </th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">ID</th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              UserName
            </th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              Message
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
                <td class="text-[#AEAEAE] text-Left px-2 py-2">
                  {item.createdAt}
                </td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">
                  {item.user_id}
                </td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">{item.name}</td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">
                  {item.message}
                </td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">pending</td>
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

export default withRouter(Support);
