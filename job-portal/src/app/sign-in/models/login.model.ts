export class SignInRequest {
  email: string = '';
  password: string = '';
}

export class User {
  id: number = 0;
  email: string = '';
  role_id: string = '0';
}

export class SignInResponse {
  message: string = '';
  token: string = '';
  user: User = new User();
}
