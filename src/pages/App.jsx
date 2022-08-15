import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import createRouter from "../router/Routing";

export default function App() {
  const routes = createRouter();

  return (
    <div>
      <Header />
      {routes}
      <Footer />
    </div>
  );
}
