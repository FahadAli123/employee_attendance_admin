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

const GetAllRole = (async) => {
  try {
    const url = baseUrl + apiEndPoints.ROLES.GET_ALL_ROLES;
    return axios
      .get(url)
      .then((response) => {
        const { success, message, data } = response.data;

        return {
          success,
          message,
          data,
        };
      })
      .catch((err) => {
        return {
          success: false,
          message: err.message,
          data: [],
        };
      });
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: [],
    };
  }
};
export { GetAllRole };
