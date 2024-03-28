import css from "./ContactList.module.css";
import Contact from "../contacts/Contact";
import { useSelector } from "react-redux";
import { visibleContact } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(visibleContact);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
