import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  ContactContainer,
  ContactContent,
  ContactHeader,
  ContactItem,
  ContactSubTitle,
  ContactTitle,
} from './styles';
import { IoMail } from 'react-icons/io5';

const Contact = () => {
  const handleRedirect = () => {
    window.open('https://www.linkedin.com/in/bruna-yumi-nagahashi/', '_blank');
  };
  const handleRedirectGithub = () => {
    window.open('https://github.com/bryumi', '_blank');
  };
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle color="primary">Contato</ContactTitle>
        <ContactSubTitle>e-mail, linkedin, github</ContactSubTitle>
      </ContactHeader>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <ContactContent>
          <ContactItem>
            <button onClick={handleRedirect}>
              <FaLinkedin size={32} />
            </button>
            <ContactTitle color="text" fontSize="1.5rem">
              Linkedin
            </ContactTitle>
          </ContactItem>
        </ContactContent>
        <ContactContent>
          <ContactItem>
            <IoMail size={32} />
            <ContactTitle color="text" fontSize="1.5rem">
              bruna.nagahashi@gmail.com
            </ContactTitle>
          </ContactItem>
        </ContactContent>
        <ContactContent>
          <ContactItem>
            <button onClick={handleRedirectGithub}>
              <FaGithub size={32} />
            </button>
            <ContactTitle color="text" fontSize="1.5rem">
              Github
            </ContactTitle>
          </ContactItem>
        </ContactContent>
        <ContactContent>
          <ContactItem>
            <a href="/cv-bruna-nagahashi.pdf" download="cv-bruna-nagahashi.pdf">
              <FaFileDownload size={32} />
            </a>
            <ContactTitle color="text" fontSize="1.5rem">
              Download CV
            </ContactTitle>
          </ContactItem>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};

export default Contact;
