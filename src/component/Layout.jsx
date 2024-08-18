import { Container } from 'reactstrap';
import Navbar from './Navbar'
import ScrollToTopButton from './ScrollToTopButton'
import Footer from './Footer'
import LatestNews from './LatestNews'
import VerticalText from './VerticalText'
import PropTypes from 'prop-types';
import '../VerticalText.css' 

function Layout({ children }) {
    return (
      <div>
        <Navbar />
        <Container>
          {children}
        </Container>
        <LatestNews />
        <ScrollToTopButton />
        <VerticalText />
        <Footer />
      </div>
    );
  }

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Layout