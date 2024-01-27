import { toast } from "react-toastify";

// globally create the regex for contact and password validation
export const contactRegex = /^\d{11}$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&!?])[A-Za-z\d@#$%&!?]+$/;

// No field should be empty
export const valdateEmptyFields = (formData) => {
    if (Object.values(formData).some(value => value === '')) {
        toast.error('Please fill all the fields', {
          position: toast.POSITION.TOP_CENTER,
        });
        return false;
}
    return true;
}

// contact validation
export const contactValidation = (contact) => {    
    if(!contactRegex.test(contact)){
        toast.error('Contact no should be exactly 11 characters', {
            position: toast.POSITION.TOP_CENTER,
          });
    }
    return false;
}

// password validation
export const passwordValidation = (password) => {
    if(!passwordRegex.test(password)){
        toast.error('Password should contain at least one letter, one number, and one special character', {
            position: toast.POSITION.TOP_CENTER,
    });
}
    return false;
}