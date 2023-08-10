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
    <div className="organization-form">
      <div className="form-container">
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
            padding: 60px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          
          .form-heading {
            font-size: 24px;
            margin-bottom: 20px;
            text-align:center;
            font-weight:bold;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .input-group {
            display: flex;
            gap: 10px;
          }
          
          .form-input {
            width: 100%;
            padding: 10px;
            margin-bottom: 25px;
            // border: 2px solid #ccc;
            background-color: cyan;
            border-radius: 10px;
          }
          
          .inline-input {
            flex: 1;
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
            background-color: #808080;
          }
        `}
        </style>
        <h2 className="form-heading">CREATE NEW ORGANIZATION</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                className="form-input inline-input"
                name="name"
                placeholder="Organization Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input inline-input"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              className="form-input"
              name="address"
              placeholder="Organization address"
              value={formData.address}
              onChange={handleChange}
            />
            <div className="input-group">
              <input
                type="text"
                className="form-input inline-input"
                name="coord1"
                placeholder="Coordinate 1"
                value={formData.coord1}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input inline-input"
                name="coord2"
                placeholder="Coordinate 2"
                value={formData.coord2}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-input inline-input"
                name="coord3"
                placeholder="Coordinate 3"
                value={formData.coord3}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input inline-input"
                name="coord4"
                placeholder="Coordinate 4"
                value={formData.coord4}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-input inline-input"
                name="coord5"
                placeholder="Coordinate 5"
                value={formData.coord5}
                onChange={handleChange}
              />
              <input
                type="text"
                className="form-input inline-input"
                name="coord6"
                placeholder="Coordinate 6"
                value={formData.coord6}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Create Organization
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(createOrganization);
