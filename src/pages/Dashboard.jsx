import Maps from "../assets/images/Maps.png";
import carDisplay from "../assets/images/Car(1).png";
import { cars } from "../data/cars";

function Dashboard() {
  const recentTransactions = cars.slice(0, 4);

  return (
    <div className="dashboard">
      {/* Sidebar - Internal to Dashboard for this view */}
      <aside className="dashboard__sidebar">
        <div className="dashboard__sidebar-section">
          <h4>MAIN MENU</h4>
          <ul>
            <li className="active">
              <span className="icon">🏠</span> Dashboard
            </li>
            <li>
              <span className="icon">🚗</span> Car Rent
            </li>
            <li>
              <span className="icon">📊</span> Insight
            </li>
            <li>
              <span className="icon">💰</span> Reimburse
            </li>
            <li>
              <span className="icon">📩</span> Inbox
            </li>
            <li>
              <span className="icon">📅</span> Calender
            </li>
          </ul>
        </div>
        <div className="dashboard__sidebar-section">
          <h4>PREFERENCES</h4>
          <ul>
            <li>
              <span className="icon">⚙️</span> Settings
            </li>
            <li>
              <span className="icon">❓</span> Help & Center
            </li>
            <li>
              <span className="icon">🌙</span> Dark Mode
            </li>
          </ul>
        </div>
        <div className="dashboard__logout">
          <span>🚪</span> Log Out
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard__content">
        <div className="dashboard__grid">
          {/* Details Rental */}
          <section className="dashboard__details">
            <h3>Details Rental</h3>
            <div className="dashboard__map">
              <img src={Maps} alt="Map" />
            </div>
            <div className="dashboard__rental-info">
              <div className="dashboard__car-main">
                <div className="dashboard__car-img">
                  <img src={carDisplay} alt="Car" />
                </div>
                <div className="dashboard__car-text">
                  <h4>Nissan GT-R</h4>
                  <span>Sport Car</span>
                </div>
                <span className="dashboard__car-id">#7636</span>
              </div>

              <div className="dashboard__trip">
                <div className="dashboard__trip-item">
                  <div className="dot blue"></div>
                  <div className="info">
                    <label>Pick-Up</label>
                    <div className="row">
                      <span>Kota Semarang</span>
                      <span>20 July 2022</span>
                      <span>07.00</span>
                    </div>
                  </div>
                </div>
                <div className="dashboard__trip-item">
                  <div className="dot lightblue"></div>
                  <div className="info">
                    <label>Drop-Off</label>
                    <div className="row">
                      <span>Kota Semarang</span>
                      <span>21 July 2022</span>
                      <span>01.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard__total">
                <label>Total Rental Price</label>
                <div className="price-wrap">
                  <span className="note">Overall price and includes rental discount</span>
                  <span className="price">$80.00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Side Panels */}
          <div className="dashboard__side">
            {/* Top 5 Car Rental */}
            <section className="dashboard__chart">
              <div className="header">
                <h3>Top 5 Car Rental</h3>
                <span>...</span>
              </div>
              <div className="chart-content">
                <div className="donut-chart">
                  <div className="donut-text">
                    <strong>72,703</strong>
                    <span>Rental Car</span>
                  </div>
                </div>
                <ul className="chart-legend">
                  <li>
                    <span className="dot sport"></span> Sport Car <span>17,439</span>
                  </li>
                  <li>
                    <span className="dot suv"></span> SUV <span>9,478</span>
                  </li>
                  <li>
                    <span className="dot coupe"></span> Coupe <span>18,197</span>
                  </li>
                  <li>
                    <span className="dot hatchback"></span> Hatchback <span>12,510</span>
                  </li>
                  <li>
                    <span className="dot mpv"></span> MPV <span>14,406</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Recent Transaction */}
            <section className="dashboard__transactions">
              <div className="header">
                <h3>Recent Transaction</h3>
                <a href="#">View All</a>
              </div>
              <div className="transaction-list">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="transaction-item">
                    <img src={tx.image} alt={tx.name} />
                    <div className="info">
                      <h4>{tx.name}</h4>
                      <span>{tx.category}</span>
                    </div>
                    <div className="meta">
                      <span className="date">20 July</span>
                      <span className="price">${tx.price}.00</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
