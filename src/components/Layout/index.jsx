import { Footer } from "../Footer";
import { Header } from "../Header";

import "./style.css";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};
