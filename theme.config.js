import Footer from "./components/Footer";

const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Winston Tandi
        <Footer />
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
      `}</style>
    </footer>
  ),
};
