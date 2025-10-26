import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Banner from "./components/banner/banner";
import Products from "./components/products/products";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Cart from "./components/cart/cart";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import ProtectedRoutes from "./protectedRoutes/protectedRoutes";

function App() {
  return (
    <>
      {/* Header shows only on public pages except login/register */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Banner />
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <Products />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Login/Register without Header/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/cart"
            element={
              <>
                <Cart />
                <Footer />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
