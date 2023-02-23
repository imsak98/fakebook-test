export interface IRegsitrationRequestParams {
  name: string;
  display_name: string;
  email: string;
  password: string;
  contact_no: string;
  created_at?: string;
  active?: boolean;
}

export interface IUserObject {
  id: string;
  display_name: string;
  email: string;
  contact_no: string;
  created_at: string;
  active: boolean;
}