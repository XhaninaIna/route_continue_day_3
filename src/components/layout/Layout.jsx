/* eslint-disable react/prop-types */
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import './layout.css';

const Layout = props => {
  return (
    <div className="layout">
      {/* Navbar */}
      <Nav />
      {props.children}
      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Layout;