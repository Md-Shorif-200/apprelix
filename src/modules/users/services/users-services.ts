import axiosRequest from "@/lib/api/axiosRequest";
import {
  Single_User_Response_Type,
  Update_UserProfile_Payload_Type,
  Update_UserProfile_Response_Type,
  Users_Response_Type,
} from "../types/users.types";

export const getAllUsers = () => {
  return axiosRequest<Users_Response_Type>({
    method: "GET",
    url: "/api/v1/users/",
  });
};

// get single user
export const getSingleUser = (userId: string) => {
  return axiosRequest<Single_User_Response_Type>({
    method: "GET",
    url: `/api/v1/users/${userId}`,
  });
};

// update user profile data
export const updateUserProfileData = (
  userId: string,
  payload: Update_UserProfile_Payload_Type,
) => {
  return axiosRequest<Update_UserProfile_Response_Type>({
    method: "PATCH",
    url: `/api/v1/users/${userId}`,
    data: payload,
  });
};
