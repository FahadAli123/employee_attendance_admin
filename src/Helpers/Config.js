module.exports = {
  // baseUrl: "https://schooler.herokuapp.com/api/v1/schooler", //dev baseUrl
  baseUrl: "http://localhost:8080/api/v1/attendance",

  // ALL END POINTS OF THE APP CALLED TO ACCESS BACKEND
  apiEndPoints: {
    // END POINTS RELATED TO QUESTIONS
    QUESTIONS: {
      GET_QUESTIONS: "/question",
      POST_QUESTIONS: "/question/post-question",
    },
    EMPLOYEES: {
      GET_ALL_EMPLOYEES: "/allEmployee",
    },
    USERS: {
      GET_ALL_USERS: "/users",
    },
    ORGANIZATION: {
      GET_ALL_ORGANIZATION: "/organization",
    },
    // End points for Orders
    ORDERS: {
      GET_STUDENT_ORDERS: "/orders/student/",
      GET_TEACHER_ORDERS: "/orders/teacher/",
    },
    SUPPORT: {
      GET_MESSAGE: "/all/support",
    },
  },
};
