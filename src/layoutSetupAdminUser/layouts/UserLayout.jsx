import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Header />
      <main>
      <section className="py-5 text-center container">
        <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;