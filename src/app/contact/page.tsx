import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Milind Sonawane',
  description:
    "Get in touch with Milind Sonawane for freelance projects, consulting engagements, or senior engineering opportunities.",
};

const Contact = () => <ContactForm />;

export default Contact;
