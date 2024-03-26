import css from "./ContactList.module.css";
import Contact from "../contacts/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
}
