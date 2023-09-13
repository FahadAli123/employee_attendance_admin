import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Loader from "../../../Components/Loader";
import deleteIcon from "../../../Assets/icons/delete.png";
import editIcon from "../../../Assets/icons/edit.png";
import eyeIcon from "../../../Assets/icons/eye.png";
import { GetAllOrganization } from "../../../services/OrganizationService";

const Employees = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const [fileInputs, setFileInputs] = useState({});

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
        item.organizationname.toLowerCase().includes(query),
      );
      setFilteredData(filteredResults);
    } else {
      setFilteredData(data);
    }
  };
  const handleFileChange = (event, item) => {
    // Handle file change logic here
    const selectedFile = event.target.files[0];
    // Do something with the selected file, such as storing it in state or sending it to the backend
    console.log("Selected file:", selectedFile);
    setSelectedFile(selectedFile);
  };

  const handleUploadButtonClick = (item) => {
    // Trigger file input click
    fileInputs[item.id].click();
  };
  return (
    <div className="w-full h-full pt-5">
      {loading && <Loader />}
      <div class="text-[30px] font-medium ">
        Upload File against Organization
      </div>
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
          value={searchQuery}
          onChange={handleSearchChange}
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
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
      <div className="h-full mt-10 w-full bg-white rounded-md shadow-sm p-5">
        <div className="w-full flex flex-row items-center justify-between">
          <div class="text-[22px] font-medium ">Files of Employee</div>
          <div class="w-[40%] flex flex-row items-center justify-between"></div>
        </div>

        <table class=" w-[100%] bg-white m-auto mt-10 rounded-lg">
          <thead>
            <tr>
              <th class="font-medium text-[#000000] text-left px-2 py-2">
                Name
              </th>
              <th class="font-medium text-[#000000] text-left px-2 py-2">
                Created At
              </th>
              <th class="font-medium text-[#000000] text-left px-2 py-2">
                Upload File
              </th>
              <th class="font-medium text-[#000000] text-left px-2 py-2">
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
                    {item.created_at}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    {selectedFile ? (
                      <div>
                        <p>{selectedFile.name}</p>
                        <button
                          onClick={() => handleUploadButtonClick(item)}
                          className="cursor-pointer"
                        ></button>
                      </div>
                    ) : (
                      <div>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(event) => handleFileChange(event, item)}
                          className="hidden"
                          ref={(input) => (fileInputs[item.id] = input)}
                        />
                        <button
                          onClick={() => handleUploadButtonClick(item)}
                          className="cursor-pointer"
                        >
                          Upload File
                        </button>
                      </div>
                    )}
                  </td>
                  <td class="text-[#AEAEAE] text-left px-2 py-2">
                    <div className="flex w-[30%] flex-row items-center justify-between">
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
          <EmployeeDetailsPopup
            item={selectedItem}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default withRouter(Employees);
const EmployeeDetailsPopup = ({ item, onClose }) => {
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
        <h2 style={headingStyles}>Employee Details</h2>
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
              <label style={labelStyles}>CNIC</label>
              <input
                type="text"
                value={item.cnic}
                style={inputStyles}
                disabled
              />
            </div>
          </div>
          <div style={formFieldRowStyles}>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>Email</label>
              <input
                type="email"
                value={item.email}
                style={inputStyles}
                disabled
              />
            </div>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>Organization</label>
              <input
                type="text"
                value={item.organizationname}
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
                value={item.createdat}
                style={inputStyles}
                disabled
              />
            </div>
          </div>
          <div style={formFieldRowStyles}>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>Email</label>
              <input
                type="email"
                value={item.email}
                style={inputStyles}
                disabled
              />
            </div>
            <div style={{ width: "48%" }}>
              <label style={labelStyles}>Organization</label>
              <input
                type="text"
                value={item.organizationname}
                style={inputStyles}
                disabled
              />
            </div>
          </div>
          {/* Continue adding more rows for other fields */}
        </form>
        <button style={closeButtonStyles} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
