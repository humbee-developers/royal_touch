import * as Yup from "yup";
export const ContactFormSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  message: Yup.string().required("Message is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});