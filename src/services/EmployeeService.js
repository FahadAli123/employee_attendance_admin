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

const GetStudentQuestions = async (id) => {
  try {
    //   Checking if the api get all valid information
    if (!id) {
      return {
        success: false,
        message: "Student id is required",
        data: [],
      };
    }
    const url = baseUrl + apiEndPoints.QUESTIONS.GET_QUESTIONS + "/" + id;
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
const GET_ALL_EMPLOYEES = async () => {
  try {
    const url = baseUrl + apiEndPoints.EMPLOYEES.GET_ALL_EMPLOYEES;
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
const PostQuestion = async (body) => {
  const {
    postedBy,
    title,
    category,
    subject,
    deliveryTime,
    budget,
    questionStatus,
  } = body;

  try {
    //   Checking if the api get all valid information
    if (
      !(
        postedBy &&
        title &&
        category &&
        subject &&
        deliveryTime &&
        budget &&
        questionStatus
      )
    ) {
      return {
        success: false,
        message: "All fields are required",
        data: [],
      };
    }
    const url = baseUrl + apiEndPoints.QUESTIONS.POST_QUESTIONS;
    return axios
      .post(url, body)
      .then((response) => {
        const { success, message, res } = response.data;

        return {
          success,
          message,
          data: res,
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

export { GetStudentQuestions, PostQuestion, GET_ALL_EMPLOYEES };
