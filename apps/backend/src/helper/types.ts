export interface IRegsitrationRequestParams {
  name: string;
  display_name: string;
  email: string;
  password: string;
  contact_no: string;
  created_at?: string;
  active?: boolean;
}

export interface ILoginRequestParams {
  email: string;
  password: string;
}

export interface IUserObject {
  id: string;
  display_name: string;
  email: string;
  contact_no: string;
  created_at: string;
  active: boolean;
}

export interface IUserObjectDB extends IUserObject {
  password: string;
}

export interface ISendFriendRequestParams {
  user_id: string;
}

export interface IAcceptRequestParams {
  request_id: string;
  requested_by_user_id: string
}

export interface IRejectRequestParams {
  request_id: string;
}

export enum InvitationStatus {
  accepted = "ACCEPTED",
  rejected = "REJECTED",
  pending = "PENDING"
}