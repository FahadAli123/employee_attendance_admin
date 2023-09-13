import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// import Loader from "../../../Components/Loader";
// import deleteIcon from "../../../Assets/icons/delete.png";
// import editIcon from "../../../Assets/icons/edit.png";
// import eyeIcon from "../../../Assets/icons/eye.png";
// import shareIcon from "../../../Assets/icons/share.png";

// import { GetAllUsers } from "../../../services/UserService";
import { createOrgan } from "../../../services/OrganizationService";
import { addPremises } from "../../../services/PremisesService";

const createOrganization = () => {
  const initialFormData = {
    name: "",
    phone: "",
    address: "",
    coord1: "",
    coord2: "",
    coord3: "",
    coord4: "",
    coord5: "",
    coord6: "",
    // Other premises fields
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [organizationAdded, setOrganizationAdded] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [data, setData] = useState([]);

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
  const [formData, setFormData] = useState({ ...initialFormData });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [organizationId, setOrganizationId] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleAddOrganization = async (event) => {
    event.preventDefault();

    try {
      const orgData = {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
      };

      const orgResult = await createOrgan(orgData);
      if (orgResult) {
        // console.log("Organization created:", orgResult);
        // console.log("organization id is:", orgResult.data.insertedId);
        setOrganizationId(orgResult.data.insertedId);
        setOrganizationAdded(true); // Set organization added state to true
        setButtonDisabled(true);
      } else {
        console.error("Error creating organization:", orgResult.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleAddPremises = async (event) => {
    event.preventDefault();

    try {
      const premisesData = {
        coord1: formData.coord1,
        coord2: formData.coord2,
        coord3: formData.coord3,
        coord4: formData.coord4,
        coord5: formData.coord5,
        coord6: formData.coord6,
        // Other premises fields
      };

      const premisesResult = await addPremises(premisesData, organizationId);
      if (premisesResult) {
        setButtonDisabled(false);
        setFormData({ ...initialFormData });
        setShowSuccessPopup(true);
        console.log("Premises added:", premisesResult);
      } else {
        console.error("Error adding premises:", premisesResult.message);
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
            width: 30%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
            margin-bottom:15px;
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
        <h2 className="form-heading">CREATE NEW ORGANIZATION</h2>
        <form onSubmit={handleAddOrganization}>
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
              placeholder="Organization Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            onClick={handleAddOrganization}
            disabled={buttonDisabled}
          >
            Add Organization Detail
            {organizationAdded && <span>✔️</span>}
          </button>
        </form>
        <form onSubmit={handleAddPremises}>
          <div className="form-group">
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
            Add Coordinates
          </button>
        </form>
        <div className={`success-popup ${showSuccessPopup ? "show" : ""}`}>
          <div className="popup-content">
            <h2>Success!</h2>
            <p>Organization created successfully.</p>
            <button onClick={() => setShowSuccessPopup(false)}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(createOrganization);
