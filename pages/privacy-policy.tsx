import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default () => {
  return (
    <>
      <Header />
      <div className="bg-white px-10">
        <h2 className="font-bold py-5">1. Introduction</h2>
        <p>
          Welcome to "The Journey Capturer" (referred to as "we," "our," or
          "us"). We respect your privacy and are committed to protecting your
          personal information. This Privacy Policy is designed to help you
          understand how we collect, use, disclose, and safeguard your personal
          information.
        </p>{" "}
        <h2 className="font-bold py-5">2. Information We Collect</h2>
        <p>
          Personal Information: We may collect personal information, such as
          your name, email address, and contact details when you register on our
          website or use our services. Trip Details: When you book a trip, we
          may collect information related to your travel plans and preferences.
          Payment Information: If applicable, we collect payment information for
          trip reservations. Cookies and Tracking Technologies: We use cookies
          and similar tracking technologies to enhance your experience on our
          website. You can manage your cookie preferences through your browser
          settings.
        </p>
        <h2 className="font-bold py-5">3. How We Use Your Information</h2>
        <ul>
          <li className="py-2">
            To provide, personalize, and improve our services.
          </li>
          <li className="py-2">
            To process your trip reservations and payments.
          </li>
          <li className="py-2">
            To communicate with you regarding our services and updates.
          </li>
          <li className="py-2">
            To protect our rights and the rights of other users.
          </li>
          <li className="py-2">To comply with legal obligations.</li>
        </ul>
        <h2 className="font-bold py-5">4. Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information with service providers who help
          us operate and improve our services. We may also share your data for
          legal reasons or in response to lawful requests.
        </p>
        <h2 className="font-bold py-5">5. Security</h2>
        <p>
          We employ industry-standard security measures to protect your personal
          information. However, no data transmission over the internet can be
          entirely secure.
        </p>
        <h2 className="font-bold py-5">6. Your Choices</h2>
        <p>
          You have the right to access, correct, update, or delete your personal
          information. You can opt-out of receiving our communications at any
          time.
        </p>
        <h2 className="font-bold py-5">7. Updates to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices. We will notify you of any significant changes
          through our website or via email.
        </p>
        <h2 className="font-bold py-5">8. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy or your
          personal information, please contact us at +918527681811.
        </p>
      </div>
      <Footer />
    </>
  );
};
