// import Footer from "./Footer";
import Navigation from "../Navigation/Navigation";

import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
