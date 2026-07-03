import { RoleDetailsType } from "@/modules/users/types/users.types";

export type LOGINPAYLOAD = {
  email: string;
  password: string;
};

export type AuthUserType = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  profilePhoto?: { url?: string };
  password: string;
  role: "buyer" | "supplier" | "admin";
  companyName: string;
  companyWebsite: string;
  country: string;
  city: string;
  companyAddress: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type LoginResponse = {
  success: true;
  message: string;
  data: AuthUserType;
};

export interface CompanyLocationType {
  countryCode: string;
  countryName: string;
  stateCode: string;
  stateName: string;
  city: string;
}

export interface RegisterPayloadType {
  fullName: string;
  email: string;
  phone: string;
  password: string;

  companyInfo: {
    companyName: string;
    companyWebsite: string;
    location: CompanyLocationType;
    streetAddress: string;
  };
  role: string;
  roleDetails?: RoleDetailsType;
}
