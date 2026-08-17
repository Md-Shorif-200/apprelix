export type UserRoleType = "buyer" | "supplier" | "admin";

export interface RoleDetailsType {
  factoryName: string;
  productionCapacity: string;
  yearEstablished: string;
  numberOfEmployees: string;
  productCategories: string[];
  factoryLocation: string;
}

export interface CompanyInfoType {
  companyName: string;
  companyWebsite: string;
  companyLogo: {
    url: string;
    publicId: string;
  };
  streetAddress: string;
  location: {
    countryCode: string;
    countryName: string;
    stateCode: string;
    stateName: string;
    city: string;
  };
}

export type RejectionReasonType = {
  reasonCategory: string;
  reasonDetails?: string;
  rejectedAt: string; 
  rejectedBy: string; 
};



export interface UserType {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRoleType;
  companyInfo: CompanyInfoType;
  profilePhoto?: {
    url: string;
    publicId: string;
  };
  roleDetails?: RoleDetailsType;
  status: "pending" | "accepted" | "rejected" | "blocked";
  rejection_reason?: RejectionReasonType[];
  rfqsCreatedCount?: number;
  quotesSubmittedCount?: number;
  createdAt: string;
  updatedAt: string;
}

// users.types.ts
export type Update_UserProfile_Payload_Type = {
  fullName?: string;
  email?: string;
  phone?: string;
  country?: string;
  city?: string;
  profilePhoto?: {
    url: string;
    publicId: string;
  };
  companyInfo?: {
    companyName?: string;
    companyWebsite?: string;
    companyLogo?: {
      url: string;
      publicId: string;
    };
    streetAddress?: string;
    location?: {
      countryCode: string;
      countryName: string;
      stateCode: string;
      stateName: string;
      city: string;
    };
  };
  roleDetails?: RoleDetailsType;
  [key: string]: unknown;
};

export function getUserDisplayName(user: Pick<UserType, "fullName">): string {
  return `${user.fullName}`.trim();
}

export interface Users_Response_Type {
  success: boolean;
  message: string;
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: UserType[];
  };
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

export type UserTableActionResponseType = {
  success: boolean;
  message: string;
  data?: UserType;
};
