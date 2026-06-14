import axiosRequest from "@/lib/api/axiosRequest"
import { UsersResponse, User } from "../types/users.types"


export const getAllUsers = () => {
  return axiosRequest<UsersResponse>({
    method: "GET",
    url: "/api/v1/users/",
  });
};



// get single user
export const getSingleUser = (userId: string) => {
  type SingleUserResponse = {
    success: boolean;
    data: User;
  }

  return axiosRequest<SingleUserResponse>({
    method: "GET",
    url: `/api/v1/users/${userId}`,
  });
};