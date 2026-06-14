export type UserRole = "buyer" | "supplier" | "admin";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
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
  profile_img?: string;
  profileCompleted?: boolean;
  adminApproved?: boolean;
  company_logo?: string;
}

export function getUserDisplayName(
  user: Pick<User, "firstName" | "lastName">
): string {
  return `${user.firstName} ${user.lastName}`.trim();
}

export interface UsersResponse {
  success: boolean;
  data: User[];
}