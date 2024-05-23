import * as yup from "yup";

export const loginSchema = yup.object().shape({
  // userName: yup.string().required("UserName is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is Required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("UserName is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 character"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is Required"),
  gender: yup.string().required("Gender is required"),
  role: yup.string().required("Role is required"),
});

export const forgotPasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 character"),
  newPassword: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 character"),
});
