/*
 *
 *
 * @author: FAHAD ALI
 *All apis and backend work of the app is in this file
 *
 *
 */

import axios from "axios";
import { baseUrl } from "../Helpers/Config";
import { apiEndPoints } from "../Helpers/Config";

const addFocalPerson = async (focalPersonData) => {
  try {
    const url = baseUrl + apiEndPoints.USERS.CREATE_USER;
    const response = await axios.post(url, focalPersonData);

    console.log(">>>>>RESPONSE", response.data);
    const { success, message, data } = response.data;
    return {
      success,
      message,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
    };
  }
};
export { addFocalPerson };
