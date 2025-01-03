import React, { useState } from 'react';
import SideNav from './components/SideNav/SideNav';
import Formation from './components/Formation/Formation';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import { Container } from './styles';
import { motion } from 'framer-motion';
import Contact from './components/Contact/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const handlePageChange = (page: string) => setCurrentPage(page);
  return (
    <Container currentPage={currentPage}>
      {currentPage === 'home' ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <ToggleButton />
          <Home onPageChange={handlePageChange} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <SideNav currentPage={currentPage} onPageChange={handlePageChange} />
          <ToggleButton />
        </motion.div>
      )}
      {currentPage === 'Formação' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Formation />
        </motion.div>
      )}
      {currentPage === 'Experiência' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Experience />
        </motion.div>
      )}
      {currentPage === 'Habilidades' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Skills />
        </motion.div>
      )}
      {currentPage === 'Contato' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
      )}
    </Container>
  );
}

export default App;
