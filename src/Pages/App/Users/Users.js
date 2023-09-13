import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Loader from "../../../Components/Loader";
import deleteIcon from "../../../Assets/icons/delete.png";
import editIcon from "../../../Assets/icons/edit.png";
import eyeIcon from "../../../Assets/icons/eye.png";
import shareIcon from "../../../Assets/icons/share.png";

// import { GetAllUsers } from "../../../services/UserService";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEyeIconClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  // useEffect(() => {
  //   async function fetchUsers() {
  //     setLoading(true);
  //     const response = await GetAllUsers();
  //     console.log(response);
  //     setData(response.data);
  //     setLoading(false);
  //   }

  //   fetchUsers();

  //   return () => {
  //     setData([]);
  //   };
  // }, []);

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
                    <img
                      src={eyeIcon}
                      alt="View Details"
                      onClick={() => handleEyeIconClick(item)}
                      className="cursor-pointer"
                    />
                    <img
                      src={editIcon}
                      alt="View Details"
                      onClick={() => handleEyeIconClick(item)}
                      className="cursor-pointer"
                    />
                    <img src={deleteIcon} />
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
        {showPopup && selectedItem && (
          <FocalPersonDetailPopup
            item={selectedItem}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default withRouter(Users);
const FocalPersonDetailPopup = ({ item, onClose }) => {
  const popupOverlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const popupContentStyles = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    maxWidth: "900px", // Adjust the maximum width
    height: "75%",
    width: "100%",
  };

  const closeButtonStyles = {
    backgroundColor: "#e0e0e0",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const headingStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const formFieldRowStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyles = {
    width: "100%", // Adjust the width as needed
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  };

  return (
    <div style={popupOverlayStyles}>
      <div style={popupContentStyles}>
        <h2 style={headingStyles}>Focal Person Details</h2>
        <form>
          <div style={formFieldRowStyles}>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>Name</label>
              <input
                type="text"
                value={item.name}
                style={inputStyles}
                disabled
              />
            </div>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>Organization Name</label>
              <input
                type="text"
                value={item.organizationname}
                style={inputStyles}
                disabled
              />
            </div>
          </div>
          {/* <div style={formFieldRowStyles}>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>Role</label>
              <input
                type="text"
                value={item.role_name}
                style={inputStyles}
                disabled
              />
            </div>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>createdAt</label>
              <input
                type="text"
                value={item.created_at}
                style={inputStyles}
                disabled
              />
            </div>
          </div> */}
        </form>
        <button style={closeButtonStyles} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
