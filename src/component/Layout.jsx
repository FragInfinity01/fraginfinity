import { Container } from 'reactstrap';
import Navbar from './Navbar'
import ScrollToTopButton from './ScrollToTopButton'
import Footer from './Footer'
import PropTypes from 'prop-types';

function Layout({ children }) {
    return (
      <div>
        <Navbar />
        <Container>
          {children}
        </Container>
        <ScrollToTopButton />
        <Footer />
      </div>
    );
  }

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Layout