// install axios first and then remove all the comments 

// import axios from "axios";


// add base url in env
// axios.defaults.baseURL = process.env.API_BASE_URL;


// ==================================================================================d

// for request
// axios.interceptors.request.use(async function (config) {
//   if (config?.headers) {
//     const accessToken = localStorage.getItem("access_token");
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     config.headers.Accept = "application/json";
//   }
//   return config;
// },
//   (error) => {
//     // Handle Request erros
//     return Promise.reject(error)
//   }
// );

// =================================================================================
// for response 

// axios.interceptors.response.use(
//   (response) => {
//     // Modify the response data here
//     return response;
//   },
//   (error) => {
//     // Handle response errors here
//     return Promise.reject(error);
//   }
// );


// ===================================================================================
// for the usage of refresh token 

// async function refresToken (){
//   make aa api call here and return refresh token
//   return "new access token"
// }

// axios.interceptors.response.use(
//     (response) => {
//       // Modify the response data here
//       return response;
//     },
//     async (error) => {
//       if(error.response && error.response.status === 401){
//         try {
//           const newToken = await refresToken()
//           axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

//           const originalRequest = error.config
//           originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

//           return axios(originalRequest)
//         } catch (refreshError) {
//           return Promise.reject(refreshError)
//         }
//       }
//       // Handle response errors here
//       return Promise.reject(error);
//     }
//   );

// ================================================================================


// export default axios;