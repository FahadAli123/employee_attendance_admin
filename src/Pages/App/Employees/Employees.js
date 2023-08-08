import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Loader from "../../../Components/Loader";
import deleteIcon from "../../../Assets/icons/delete.png";
import editIcon from "../../../Assets/icons/edit.png";
import eyeIcon from "../../../Assets/icons/eye.png";
import shareIcon from "../../../Assets/icons/share.png";
import { GET_ALL_EMPLOYEES } from "../../../services/EmployeeService";

const Employees = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    GET_ALL_EMPLOYEES().then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full h-full pt-5">
      {loading && <Loader />}
      <div class="text-[30px] font-medium ">List Of Employees</div>
      {/* <span class="text-[#AEAEAE] font-light">
        Get details about the questions posted by students.
      </span> */}
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
      <div className="h-full mt-10 w-full bg-white rounded-md shadow-sm p-5">
        <div className="w-full flex flex-row items-center justify-between">
          <div class="text-[22px] font-medium ">Employees</div>
        </div>

        <table class=" w-[100%] bg-white m-auto mt-10 rounded-lg">
          <tr>
            <th class="font-medium text-[#000000] text-left px-2 py-2">Name</th>
            <th class="font-medium text-[#000000] text-left px-2 py-2">CNIC</th>
            <th class="font-medium text-[#000000] text-left px-2 py-2">
              Email
            </th>
            <th class="font-medium text-[#000000] text-left px-2 py-2">
              Organization Name
            </th>
            <th class="font-medium text-[#000000] text-left px-2 py-2">
              Phone
            </th>
            <th class="font-medium text-[#000000] text-left px-2 py-2">
              Created At
            </th>
            <th class="font-medium text-[#000000] text-left px-2 py-2">
              Actions
            </th>
          </tr>
          {data &&
            data.map((item, index) => {
              return (
                <tr
                  key={index}
                  class="border-b-[1px] h-14 cursor-pointer hover:bg-slate-100"
                >
                  <td class="text-[#AEAEAE] text-Left px-2 py-2">
                    {item.name}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.cnic}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.email}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.organizationname}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.phone}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.createdat}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    <div className="flex w-[100%] flex-row items-center justify-between">
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

export default withRouter(Employees);
