

export class LoginRequest {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class User {
  id: number;
  email: string;
  // role_id:number;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
    // this.role_id=role_id;
  }
}

export class LoginResponse {
  message: string;
  user: User;
  token: string;

  constructor(message: string, user: User, token: string) {
    this.message = message;
    this.user = user;
    this.token = token;
  }
}


