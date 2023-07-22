import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
// import AboutMe from './pages/AboutMe';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    
    //checking current page and renderring page depends on it
    // const renderPage = () => {
    //     if (currentPage === 'AboutMe') {
    //       return <AboutMe />;
    //     }
    //     if (currentPage === 'Contact') {
    //       return <Contact />;
    //     }
    //     if (currentPage === 'Portfolio') {
    //       return <Portfolio />;
    //     }
    //     return <Resume />;
    //   };

      const handlePageChange = (page) => setCurrentPage(page);

      return (
        <div>
          {/* We are passing the currentPage from state and the function to update it */}
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
          {/* {renderPage()} */}
          <Navigation currentPage={currentPage} />
          <Footer />
        </div>
      );
    
}    
  


