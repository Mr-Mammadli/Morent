import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/home/index";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Favorites from "../pages/Favorites";
import Booking from "../pages/Booking";
import Dashboard from "../pages/Dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/booking/:id?" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
