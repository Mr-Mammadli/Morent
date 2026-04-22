import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCar } from "../data/cars";
import Paypal from "../assets/icons/PayPal.svg";
import Bitcoin from "../assets/icons/Bitcoin.svg";
import Visa from "../assets/icons/Visa.svg";
import Mc from "../assets/icons/mc.svg";
import Security from "../assets/icons/security.svg";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function Booking() {
  const { id } = useParams();
  const car = getCar(id);

  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffLocation: "",
    dropoffDate: "",
    dropoffTime: "",
    cardNumber: "",
    expiration: "",
    cardHolder: "",
    cvc: "",
    marketing: false,
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const tax = car ? car.price * 0 : 0;
  const total = car ? car.price + tax : 0;

  return (
    <div className="booking">
      <div className="booking__left">
        {/* Billing Info */}
        <div className="booking__section">
          <div className="booking__section-header">
            <div>
              <h3>Billing Info</h3>
              <p>Please enter your billing info</p>
            </div>
            <span>Step 1 of 4</span>
          </div>
          <div className="booking__grid">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              label="Name"
            />
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              label="Phone Number"
            />
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              label="Address"
            />
            <Input
              id="city"
              name="city"
              type="text"
              placeholder="Town or city"
              value={form.city}
              onChange={handleChange}
              label="Town / City"
            />
          </div>
        </div>

        <div className="booking__section">
          <div className="booking__section-header">
            <div>
              <h3>Rental Info</h3>
              <p>Please select your rental date</p>
            </div>
            <span>Step 2 of 4</span>
          </div>

          <div className="booking__rental-group">
            <div className="booking__rental-title">
              <span className="booking__dot" />
              <span>Pick - Up</span>
            </div>
            <div className="booking__grid">
              <div className="booking__field">
                <label htmlFor="pickupLocation">Locations</label>
                <select
                  id="pickupLocation"
                  name="pickupLocation"
                  value={form.pickupLocation}
                  onChange={handleChange}
                >
                  <option value="">Select your city</option>
                  <option value="baku">Baku</option>
                  <option value="sumqayit">Sumqayit</option>
                  <option value="ganja">Ganja</option>
                </select>
              </div>
              <div className="booking__field">
                <label htmlFor="pickupDate">Date</label>
                <input
                  id="pickupDate"
                  name="pickupDate"
                  type="date"
                  value={form.pickupDate}
                  onChange={handleChange}
                />
              </div>
              <div className="booking__field">
                <label htmlFor="pickupTime">Time</label>
                <input
                  id="pickupTime"
                  name="pickupTime"
                  type="time"
                  value={form.pickupTime}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="booking__rental-group">
            <div className="booking__rental-title">
              <span className="booking__dot" />
              <span>Drop - Off</span>
            </div>
            <div className="booking__grid">
              <div className="booking__field">
                <label htmlFor="dropoffLocation">Locations</label>
                <select
                  id="dropoffLocation"
                  name="dropoffLocation"
                  value={form.dropoffLocation}
                  onChange={handleChange}
                >
                  <option value="">Select your city</option>
                  <option value="baku">Baku</option>
                  <option value="sumqayit">Sumqayit</option>
                  <option value="ganja">Ganja</option>
                </select>
              </div>
              <div className="booking__field">
                <label htmlFor="dropoffDate">Date</label>
                <input
                  id="dropoffDate"
                  name="dropoffDate"
                  type="date"
                  value={form.dropoffDate}
                  onChange={handleChange}
                />
              </div>
              <div className="booking__field">
                <label htmlFor="dropoffTime">Time</label>
                <input
                  id="dropoffTime"
                  name="dropoffTime"
                  type="time"
                  value={form.dropoffTime}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="booking__section">
          <div className="booking__section-header">
            <div>
              <h3>Payment Method</h3>
              <p>Please enter your payment method</p>
            </div>
            <span>Step 3 of 4</span>
          </div>

          <div
            className={`booking__payment-option ${paymentMethod === "credit" ? "active" : ""}`}
          >
            <div className="booking__payment-header">
              <label className="booking__radio">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                />
                <span>Credit Card</span>
              </label>
              <div className="booking__payment-icons">
                <img src={Visa} alt="visa" className="booking__payment-icon" />
                <img
                  src={Mc}
                  alt="mastercard"
                  className="booking__payment-icon"
                />
              </div>
            </div>
            {paymentMethod === "credit" && (
              <div className="booking__grid">
                <div className="booking__field">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    placeholder="Card number"
                    value={form.cardNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="booking__field">
                  <label htmlFor="expiration">Expiration Date</label>
                  <input
                    id="expiration"
                    name="expiration"
                    type="text"
                    placeholder="DD/MM/YY"
                    value={form.expiration}
                    onChange={handleChange}
                  />
                </div>
                <div className="booking__field">
                  <label htmlFor="cardHolder">Card Holder</label>
                  <input
                    id="cardHolder"
                    name="cardHolder"
                    type="text"
                    placeholder="Card holder"
                    value={form.cardHolder}
                    onChange={handleChange}
                  />
                </div>
                <div className="booking__field">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    id="cvc"
                    name="cvc"
                    type="text"
                    placeholder="CVC"
                    value={form.cvc}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>

          <div
            className={`booking__payment-option ${paymentMethod === "paypal" ? "active" : ""}`}
          >
            <div className="booking__payment-header">
              <label className="booking__radio">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                <span>PayPal</span>
              </label>
              <img
                src={Paypal}
                alt="paypal"
                className="booking__payment-icon"
              />
            </div>
          </div>

          <div
            className={`booking__payment-option ${paymentMethod === "bitcoin" ? "active" : ""}`}
          >
            <div className="booking__payment-header">
              <label className="booking__radio">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "bitcoin"}
                  onChange={() => setPaymentMethod("bitcoin")}
                />
                <span>Bitcoin</span>
              </label>
              <img
                src={Bitcoin}
                alt="bitcoin"
                className="booking__payment-icon"
              />
            </div>
          </div>
        </div>

        <div className="booking__section">
          <div className="booking__section-header">
            <div>
              <h3>Confirmation</h3>
              <p>
                We are getting to the last step. Don't worry, we make it easy
              </p>
            </div>
            <span>Step 4 of 4</span>
          </div>
          <label className="booking__checkbox">
            <input
              type="checkbox"
              name="marketing"
              checked={form.marketing}
              onChange={handleChange}
            />
            <span>
              I agree with sending an Marketing and newsletter emails. No spam,
              promised!
            </span>
          </label>
          <label className="booking__checkbox">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            <span>
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>

        <Button type="submit" variant="primary" fullWidth>
          Rent Now
        </Button>

        <div className="booking__safe">
          <img src={Security} alt="security" className="booking__safe-icon" />
          <div>
            <p>All your data are safe</p>
            <span>
              We are using the most advanced security to provide you the best
              experience
            </span>
          </div>
        </div>
      </div>

      <div className="booking__right">
        <div className="booking__summary">
          <h3>Rental Summary</h3>
          <p>
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>

          {car && (
            <div className="booking__summary-car">
              <img src={car.image} alt={car.name} />
              <div>
                <h4>{car.name}</h4>
                <div className="booking__summary-rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`booking__star ${i < Math.floor(car.rating) ? "active" : ""}`}
                    >
                      ★
                    </span>
                  ))}
                  <span>{car.reviews}+ Reviewer</span>
                </div>
              </div>
            </div>
          )}

          <div className="booking__summary-rows">
            <div className="booking__summary-row">
              <span>Subtotal</span>
              <span>${car ? car.price : 0}.00</span>
            </div>
            <div className="booking__summary-row">
              <span>Tax</span>
              <span>$0</span>
            </div>
          </div>

          <div className="booking__promo">
            <input type="text" placeholder="Apply promo code" />
            <button>Apply now</button>
          </div>

          <div className="booking__total">
            <div>
              <h4>Total Rental Price</h4>
              <p>Overall price and includes rental discount</p>
            </div>
            <span className="booking__total-price">${total}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
