import Http from "@/utils/Http";

import { user, menu, incompleteUser, availableBalance, termsAndConditions, privacyPolicies } from "./data"

export const login = async <T>(payload: T) => {  
  return new Promise((resolve, reject) => {
    setTimeout(()=> {      
      return resolve({    
        status: 200,
        data: {
          message: "OK",    
          data: "xyz789"
        }
      })
    },1000)
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    const token = ''
    setTimeout(()=> {
      console.log('token:', token)
      return resolve(token)
    },1000)
  })
     
}

export const forgotPassword = async <T>(payload: T) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/forgot-password", payload);
}
    
export const getAuthUser = () => {  
  // return new Promise( (resolve, reject) => setTimeout(resolve, 1000, user ));
  return new Promise( (resolve, reject) => setTimeout(resolve, 1000, incompleteUser ));
}

export const resetPassword = async <T>(payload: T) => {
  await Http.get("/sanctum/csrf-cookie");
  return Http.post("/reset-password", payload);
}

export const updatePassword = <T>(payload: T) => {
  return Http.put("/user/password", payload);
}

export const registerUser = async <T>(payload: T) => {
  return new Promise((resolve, reject) => {
    // const mockToken = 'xyz789'
    setTimeout(()=> {
      //console.log('mockToken:', mockToken)
      //return resolve(mockToken) TODO
      return resolve('')
    },1000)
  })
}

export const sendVerification = <T>(payload: T) => {
  return Http.post("/email/verification-notification", payload);
}

export const updateUser = <T>(payload: T) => {
  return Http.put("/user/profile-information", payload);
}

export const getAuthMenu = () => {
  return new Promise((resolve, reject) => setTimeout(resolve, 1000, menu ));  
}

export const getAvailableBalance = () => {
  return new Promise((resolve, reject) => setTimeout(resolve, 1000, availableBalance ));  
}

export const getTermsAndConditions = () => {  
  return new Promise((resolve, reject) => setTimeout(resolve, 1000, termsAndConditions ));  
}

export const getPrivacyPolicies = () => {  
  return new Promise((resolve, reject) => setTimeout(resolve, 1000, privacyPolicies ));  
}
