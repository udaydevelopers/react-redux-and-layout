import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
