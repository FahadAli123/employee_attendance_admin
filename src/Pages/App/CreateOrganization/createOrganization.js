import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Loader from "../../../Components/Loader";
import deleteIcon from "../../../Assets/icons/delete.png";
import editIcon from "../../../Assets/icons/edit.png";
import eyeIcon from "../../../Assets/icons/eye.png";
import shareIcon from "../../../Assets/icons/share.png";

// import { GetAllUsers } from "../../../services/UserService";

const createOrganization = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   useEffect(() => {
  //     async function fetchUsers() {
  //       setLoading(true);
  //       const response = await GetAllUsers();
  //       console.log(response);
  //       setData(response.data);
  //       setLoading(false);
  //     }

  //     fetchUsers();

  //     return () => {
  //       setData([]);
  //     };
  //   }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    industry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data, e.g., send it to a server or perform validation
    console.log(formData);
  };
  return (
    <div className="w-full h-full pt-5">
      {loading && <Loader />}
      {/* <div class="text-[30px] font-medium ">Create New Organization</div>
      <span class="text-[#AEAEAE] font-light">
        Fill all the required fields and add new organization.
      </span> */}
      {/* <div className="h-full mt-10 w-full bg-white rounded-md shadow-sm p-5"> */}
      {/* <div className="w-full flex flex-row items-center justify-between"> */}
      {/* <div class="text-[22px] font-medium items-center ">Create Organization</div> */}
      <div className="organization-form">
        <style>
          {`
          .organization-form {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f7f7f7;
            font-family: Arial, sans-serif;
          }

          .form-container {
            width: 800px;
            padding: 30px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .form-heading {
            text-align: center;
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-label {
            font-size: 14px;
            color: #555;
          }

          .form-input {
            width: 100%;
            padding: 10px;
            margin-top:3%;
            border: 2px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
          }

          .submit-button {
            background-color: #000000;
            color: white;
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          .submit-button:hover {
            background-color: #0056b3;
          }
        `}
        </style>
        <div className="form-container">
          <h2 className="form-heading">CREATE NEW ORGANIZATION</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                name="name"
                placeholder="Enter the Organization Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="address"
                placeholder="Enter the Address of Organization"
                value={formData.address}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="phone"
                placeholder="Enter Orginization Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="coord1"
                placeholder="Enter Coordinate 1"
                value={formData.coord1}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="coord2"
                placeholder="Enter Coordinate 2"
                value={formData.coord2}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="coord3"
                placeholder="Enter Coordinate 3"
                value={formData.coord3}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="coord4"
                placeholder="Enter Coordinate 4"
                value={formData.coord4}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="coord5"
                placeholder="Enter Coordinate 5"
                value={formData.coord5}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input"
                name="coord6"
                placeholder="Enter Coordinate 6"
                value={formData.coord6}
                onChange={handleChange}
              />
            </div>
            {/* Rest of the form fields */}
            <button type="submit" className="submit-button">
              Create Organization
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default withRouter(createOrganization);
