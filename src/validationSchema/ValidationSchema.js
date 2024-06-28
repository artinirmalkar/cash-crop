
import * as Yup from "yup";
export const loginValidationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
});

// Validation schema for register page
export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  phone: Yup.string().required("Phone number is required"),
  referralCode: Yup.string().required("Referral Code is required"),
  address: Yup.string().required("Address is required"),
  store: Yup.string().required("Store is required"),
});

export const createOrderSchem= Yup.object().shape({
  firstName:Yup.string().required('First Name is required'),
  lastName:Yup.string().required('Last Name is required'),
  email:Yup.string().required('Email is required'),
  phone:Yup.string().required('Phone is required'),
  address:Yup.string().required('Address is required'),
  price:Yup.string().required('Price is required'),
  vehical:Yup.string().required('Vehical is required'),
})

export const offerScheme = Yup.object().shape({
  promoCode: Yup.string().required('Promo code is required'),
  description: Yup.string().required('Description is required'),
})