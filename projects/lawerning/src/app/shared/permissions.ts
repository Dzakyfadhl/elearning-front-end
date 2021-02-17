export class Permissions {
  canActivate(token: string, role: string, route: string): boolean {
    if (token === null) {
      if (route === 'login') {
        return true;
      } else if (route == 'register') {
        return true;
      } else if (route === '') {
        return true;
      } else {
        return false;
      }
    } else {
      if (route === 'student') {
        if (role === 'Student') {
          return true;
        } else {
          return false;
        }
      } else if (route === 'teacher') {
        if (role === 'Teacher') {
          return true;
        } else {
          return false;
        }
      } else if (route === 'admin') {
        if (role === 'Admin') {
          return true;
        } else {
          return false;
        }
      } else if (route == 'login') {
        return false;
      } else if (route == 'register') {
        return false;
      } else {
        return true;
      }
    }
  }
}
