export interface IUser {
  fullName: string;
  email: string;
  password: string;
  residencyInfo: {
    phone: string;
    address: string;
    country: string;
  };
  bvn: boolean;
}
