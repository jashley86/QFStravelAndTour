import React from "react";
import { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import serviceVector from "../../assets/svg/serVector.svg";
import Instagram from "../../assets/svg/In.svg";
import Fb from "../../assets/svg/Facebook.png";
import Twitter from "../../assets/svg/tw.svg";
import call from "../../assets/svg/call.png";
import email from "../../assets/svg/email.png";
import user from "../../assets/svg/user.png";

import {
  ContactsContainer, 
  ContactsCon,
  ContactsDetails,
  ContactsForm,
  ContactsInfo,
  Details,
  SocialCon,
  Modal,
  ModalSuccess
} from "./Contacts.styled";

export default function Contacts() {
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_iqwk80e",
        "template_ceut9jl",
        form.current,
        "PnY8MZtMKSQFZLgC1"
      )
      .then(
        (result) => {
          console.log(result.text);
          
          setSuccess(!success)
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset()
  };
  return (
    <ContactsContainer>
      <img src={serviceVector} />
      <h1>Get In Touch</h1>
      <ContactsCon>
        <div className="top">
          <h1>Let's Talk</h1>
          <p>
            Do you have questions about our services, or want to book a tour
            package or study abroad program?
          </p>
        </div>
        <ContactsInfo>
          <ContactsForm>
            <h2>General Inquiries</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">
                <img src={user} />
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                />
                <span>*</span>
              </label>
              <label htmlFor="email">
                <img src={email} />
                <input
                  type="email"
                  placeholder="Email address"
                  name="user_email"
                  required
                />
                <span>*</span>
              </label>
              <label htmlFor="phone number">
                <img src={call} />
                <input
                  type="number"
                  placeholder="Phone number"
                  name="user_number"
                  required
                />
                <span>*</span>
              </label> 
              <textarea placeholder="Message" cols="30" rows="7"></textarea>
              <button>Let's Talk</button>
            </form>
          </ContactsForm>
          <ContactsDetails>
            <Details>
              <h3>Accra Office Address </h3>
              <p>C02 Manyo Close, Adabraka</p>
              <div>
                <img src={call} />
                <a href="tel:0554791207">0554791207</a>/
                <a href="tel:0533695188"> 0533695188</a>
              </div>
              <div>
                <img src={email} />
                <a href="mailto:admin@qfstravelandtourgh.com">
                  admin@qfstravelandtourgh.com
                </a>
              </div>
            </Details>
            <Details>
              <h3>Sunyani Office Address </h3>
              <p>Adjacent Fidelity Bank, off VRA Road</p>
              <div>
                <img src={call} />
                <a href="tel:0244967595">0244967595</a>
              </div>
              <div>
                <img src={email} />
                <a href="mailto:admin@qfstravelandtourgh.com">
                  admin@qfstravelandtourgh.com
                </a>
              </div>
            </Details>
            <Details>
              <h3>Social</h3>
              <SocialCon>
                <img src={Fb} />
                <img src={Instagram} />
                <img src={Twitter} />
              </SocialCon>
            </Details>
          </ContactsDetails>
        </ContactsInfo>
      </ContactsCon>
      {success && (
        <Modal>
          <ModalSuccess>
            <h1>Message sent succesfully</h1>
            <button onClick={() => setSuccess(!success)} >
              Done
            </button>
          </ModalSuccess>
        </Modal>
      )}
    </ContactsContainer>
  );
}
