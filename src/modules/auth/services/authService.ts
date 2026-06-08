import axiosRequest from "@/lib/api/axiosRequest";
import { RegisterUserData } from "../schema/auth.schema";
import { LOGINPAYLOAD, LoginResponse } from "../types/auth.types";

export const registerUser = async (payload:RegisterUserData) => {
  return axiosRequest({
    method: "POST",
    url: "/api/v1/auth/register",
    data: payload,
  });
};



export const loginUser = async(payload:LOGINPAYLOAD) => {
  const res = await axiosRequest<LoginResponse>({
    method: "POST",
    url: "/api/v1/auth/login",
    data: payload,
  })

  return res.data

}