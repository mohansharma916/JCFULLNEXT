import Header from "./Header";
import Footer from "./Footer";
import NextTopLoader from "nextjs-toploader";

export default function Layout({ children }) {
  return (
    <>
      <main>
        {" "}
        <NextTopLoader color="#FAA935" />
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
