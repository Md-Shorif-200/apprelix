export type UserRole = "buyer" | "supplier" | "admin";

export interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  companyName: string;
  companyWebsite: string;
  country: string;
  city: string;
  companyAddress: string;
  createdAt: string;
  updatedAt: string;
  profilePhoto?: string;
  profileCompleted?: boolean;
  adminApproved?: boolean;
  company_logo?: string;
  status: "pending" | "accepted" | "rejected" | "blocked";
}

export type UpdateUserProfilePayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  city?: string;
  profilePhoto?: string;
  [key: string]: unknown;
};

export function getUserDisplayName(
  user: Pick<User, "fullName">,
): string {
  return `${user.fullName}`.trim();
}

export interface UsersResponse {
  success: boolean;
  data: User[];
}


 export type SingleUserResponse = {
    success: boolean;
    data: User;
  };



  export type UpdateUserProfileResponse = {
  success: boolean;
  message: string;
  data?: UpdateUserProfilePayload;
};