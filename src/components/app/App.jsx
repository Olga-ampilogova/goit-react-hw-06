import ContactForm from "../contactform/ContactForm";
import ContactList from "../contactlist/ContactList";
import Contact from "../contacts/Contact";
import SearchBox from "../searchbox/SearchBox";

export default function App() {
  return (
    <>
      <ContactForm />
      <ContactList />
      <Contact />
      <SearchBox />
    </>
  );
}
