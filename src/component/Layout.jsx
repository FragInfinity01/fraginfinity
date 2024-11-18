import { Container } from 'reactstrap';
import Navbar from './Navbar';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from './Footer';
import PropTypes from 'prop-types';

function Layout({ children, noFooter = false }) {
  return (
    <div>
      <Navbar />
      <Container>
        {children}
      </Container>
      <ScrollToTopButton />
      {!noFooter && <Footer />}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
};

export default Layout;
