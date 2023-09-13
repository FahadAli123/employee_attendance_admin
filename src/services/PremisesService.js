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

const addPremises = async (premisesData, organizationId) => {
  try {
    // const url = baseUrl + apiEndPoints.PREMISES.ADD_PREMISES + organizationId;
    // console.log("???", url);
    console.log("???????????PREMISES DATA", premisesData);
    console.log("+++++++ORGANIZATION ID", organizationId);
    const response = await axios.post(
      `${baseUrl}${apiEndPoints.PREMISES.ADD_PREMISES}/${organizationId}`,
      premisesData,
    );
    console.log("+++++RESPONSE DATAAAAA", response.data);
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

export { addPremises };
