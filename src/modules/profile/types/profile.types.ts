// update profile form
export type ProfileFormValues = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  profilePhoto?: {       
    url: string;
    publicId: string;
  };
  newProfilePhoto?: FileList; 

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
  companyLogo?: {
    url : string;
    publicId : string;
  };
  companyNewLogo?: FileList;
  streetAddress: string;
};
