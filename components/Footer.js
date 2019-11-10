const footerStyle = {
  height: 100,
  color: 'yellow',
  background: 'yellow',
  marginTop: '100vh',
};

const Footer = () => (
  <div style={footerStyle}>
    <p>ASDF ASDF ASF</p>
    <style jsx>{`
      p {
        color: black;
        margin: 0 auto;
        width: 200px;
      }
    `}</style>
  </div>
);

export default Footer;
