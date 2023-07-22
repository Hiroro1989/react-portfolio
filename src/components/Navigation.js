import React from "react";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Navigation({currentPage}){
   // checking current page and renderring page depends on it
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <Resume />;
      };

      return(
        <div>
            {renderPage(currentPage)}
        </div>
      )
}