export type UserRoleType = "buyer" | "supplier" | "admin";

export interface RoleDetailsType {
  factoryName: string;
  productionCapacity: string;
  yearEstablished: string;
  numberOfEmployees: string;
  productCategories: string[];
  factoryLocation: string;
}

export interface UserType {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRoleType;
  companyName: string;
  companyWebsite: string;
  country: string;
  city: string;
  companyAddress: string;
  createdAt: string;
  updatedAt: string;
  profilePhoto: string;
  companyLogo: string;
  adminApproved?: boolean;
  company_logo?: string;
  roleDetails?: RoleDetailsType;
  status: "pending" | "accepted" | "rejected" | "blocked";
}

export type Update_UserProfile_Payload_Type = {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  city?: string;
  profilePhoto?: string;
  companyName?: string;
  companyWebsite?: string;
  companyLogo?: string;
  companyAddress?: string;
  roleDetails?: RoleDetailsType;
  [key: string]: unknown;
};

export function getUserDisplayName(user: Pick<UserType, "fullName">): string {
  return `${user.fullName}`.trim();
}

export interface Users_Response_Type {
  success: boolean;
  data: UserType[];
}

export type Single_User_Response_Type = {
  success: boolean;
  data: UserType;
};

export type Update_UserProfile_Response_Type = {
  success: boolean;
  message: string;
  data?: Update_UserProfile_Payload_Type;
};
