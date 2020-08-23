
export default class AuthService { 
  login = () => {
    window.localStorage.setItem("auth", "true");
  };
  
  isAuthenticated = () => {
    return (window.localStorage.getItem("auth") ?  true : false) 
  };
  
  logout = () => {
    if (window.localStorage.getItem("auth") != null) {
      window.localStorage.removeItem("auth");
    }
  };
  
}