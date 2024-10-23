/* eslint-disable react/prop-types */
import './layout.css';

const Layout = props => {
  return (
    <div className="layout">
      <nav className="layout_nav">this is the nav</nav>
      {props.children}
      <footer className="layout_footer">
        &copy; React Bootkamp {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;