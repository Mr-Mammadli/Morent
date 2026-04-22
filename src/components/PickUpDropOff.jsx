function PickUpDropOff() {
  return (
    <div className="pickup">
      {/* Pick Up */}
      <div className="pickup__card">
        <div className="pickup__title">
          <span className="pickup__dot pickup__dot--blue" />
          <span>Pick - Up</span>
        </div>
        <div className="pickup__fields">
          <div className="pickup__field">
            <label htmlFor="pickup-location">Locations</label>
            <select id="pickup-location" name="pickup-location">
              <option>City</option>
              <option>Baku</option>
              <option>Sumqayit</option>
              <option>Ganja</option>
            </select>
          </div>
          <div className="pickup__field">
            <label htmlFor="pickup-date">Date</label>
            <select id="pickup-date" name="pickup-date">
              <option>Date</option>
            </select>
          </div>
          <div className="pickup__field">
            <label htmlFor="pickup-time">Time</label>
            <select id="pickup-time" name="pickup-time">
              <option>Time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Swap düyməsi */}
      <button className="pickup__swap" aria-label="Swap locations">
        ⇅
      </button>

      {/* Drop Off */}
      <div className="pickup__card">
        <div className="pickup__title">
          <span className="pickup__dot pickup__dot--blue" />
          <span>Drop - Off</span>
        </div>
        <div className="pickup__fields">
          <div className="pickup__field">
            <label htmlFor="dropoff-location">Locations</label>
            <select id="dropoff-location" name="dropoff-location">
              <option>City</option>
              <option>Baku</option>
              <option>Sumqayit</option>
              <option>Ganja</option>
            </select>
          </div>
          <div className="pickup__field">
            <label htmlFor="dropoff-date">Date</label>
            <select id="dropoff-date" name="dropoff-date">
              <option>Date</option>
            </select>
          </div>
          <div className="pickup__field">
            <label htmlFor="dropoff-time">Time</label>
            <select id="dropoff-time" name="dropoff-time">
              <option>Time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickUpDropOff;
