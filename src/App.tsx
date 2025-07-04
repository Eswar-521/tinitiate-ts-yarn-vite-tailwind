import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LeftSidebar from "./Components/LeftSidebar";
import RightSidebar from "./Components/RightSidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";
import Comparison from "./Pages/Comparison";
import ComparisonTable from "./Pages/ComparisonTable";
import Forms from "./Pages/Forms";
import DataTable from "./Pages/DataTable";
import Infographics from "./Pages/Infographics";
import Audio from "./Pages/Audio";
import Video from "./Pages/Video";
import Animation from "./Pages/Animation";
import DragDrop from "./Pages/DragDrop";
import Editor from "./Pages/Editor";
import ShoppingCart from "./Pages/ShoppingCart";
import Calendar from "./Pages/Calendar";
import Dashboard from "./Pages/Dashboard";
import Analytics from "./Pages/Analytics";
import Security from "./Pages/Security";
import Help from "./Pages/Help";
import { CartProvider } from "./Context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1 bg-gray-100">
            <LeftSidebar />
            <main className="flex-1 p-6 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Search />} />
                <Route path="/comparison" element={<Comparison />} />
                <Route path="/comparisontable" element={<ComparisonTable />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/datatable" element={<DataTable />} />
                <Route path="/infographics" element={<Infographics />} />
                <Route path="/audio" element={<Audio />} />
                <Route path="/video" element={<Video />} />
                <Route path="/animation" element={<Animation />} />
                <Route path="/drag-drop" element={<DragDrop />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/security" element={<Security />} />
                <Route path="/help" element={<Help />} />
              </Routes>
            </main>
            <RightSidebar />
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
