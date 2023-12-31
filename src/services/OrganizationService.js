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

const GetAllOrganization = (async) => {
  try {
    const url = baseUrl + apiEndPoints.ORGANIZATION.GET_ALL_ORGANIZATION;
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
const createOrgan = async (formData) => {
  try {
    const url = baseUrl + apiEndPoints.ORGANIZATION.CREATE_ORGANIZATION;
    const response = await axios.post(url, formData);

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
export { GetAllOrganization, createOrgan };
