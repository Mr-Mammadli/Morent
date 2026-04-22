
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FilterSidebar from "../FilterSidebar";

function MainLayout() {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    type: [],
    seats: [],
    maxPrice: 300,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const isCarsPage = location.pathname.startsWith("/cars");

  const handleFilterClick = () => {
    if (!isCarsPage) {
      navigate("/cars");
    }
    setShowFilter((prev) => !prev);
  };

  const handleClose = () => setShowFilter(false);

  const isOpen = showFilter && isCarsPage;

  return (
    <>
      <Navbar
        onFilterClick={handleFilterClick}
        search={search}
        onSearch={setSearch}
      />

      {/* Mobile overlay */}
      {isOpen && <div className="sidebar__overlay" onClick={handleClose} />}

      <div className={`layout__body ${isCarsPage && isOpen ? "layout__body--shifted" : ""}`}>
        {isCarsPage && (
          <FilterSidebar
            isOpen={isOpen}
            onClose={handleClose}
            filters={filters}
            onChange={setFilters}
          />
        )}

        <div className="layout__content">
          <Outlet context={{ filters, search }} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
