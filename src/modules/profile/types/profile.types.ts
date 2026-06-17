// update profile form
export type ProfileFormValues = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  profilePhoto?: FileList;
};

// company information form
export type Company_Information_FormValues_Type = {
  id: string;
  companyName: string;
  companyWebsite: string;
  country: string;
  city: string;
  companyLogo?: FileList;
  companyAddress: string;
};
