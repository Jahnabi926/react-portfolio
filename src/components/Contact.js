import React, { useState } from "react";
import "aos/dist/aos.css";
import styled from "styled-components";
import emailjs from "emailjs-com";
import useAOS from "../hooks/useAOS";

const ContactSection = styled.section`
  padding: 80px 0;
  background-color: #f5f5f5;
  text-align: center;
`;
const Heading = styled.h2`
  margin-bottom: 40px;
  font-size: 2.2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const InputBase = styled.input`
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
  }
`;

const Input = styled(InputBase).attrs({ as: "input" })``;

const TextArea = styled(InputBase).attrs({ as: "textarea" })`
  resize: none;
`;

const Button = styled.button`
  padding: 12px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.02);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
  }
`;

const Message = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 20px;
  color: ${(props) => (props.success ? "green" : "red")};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useAOS();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f3u7mom",
        "template_yvrxkm8",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "rPGdSvWONIAR19Y3W"
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setIsSubmitted(true);
          setErrorMessage("");
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error:", error);
          setIsSubmitted(false);
          setErrorMessage("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <ContactSection id="contact" data-aos="fade-up">
      <Heading>Contact Me</Heading>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <TextArea
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></TextArea>
        <Button type="submit">Send Message</Button>
        {isSubmitted && <Message success="true">{successMessage}</Message>}
        {!isSubmitted && <Message>{errorMessage}</Message>}{" "}
      </Form>
    </ContactSection>
  );
};

export default Contact;
