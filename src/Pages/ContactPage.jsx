import { useState } from "react";
import Twitch from ".././assets/img/Twitch.png";
import Discord from ".././assets/img/Discord.png";
import TwitterX from ".././assets/img/TwitterX.png";
import TikTok from ".././assets/img/TikTok.png";
import YouTube from ".././assets/img/YouTube.png";
import Instagram from ".././assets/img/Instagram.png";
import VerticalText from "../component/VerticalText";

function ContactPage() {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Email submitted: ${email}`);
      setEmail("");
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      setStatus("Thanks for your submission!");
      form.reset();
    } else {
      setStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <div className="contact-section">
      <div className="connect-info">
        <div className="connect">
          <h2>CONTACT US</h2>
          <h1>
            WANT TO <span>COLLAB OR JOIN THE TEAM?</span>
          </h1>
          <h4>Ready to team up? Let&#39;s create something epic together!</h4>
          <div className="form-details">
            <div className="form form1">
              <form
                onSubmit={submitForm}
                action="https://formspree.io/f/xkgwykgn"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter your name/company name here"
                    className=""
                  />
                </div>
                <div>
                  <label htmlFor="email" className="">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email here"
                    className=""
                  />
                </div>
                <div>
                  <label htmlFor="number" className="">
                    Cell Number:
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="Enter your cell number here"
                    className=""
                  />
                </div>
                <div>
                  <label htmlFor="message" className="">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Tell us how we can make magic happen together!"
                    className=""
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="read-more">
                  Send Message &nbsp;
                  <i className="fas fa-angle-double-right"></i>
                </button>
              </form>
              {status && <p className="mt-4 text-center">{status}</p>}
            </div>

            <div className="form form2">
              <h4>CONTACT</h4>
              <br />
              <i className="fas fa-envelope"></i> &nbsp;
              <p>fraginfinity01@gmail.com</p>
              <br />
              <h4>SOCIAL MEDIA</h4>
              <div className="contact-links">
                <a
                  href="https://www.instagram.com/fraginfinityza/"
                  target="_blank"
                >
                  <img src={Instagram} alt="instagram logo" />
                </a>
                <a href="https://www.twitch.tv/fraginfinityza" target="_blank">
                  <img src={Twitch} alt="twitch logo" />
                </a>
                <a href="https://discord.gg/C3kwUSJ4j7" target="_blank">
                  <img src={Discord} alt="discord logo" />
                </a>
                <a href="https://twitter.com/FRAGINFINITYZA/" target="_blank">
                  <img src={TwitterX} alt="x logo" />
                </a>
                <a href="https://www.tiktok.com/@fraginfinity8" target="_blank">
                  <img src={TikTok} alt="tiktok logo" />
                </a>
                <a href="https://www.youtube.com/@FRAGINFINITY" target="_blank">
                  <img src={YouTube} alt="youtube logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image-banner">
        <h3>FRAGINFINITY NEWSLETTER</h3>
        <p>Subscribe to see the latest from FRAGINFINITY</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            Connect &nbsp;<i className="fas fa-angle-double-right"></i>
          </button>
        </form>
      </div>
      <VerticalText />
    </div>
  );
}
export default ContactPage;
