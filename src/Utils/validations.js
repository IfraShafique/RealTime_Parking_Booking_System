import { toast } from "react-toastify";

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
    const contactRegex = /^\d{11}$/;
    
    if(!contactRegex.test(contact)){
        toast.error('Contact no should be exactly 11 characters', {
            position: toast.POSITION.TOP_CENTER,
          });
    }
    return false;
}

// password validation
export const passwordValidation = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&!?])[A-Za-z\d@#$%&!?]+$/;
    if(!passwordRegex.test(password)){
        toast.error('Password should contain at least one letter, one number, and one special character', {
            position: toast.POSITION.TOP_CENTER,
    });
}
    return false;
}