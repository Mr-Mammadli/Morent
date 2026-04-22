
import { cars } from "../data/cars";

function FilterSidebar({ isOpen, onClose, filters, onChange }) {
  const handleToggle = (key, value) => {
    onChange((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  };

  const getCount = (key, value) => {
    if (key === "type") {
      return cars.filter((c) => c.category === value).length;
    }
    if (key === "seats") {
      if (value === "7+") return cars.filter((c) => c.seats >= 7).length;
      return cars.filter((c) => c.seats === Number(value)).length;
    }
    return 0;
  };

  return (
    <div className={`sidebar${isOpen ? " open" : ""}`}>
      <div className="sidebar__header">
        <h3>Filter</h3>
        <button className="sidebar__close" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="sidebar__section">
        <h4 className="sidebar__section-title">Type</h4>
        <div className="sidebar__options">
          {[
            { value: "sport", label: "Sport" },
            { value: "suv", label: "SUV" },
            { value: "mpv", label: "MPV" },
            { value: "sedan", label: "Sedan" },
            { value: "coupe", label: "Coupe" },
            { value: "hatchback", label: "Hatchback" },
          ].map((item) => (
            <label key={item.value} className="sidebar__option">
              <input
                type="checkbox"
                value={item.value}
                checked={filters.type.includes(item.value)}
                onChange={() => handleToggle("type", item.value)}
              />
              <span className="sidebar__label-text">
                {item.label} <span className="sidebar__count">({getCount("type", item.value)})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="sidebar__section">
        <h4 className="sidebar__section-title">Capacity</h4>
        <div className="sidebar__options">
          {[
            { value: "2", label: "2 Person" },
            { value: "4", label: "4 Person" },
            { value: "5", label: "5 Person" },
            { value: "7", label: "7+ Person" },
          ].map((item) => (
            <label key={item.value} className="sidebar__option">
              <input
                type="checkbox"
                value={item.value}
                checked={filters.seats.includes(item.value)}
                onChange={() => handleToggle("seats", item.value)}
              />
              <span className="sidebar__label-text">
                {item.label} <span className="sidebar__count">({getCount("seats", item.value)})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="sidebar__section">
        <h4 className="sidebar__section-title">Price</h4>
        <input
          type="range"
          min={20}
          max={300}
          step={10}
          value={filters.maxPrice}
          onChange={(e) =>
            onChange((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
          }
          className="sidebar__range"
        />
        <span className="sidebar__price-label">Max. ${filters.maxPrice}.00</span>
      </div>
    </div>
  );
}

export default FilterSidebar;
