export enum UserKycStatus {
  NotSet = 0,
  Init = 1,
  Pending = 2,
  Approved = 3,
  Rejected = 4,
  Suspended = 5,
  Completed = 6,
}

export interface IKyc {
  active: boolean;
  firstName: string;
  id: string;
  image: string;
  kycStatus: number;
  lastName: string;
  userId: string
}

export interface IRoom {
  active: boolean;
  capacity: number;
  id: string;
  index: string;
  modifier: string;
  name: string;
  realm: number;
  type: string;
  userId: string;
}