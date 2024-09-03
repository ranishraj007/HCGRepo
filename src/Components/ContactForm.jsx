import React, { useState } from "react";

const ContactForm = () => {
  const initialValues = {
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Subject: "",
    Message: "",
    TermsAccepted: false, // Added for the checkbox
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formValues);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.FirstName) {
      errors.FirstName = "First Name is required";
    }

    if (!data.Email) {
      errors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.Email)) {
      errors.Email = "Email is invalid";
    }

    if (!data.LastName) {
      errors.LastName = "Last Name is required";
    }

    if (!data.TermsAccepted) {
      errors.TermsAccepted = "You must accept the Terms";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-1/2">
      <ul className="flex flex-col gap-[24px] flex-wrap">
        <li>
          <h1 className="text-green-900 text-[16px]">First name</h1>
          <input
            type="text"
            className="border border-green-900 w-full h-[48px]"
            name="FirstName"
            value={formValues.FirstName}
            onChange={handleOnChange}
          />
          <span>{errors.FirstName}</span>
        </li>
        <li>
          <h1 className="text-green-900 text-[16px]">Last name</h1>
          <input
            type="text"
            className="border border-green-900 w-full h-[48px]"
            name="LastName"
            value={formValues.LastName}
            onChange={handleOnChange}
          />
          <span>{errors.LastName}</span>
        </li>
        <li>
          <h1 className="text-green-900 text-[16px]">Email</h1>
          <input
            type="email"
            className="border border-green-900 w-full h-[48px] max-w-[372px]"
            name="Email"
            value={formValues.Email}
            onChange={handleOnChange}
          />
          <span>{errors.Email}</span>
        </li>
        <li>
          <h1 className="text-green-900 text-[16px]">Phone number</h1>
          <input
            type="text"
            className="border border-green-900 w-full h-[48px] max-w-[372px]"
            name="PhoneNumber"
            value={formValues.PhoneNumber}
            onChange={handleOnChange}
          />
        </li>
        <li>
          <h1 className="text-green-900 text-[16px]">Choose a topic</h1>
          <select
            name="Subject"
            className="border border-green-900 w-full h-[48px]"
            value={formValues.Subject}
            onChange={handleOnChange}
          >
            <option value="">Select a topic</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </li>
        <li>
          <h1 className="text-green-900 text-[16px]">Message</h1>
          <textarea
            className="border border-green-900 w-full min-h-[180px]"
            name="Message"
            value={formValues.Message}
            onChange={handleOnChange}
          />
        </li>
        <li className="flex gap-3 items-center justify-center">
          <input
            type="checkbox"
            name="TermsAccepted"
            checked={formValues.TermsAccepted}
            onChange={handleOnChange}
          />
          <h3>I accept the Terms</h3>
          <span>{errors.TermsAccepted}</span>
        </li>
        <li className="flex justify-center">
          <button
            type="submit"
            className="h-[48px] w-[131px] border bg-green-900 text-white"
          >
            Submit
          </button>
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
