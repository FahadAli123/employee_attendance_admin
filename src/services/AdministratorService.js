/*
 *
 *
 * @author: iusmansultan
 *All apis and backend work of the app is in this file
 *
 *
 */

import axios from "axios";
import { baseUrl } from "../Helpers/Config";
import { apiEndPoints } from "../Helpers/Config";

// const UpdateUserProfile = async (body) => {
//   const { password, name, about, imageUrl, id } = body;
//   try {
//     const url = baseUrl + apiEndPoints.USER.UPDATE_USER_PROFILE + id;
//     return axios
//       .post(url, body)
//       .then((response) => {
//         const { success, message, data } = response.data;

//         return {
//           success,
//           message,
//           data: data,
//         };
//       })
//       .catch((err) => {
//         return {
//           success: false,
//           message: err.message,
//           data: [],
//         };
//       });
//   } catch (error) {
//     return {
//       success: false,
//       message: error.message,
//       data: [],
//     };
//   }
// };
const GetAllUsers = async () => {
  try {
    const url = baseUrl + apiEndPoints.USERS.GET_ALL_USERS;
    return axios
      .get(url)
      .then((response) => {
        const { success, message, data } = response.data;

        console.log("}}}}}}", data);
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

export { GetAllUsers };
