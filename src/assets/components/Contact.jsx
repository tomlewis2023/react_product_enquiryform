import React, { useState } from "react";
import { Form } from "react-router-dom";

const ProductInquiry = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
//   const actionData = useActionData();

  const validateForm = (formData) => {
    const { fname, email, message } = formData;
    return fname && email && message;
  };

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = {
      fname: form.fname.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    if (validateForm(formData)) {
      setFormSubmitted(true);
      setFormData(formData);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <Form method="post" onSubmit={handleFormSubmission}>
          <h1>Product Inquiry Form</h1>
          <div className="mb-3">
            <label htmlFor="InputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="fname"
              className="form-control"
              id="InputName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputMessage" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="exampleInputMessage"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      ) : (
        <div>
          <h2>Thank You for Your Inquiry!</h2>
          <p>Here are the details you submitted:</p>
          <p><strong>Name:</strong> {formData.fname}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </div>
      )}

      
    </>
  );
};



export default ProductInquiry;

export const inquiryAction = async ({ request }) => {
    const formData = await request.formData();
    const submission = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  
    // console.log("Product Inquiry Submission:", submission);
  
    
    return null;
  };
  
