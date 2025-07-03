import { FaBuilding, FaPhoneVolume, FaEnvelopeOpenText, FaLocationArrow, FaWhatsapp, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="table-is-responsive">
      <table>
        <tbody>
          <tr>
            <th style={{ padding: '10px' }}>
              {/* <FaBuilding /> */}
            </th>
            <td>
              <b>
                <span id="C_name">https://www.equilibriodesigns.com/</span>
              </b>
            </td>
          </tr>
          <tr>
            <th style={{ padding: '10px' }}>
              <FaPhoneVolume />
            </th>
            <td>
              <span id="C_number">
                <a href="tel:+9180894589733">+9180894589733</a>
              </span>
            </td>
          </tr>
          <tr>
            <th style={{ padding: '10px' }}>
              <FaEnvelopeOpenText />
            </th>
            <td>
              <span id="C_email">
                <a href="mailto:arch.equilibrio@gmail.com">arch.equilibrio@gmail.com</a>
              </span>
            </td>
          </tr>
          <tr>
            <th style={{ padding: '10px' }}>
              <FaLocationArrow />
            </th>
            <td>
              <span id="C_address">
                Equilibrio Designs LLP
                <br />
                Door No. 7/465, Second Floor,
                <br />
                Royal Plaza, Ottapalam- 679101
              </span>
            </td>
          </tr>
          <tr>
            <th style={{ padding: '10px', color: '#25D366' }}>
              <FaWhatsapp />
            </th>
            <td>
              <span id="C_whatsapp">
                <a href="https://wa.me/8089458973">8089458973</a>
              </span>
            </td>
          </tr>
          <tr>
            <th style={{ padding: '10px' }}>
              <FaFacebook />
            </th>
            <td>
              <span id="C_facebook">
                <a href="https://www.facebook.com">Official Facebook Page</a>
              </span>
            </td>
          </tr>
          <tr>
            <th style={{ padding: '10px', color: '#1DA1F2' }}>
              <FaTwitter />
            </th>
            <td>
              <span id="C_twitter">
                <a href="https://twitter.com">Official Twitter Handle</a>
              </span>
            </td>
          </tr>
          <tr>
            <th style={{ padding: '10px' }}>
              <FaYoutube />
            </th>
            <td>
              <span id="C_youtube">
                <a href="https://youtube.com">Official YouTube Channel</a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ color: '#3e005d', textAlign: 'center' }}>
        We will revert to you as soon as possible…!
      </h3>
      <p style={{ color: '#3e005d', textAlign: 'center' }}>
        Thank you for contacting us! <br />
        <b>Have a great day</b>
      </p>
      <span style={{ fontSize: '1px', opacity: 0 }}>
        This page is generated with the help of{' '}
        <a
          href="https://www.blogearns.com/2021/06/free-contact-us-page-generator.html"
          style={{ color: 'inherit' }}
        >
          Contact Us Page Generator
        </a>
      </span>
    </div>
  );
};

export default ContactUs;
