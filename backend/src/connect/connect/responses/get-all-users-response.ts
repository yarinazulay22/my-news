import { User } from "../connect.entity";

export class GetAllUsersResponse {
  id: number;
  userName: string;
  email: string;
  constructor(user:User){
    this.id = user.id;
    this.userName = user.userName;
    this.email = user.email;
  }
}
