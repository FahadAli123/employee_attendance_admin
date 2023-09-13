import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// import Loader from "../../../Components/Loader";
import { GetAllOrganization } from "../../../services/OrganizationService";
import { addFocalPerson } from "../../../services/FocalPersonService";
import { GetAllRole } from "../../../services/RolesService";
// import { getAllByRole } from "@testing-library/react";
const createAssistant = () => {
  const initialFormData = {
    name: "",
    gmail: "",
    phone: "",
    cnic: "",
    role: "",
    organization: "",
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [roles, setRoles] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [organizations, setOrganizations] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setLoading(true);
    GetAllOrganization().then((res) => {
      console.log(">>>>>ORGANIZTION", res);
      setOrganizations(res.data);
      setLoading(false);
    });
    GetAllRole().then((res) => {
      console.log(">>>>>ROLESs", res);
      setRoles(res.data);
      setLoading(false);
    });
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process form data, e.g., send it to a server or perform validation
    console.log(">>>>>>FORM DATA", formData);
    // Get the selected organization and role objects
    const selectedOrg = organizations.find(
      (org) => org.id === parseInt(formData.organization),
    );
    const selectedRole = roles.find(
      (role) => role.id === parseInt(formData.role),
    );
    try {
      // Send the data to create the focal person
      const focalPersonData = {
        name: formData.name,
        gmail: formData.gmail,
        phone: formData.phone,
        cnic: formData.cnic,
        r_id: selectedRole.id,
        o_id: selectedOrg.id,
      };
      console.log(">>>>FOCAL PERSON DATA", focalPersonData);
      const focalPersonResult = await addFocalPerson(focalPersonData);
      if (focalPersonResult) {
        setShowSuccessPopup(true);
        setFormData(initialFormData);
        console.log("Focal Person added:", focalPersonResult);
      } else {
        console.error("Error adding focal person:", focalPersonResult.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
          .success-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.3s ease-in-out;
          }
          
          .success-popup.show {
            visibility: visible;
            opacity: 1;
          }
          
          .popup-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }
          
          .popup-content h2 {
            margin-bottom: 10px;
          }
          
          .popup-content button {
            background-color: #000000;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          
          .popup-content button:hover {
            background-color: #0056b3;
          }
        `}
        </style>
        <h2 className="form-heading">CREATE FOCAL PERSON OF ORGANIZATION</h2>
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
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>

            <select
              className="form-input select-input"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            >
              <option value="">Select Organization</option>
              {organizations.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">
            Create Assistant
          </button>
        </form>
        <div className={`success-popup ${showSuccessPopup ? "show" : ""}`}>
          <div className="popup-content">
            <h2>Success!</h2>
            <p>Focal person created successfully.</p>
            <button onClick={() => setShowSuccessPopup(false)}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(createAssistant);
