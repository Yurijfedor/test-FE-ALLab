import React from "react";
import { Contact } from "../../redux/contactsSlice";
import { ImgStyled } from "./contactForm.styled";
import { ImLocation } from "react-icons/im";

interface IProps {
  jobInfo: Contact;
}

export const JobItem: React.FC<IProps> = ({
  jobInfo: { name, phone, id, pictures, title, address },
}) => {
  return (
    <div>
      <ImgStyled src={pictures[0]} alt={name} />
      <div>
        <h3>{title}</h3>
        <p>{`Department name/address - ${address} `}</p>
        <ImLocation />
        <p></p>
      </div>
      {name}: {phone}
    </div>
  );
};
