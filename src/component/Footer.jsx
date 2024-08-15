import fragBanner from '.././assets/img/Footer.png'

function Footer() {
  return (
    <div className='footer-img'>
      <img src={fragBanner} alt="footer" />
      <p>FragInfinity &copy; {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  )
}

export default Footer