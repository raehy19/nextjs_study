import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
