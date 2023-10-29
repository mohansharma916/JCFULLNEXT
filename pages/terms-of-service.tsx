import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default () => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <p>
          These Terms and Conditions (referred to as "Terms") govern your use of
          "The Journey Capturer" website (referred to as "we," "our," or "us").
          By using our website, you agree to be bound by these Terms. If you do
          not agree with any part of these Terms, please refrain from using our
          services.
        </p>
        <h3>1. Website Use</h3>
        <ul>
          <li>You must be at least 18 years of age to use our services.</li>
          <li>
            You are responsible for providing accurate and up-to-date
            information when using our website.
          </li>
        </ul>
        <h3>2. User Accounts</h3>
        <ul>
          <li>
            When you create an account with us, you are responsible for
            maintaining the confidentiality of your account details, including
            your username and password.
          </li>
          <li>
            You are responsible for any activity that occurs under your account.
          </li>
          <li>
            We reserve the right to suspend or terminate your account if we
            believe you have violated these Terms.
          </li>
        </ul>
        <h3>3. Trip Bookings</h3>
        <ul>
          <li>Trip bookings are subject to availability.</li>
          <li>
            Prices, itineraries, and other trip details are subject to change.
          </li>
          <li>
            Trip bookings may require payment, and refunds are subject to our
            Refund Policy.
          </li>
        </ul>
        <h3>4. Privacy</h3>
        <ul>
          <li>
            Your use of our website is also governed by our Privacy Policy. By
            using our website, you consent to the collection, use, and
            disclosure of your information as described in our Privacy Policy.
          </li>
        </ul>
        <h3>5. Intellectual Property</h3>
        <ul>
          <li>
            All content on our website, including text, images, logos, and
            trademarks, is our property and is protected by copyright and
            intellectual property laws.
          </li>
          <li>
            You may not use our content for commercial purposes without our
            written consent.
          </li>
        </ul>
        <h3>6. Disclaimer</h3>
        <ul>
          <li>
            While we strive to provide accurate information, we do not guarantee
            the accuracy, reliability, or completeness of the content on our
            website.
          </li>
          <li>
            We are not responsible for any losses or damages resulting from your
            use of our website
          </li>
        </ul>
        <h3>7. Modifications</h3>
        <p>
          We reserve the right to modify these Terms at any time. The effective
          date of the updated Terms will be displayed at the top of this page.
        </p>
        <h3>8. Contact Us</h3>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at [Your Contact Information].
        </p>
      </div>
      <Footer />
    </>
  );
};
