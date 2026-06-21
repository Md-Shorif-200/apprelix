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

  location: {
    country: string; 
    state: string;   
    city: string;
  };
  companyLogo?: FileList;
  streetAddress: string;
};
