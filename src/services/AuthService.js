// /*
//  *
//  *
//  * @author: FAHAD ALI
//  *All apis and backend work of the app is in this file
//  *
//  *
//  */

// import axios from "axios";
// // import { baseUrl } from "../helpers/Config";
// // import { apiEndPoints } from "../helpers/Config";

// import auth from "@react-native-firebase/auth";

// const SignUpUser = async (body) => {
//   const { email, password, name, role, imageUrl } = body;
//   console.log(body);
//   try {
//     //   Checking if the api get all valid information
//     if (!(email && password && role && name)) {
//       return {
//         success: false,
//         message: "Please Send All Params ",
//         data: [],
//       };
//     }
//     const res = await auth().createUserWithEmailAndPassword(email, password);
//     const { user } = res;

//     const body = {
//       uid: user.uid,
//       email,
//       role,
//       name,
//       imageUrl: "",
//     };

//     const url = baseUrl + apiEndPoints.USER.CREATE_USER;
//     return axios
//       .post(url, body)
//       .then((response) => {
//         const { success, message, res } = response.data;

//         return {
//           success,
//           message,
//           data: res,
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
//     if (error.code === "auth/email-already-in-use") {
//       console.log("That email address is already in use!");
//       return {
//         success: false,
//         message: "Email is already in use",
//         data: [],
//       };
//     }

//     if (error.code === "auth/invalid-email") {
//       console.log("That email address is invalid!");
//       return {
//         success: false,
//         message: "Email address is invalid!",
//         data: [],
//       };
//     }
//     if (error.code === "auth/weak-password") {
//       console.log("Password is Week!");
//       return {
//         success: false,
//         message: "Weak Password! Use Strong Password",
//         data: [],
//       };
//     }

//     console.error(error);
//     return {
//       success: false,
//       message: error.message,
//       data: [],
//     };
//   }
// };

// const SignInUser = async (body) => {
//   const { email, password, role } = body;
//   console.log(body);
//   try {
//     //   Checking if the api get all valid information
//     if (!(email && password && role)) {
//       return {
//         success: false,
//         message: "Please Send All Params ",
//         data: [],
//       };
//     }
//     const res = await auth().signInWithEmailAndPassword(email, password);
//     const { user } = res;

//     const url =
//       baseUrl + apiEndPoints.USER.GET_USER_DETAILS + role + "/" + user.uid;
//     return axios
//       .get(url)
//       .then((response) => {
//         const { success, message, res } = response.data;
//         return {
//           success,
//           message,
//           data: res,
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

// export { SignUpUser, SignInUser };
