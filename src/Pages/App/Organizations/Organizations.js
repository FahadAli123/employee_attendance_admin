import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// import { GetAllUsers, BlockUsers } from "../../../Helpers/Backend";
import Loader from "../../../Components/Loader";
import deleteIcon from "../../../Assets/icons/delete.png";
import editIcon from "../../../Assets/icons/edit.png";
import eyeIcon from "../../../Assets/icons/eye.png";
// import shareIcon from "../../../Assets/icons/share.png";
import { GetAllOrganization } from "../../../services/OrganizationService";

const Organizations = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    GetAllOrganization().then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full h-full pt-5">
      {loading && <Loader />}
      <div class="text-[30px] font-medium ">List of All Organization</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginRight: "15px",
          }}
          placeholder="Filter"
        />

        {/* Search button */}
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#000000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Search
        </button>
      </div>
      {/* <span class="text-[#AEAEAE] font-light">
        Get details about the transactions.
      </span> */}
      <div className="h-full mt-10 w-full bg-white rounded-md shadow-sm p-5">
        <div className="w-full flex flex-row items-center justify-between">
          <div class="text-[22px] font-medium ">Organization</div>
          <div class="w-[40%] flex flex-row items-center justify-between">
            {/* <div class="w-[67px] cursor-pointer h-[30px] flex items-center justify-center rounded-md bg-white border-black border-[1px]">
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
            </div> */}
          </div>
        </div>

        <table class=" w-[100%] bg-white m-auto mt-10 rounded-lg">
          <tr>
            <th class="font-medium text-[#404040] text-left px-2 py-2">Name</th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              Address
            </th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              Phone
            </th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              Status
            </th>
            <th class="font-medium text-[#404040] text-left px-2 py-2">
              createdAt
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
                <td class="text-[#AEAEAE] text-Left px-2 py-2">{item.name}</td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">
                  {item.address}
                </td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">{item.phone}</td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">Active</td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">
                  {item.created_at}
                </td>
                <td class="text-[#AEAEAE] text-left px-2 py-2">
                  <div className="flex w-[70%] flex-row items-center justify-between">
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

export default withRouter(Organizations);
