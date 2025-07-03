import DefaultLayout from "@/layouts/default";
import React from "react";
import {
  FaBuilding,
  FaPhoneVolume,
  FaEnvelopeOpenText,
  FaLocationArrow,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Index = () => {
  return (
    <DefaultLayout>
      <div
        style={{
          fontFamily: "Sans-serif",
          backgroundColor: "rgb(248,249,250)",
          padding: "18px",
          color: "black",
        }}
      >
        <br />
        <h2 style={{ fontFamily: "Sans-serif", color: "black" }}>About Us!</h2>
        <h2 style={{ fontFamily: "Sans-serif", textAlign: "center" }}>
          Welcome To <span id="W_Name1">Equilibrio Design</span>
        </h2>
        <p>
          <span id="W_Name2">Equilibrio Design</span> is a Professional{" "}
          <span id="W_Type1">Architecture, Design</span> Platform. Here we will
          only provide you with interesting content that you will enjoy very
          much. We are committed to providing you the best of{" "}
          <span id="W_Type2">Architecture, Design</span>, with a focus on
          reliability and{" "}
          <span id="W_Spec">Architecture, Design, Buildings</span>. We strive to
          turn our passion for <span id="W_Type3">Architecture, Design</span>{" "}
          into a thriving website. We hope you enjoy our{" "}
          <span id="W_Type4">Architecture, Design</span> as much as we enjoy
          giving them to you.
        </p>
        <p>
          I will keep on posting such valuable and knowledgeable information on
          my website for all of you. Your love and support matter a lot.
        </p>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Thank you For Visiting Our Site
          <br />
          <br />
          <span
            style={{
              color: "blue",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Have a great day!
          </span>
        </p>
        <div className="table-is-responsive">
          <table>
            <tbody>
              <tr>
                <th style={{ padding: "10px" }}>
                  {/* <FaBuilding /> */}
                </th>
                <td>
                  <b>
                    <span id="C_name">https://www.equilibriodesigns.com/</span>
                  </b>
                </td>
              </tr>
              <tr>
                <th style={{ padding: "10px" }}>
                  <FaPhoneVolume />
                </th>
                <td>
                  <span id="C_number">
                    <a href="tel:+9180894589733">+9180894589733</a>
                  </span>
                </td>
              </tr>
              <tr>
                <th style={{ padding: "10px" }}>
                  <FaEnvelopeOpenText />
                </th>
                <td>
                  <span id="C_email">
                    <a href="mailto:arch.equilibrio@gmail.com">
                      arch.equilibrio@gmail.com
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <th style={{ padding: "10px" }}>
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
                <th style={{ padding: "10px", color: "#25D366" }}>
                  <FaWhatsapp />
                </th>
                <td>
                  <span id="C_whatsapp">
                    <a href="https://wa.me/8089458973">8089458973</a>
                  </span>
                </td>
              </tr>
              <tr>
                <th style={{ padding: "10px" }}>
                  <FaFacebook />
                </th>
                <td>
                  <span id="C_facebook">
                    <a href="https://www.facebook.com">
                      Official Facebook Page
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <th style={{ padding: "10px", color: "#1DA1F2" }}>
                  <FaTwitter />
                </th>
                <td>
                  <span id="C_twitter">
                    <a href="https://twitter.com">Official Twitter Handle</a>
                  </span>
                </td>
              </tr>
              <tr>
                <th style={{ padding: "10px" }}>
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

          <h3 style={{ color: "#3e005d", textAlign: "center" }}>
            We will revert to you as soon as possible…!
          </h3>
          <p style={{ color: "#3e005d", textAlign: "center" }}>
            Thank you for contacting us! <br />
            <b>Have a great day</b>
          </p>
          <span style={{ fontSize: "1px", opacity: 0 }}>
            This page is generated with the help of{" "}
            <a
              href="https://www.blogearns.com/2021/06/free-contact-us-page-generator.html"
              style={{ color: "inherit" }}
            >
              Contact Us Page Generator
            </a>
          </span>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
