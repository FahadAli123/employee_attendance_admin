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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
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

  useEffect(() => {
    setLoading(true);
    GetAllOrganization().then((res) => {
      console.log(res.data);
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
          <div class="text-[22px] font-medium ">Organization</div>
          <div class="w-[40%] flex flex-row items-center justify-between"></div>
        </div>

        <table class=" w-[100%] bg-white m-auto mt-10 rounded-lg">
          <thead>
            <tr>
              <th class="font-medium text-[#404040] text-left px-2 py-2">
                Name
              </th>
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
                    {item.address}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.phone}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">Active</td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {item.created_at}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    <div className="flex w-[70%] flex-row items-center justify-between">
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
          </tbody>
        </table>
        {showPopup && selectedItem && (
          <OrganizationDetailPopup
            item={selectedItem}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default withRouter(Organizations);
const OrganizationDetailPopup = ({ item, onClose }) => {
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
        <h2 style={headingStyles}>Organization Details</h2>
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
              <label style={labelStyles}>Address</label>
              <input
                type="text"
                value={item.address}
                style={inputStyles}
                disabled
              />
            </div>
          </div>
          <div style={formFieldRowStyles}>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>Phone</label>
              <input
                type="text"
                value={item.phone}
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
          </div>
        </form>
        <button style={closeButtonStyles} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
