
export type LOGINPAYLOAD = {
    email: string;
    password: string;
}

export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
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
}

export type LoginResponse = {
    success: true;
    message: string;
    data: User;
}

