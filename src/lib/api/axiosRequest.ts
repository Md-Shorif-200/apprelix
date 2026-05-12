// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// function formatApiError(error: AxiosError): string {
//   const fallbackMessage = "An unexpected error occurred. Please try again.";

//   if (error.response && error.response.data) {
//     const errorData = error.response.data as Record<string, unknown>;

//     if (typeof errorData.errors === "string") {
//       return errorData.errors;
//     }

//     if (typeof errorData.detail === "string") {
//       return errorData.detail;
//     }
//     if (Array.isArray(errorData.detail) && errorData.detail.length) {
//       return errorData.detail.join(" ");
//     }
//     if (typeof errorData.message === "string") {
//       return errorData.message;
//     }

//     if (typeof errorData.errors === "object" && errorData.errors !== null) {
//       const messages = Object.values(errorData.errors).flat();
//       if (messages.length > 0) {
//         return messages.join(" ");
//       }
//     }

//     return fallbackMessage;
//   }

//   if (error.request) {
//     return "Could not connect to the server. Please check your network.";
//   }

//   return error.message || fallbackMessage;
// }

// const axiosRequest = async (options: AxiosRequestConfig) => {
//   const onSuccess = (response: AxiosResponse) => {
//     return response.data;
//   };

//   const onError = (error: AxiosError) => {

//     const errorMessage = formatApiError(error);
//     throw new Error(errorMessage);
//   };

//   return axios(options).then(onSuccess).catch(onError);
// };

// export default axiosRequest;