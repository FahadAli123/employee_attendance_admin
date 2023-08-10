import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// import Loader from "../../../Components/Loader";
// import deleteIcon from "../../../Assets/icons/delete.png";
// import editIcon from "../../../Assets/icons/edit.png";
// import eyeIcon from "../../../Assets/icons/eye.png";
// import shareIcon from "../../../Assets/icons/share.png";

import { GetAllOrganization } from "../../../services/OrganizationService";

// import { GetAllUsers } from "../../../services/UserService";

const createAssistant = () => {
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
  useEffect(() => {
    setLoading(true);
    GetAllOrganization().then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    gmail: "",
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
            width: 550px;
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
          
          .select-input {
             
            appearance: none; /* Hide the default arrow */
            padding: 10px;
            // border: 1px solid #ccc;
            border-radius: 5px;
            background-color: cyan;
            cursor: pointer;
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
        <h2 className="form-heading">CREATE ASSISTANT OF ORGANIZATION</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-input"
              name="gmail"
              placeholder="Gmail"
              value={formData.gmail}
              onChange={handleChange}
            />

            <input
              type="text"
              className="form-input"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              className="form-input"
              name="cnic"
              placeholder="CNIC"
              value={formData.cnic}
              onChange={handleChange}
            />
            <select
              className="form-input select-input"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="Assistant">Assistant</option>
              <option value="Sub-Assistant">Sub-Assistant</option>
            </select>

            <select
              className="form-input select-input"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            >
              <option value="">Select Organization</option>
              {data.map((org) => (
                <option key={org.id} value={org.name}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">
            Create Assistant
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(createAssistant);
