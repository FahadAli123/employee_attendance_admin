/*
 *
 *
 * @author: iusmansultan
 *All apis and backend work of the app is in this file
 *
 *
 */

import axios from 'axios';
import {baseUrl} from '../helpers/Config';
import {apiEndPoints} from '../helpers/Config';

const GetStudentOrders = async id => {
  try {
    const url = baseUrl + apiEndPoints.ORDERS.GET_STUDENT_ORDERS + id;
    return axios
      .get(url)
      .then(response => {
        const {success, message, data} = response.data;

        return {
          success,
          message,
          data,
        };
      })
      .catch(err => {
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
const GetTeacherOrders = async id => {
  try {
    const url = baseUrl + apiEndPoints.ORDERS.GET_TEACHER_ORDERS + id;
    return axios
      .get(url)
      .then(response => {
        const {success, message, data} = response.data;

        return {
          success,
          message,
          data,
        };
      })
      .catch(err => {
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

export {GetStudentOrders, GetTeacherOrders};
