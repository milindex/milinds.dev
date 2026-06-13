import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Let's work together & make something awesome | Milind Sonawane",
  description:
    "Get in touch with me to discuss your project. I'm available for freelance work.",
};

const Contact = () => <ContactForm />;

export default Contact;
