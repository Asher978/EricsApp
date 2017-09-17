class Auth {
    // Source - https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt
    static authenticateToken(token, admin) {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('admin', admin);      
    }
  
    static isUserAuthenticated() {
      return sessionStorage.getItem('token') !== null;
    }

    static isUserAdmin() {
       if (sessionStorage.getItem('admin') !== null) {
         return sessionStorage.getItem('admin')
       } else {
         return false
       }
    }
  
    static deauthenticateUser() {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('admin');      
    }
  
    static getToken() {
      return sessionStorage.getItem('token');
    }

    static getAdmin() {
      return sessionStorage.getItem('admin');
    }
  
  }
  
  export default Auth;