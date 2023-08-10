import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Loader from "../../../Components/Loader";
import deleteIcon from "../../../Assets/icons/delete.png";
import editIcon from "../../../Assets/icons/edit.png";
import eyeIcon from "../../../Assets/icons/eye.png";
// import shareIcon from "../../../Assets/icons/share.png";

import { GetAllUsers } from "../../../services/AdministratorService";

const Administrators = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    GetAllUsers().then((res) => {
      setData(res.data);
      setFilteredData(res.data);
      setLoading(false);
    });
  }, []);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    const query = searchQuery.toLowerCase();

    if (query) {
      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(query),
      );
      setFilteredData(filteredResults);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="w-full h-full pt-5">
      {loading && <Loader />}
      <div class="text-[30px] font-medium ">List of All Users</div>

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
          placeholder="FILTERSSS"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#000000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
      <div className="h-full mt-10 w-full bg-white rounded-md shadow-sm p-5">
        <div className="w-full flex flex-row items-center justify-between">
          <div class="text-[22px] font-medium ">Users</div>
          <div class="w-[40%] flex flex-row items-center justify-between"></div>
        </div>

        <table class=" w-[100%] bg-white m-auto mt-10 rounded-lg">
          <thead>
            <tr>
              <th class="font-medium text-[#404040] text-left px-2 py-2">
                User Name
              </th>
              <th class="font-medium text-[#404040] text-left px-2 py-2">
                Organization name
              </th>
              <th class="font-medium text-[#404040] text-left px-2 py-2">
                Role
              </th>
              <th class="font-medium text-[#404040] text-left px-2 py-2">
                Status
              </th>
              <th class="font-medium text-[#404040] text-left px-2 py-2">
                Phone
              </th>
              <th class="font-medium text-[#404040] text-left px-2 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => {
              return (
                <tr
                  key={index}
                  class="border-b-[1px] h-14 cursor-pointer hover:bg-slate-100"
                >
                  <td class="text-[#AEAEAE] text-Left px-2 py-2">
                    {item.name}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.organization_name}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.role_name}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">Active</td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.phone}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    <div className="flex w-[60%] flex-row items-center justify-between">
                      <img src={eyeIcon} />
                      <img src={editIcon} />
                      <img src={deleteIcon} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withRouter(Administrators);
