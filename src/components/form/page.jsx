"use client"
import { useFormik } from "formik";
import styles from "@/components/form/form.module.css"
import Button from"@/common/button/button3"
import { ContactFormSchemas } from "@/components/schemas/page"
const Contactform = () => {
  const initialValue = {
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    checkbox: false,
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: ContactFormSchemas,
    onSubmit: (value, action) => {
      action.resetForm();
      console.log("value", value);
    },
  });
  console.log(values);
  return (
    <div className={styles.contact_form}>
    <h1 className={styles.contact_form_title}>Contact Us</h1>
      <div className={styles.contact_form_wrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="fullName">Name</label>
            <input
              type="name"
              name="fullName"
              onChange={handleChange}
              value={values.fullName}
              placeholder="Rahul Soni"
            />
            {touched.fullName && errors.fullName && (
              <p className={styles.error}>{errors.fullName}</p>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="rahulsoni@humbeestudio.com"
            />
            {touched.email && errors.email && (
              <p className={styles.error}>{errors.email}</p>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              placeholder="+91 8140X XXXXX"
            />
            {touched.phone && errors.phone && (
              <p className={styles.error}>{errors.phone}</p>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              onChange={handleChange}
              value={values.message}
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," 
            />
            {touched.message && errors.message && (
              <p className={styles.error}>{errors.message}</p>
            )}
          </div>
          <div className={styles.field}>
            <div className={styles.common_button_outer2}>
            <Button  btn_text="Send Message"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contactform;