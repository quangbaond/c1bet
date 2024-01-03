export interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
  balance: number;
}

export interface ILoginParams {
  email: string;
  password: string;
  remember: boolean;
}
