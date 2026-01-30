import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} SHREEHARSHA N. All rights reserved.</p>
      <p style={{ marginTop: '10px', opacity: '0.8' }}>
        Designed & Built with ❤️ using React.js
      </p>
      <div style={{ marginTop: '20px' }}>
        <a href="https://github.com" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>GitHub</a>
        <a href="https://linkedin.com" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>LinkedIn</a>
        <a href="https://twitter.com" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
