export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h2 className="footer__logo">MORENT</h2>
          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        <div className="footer__col">
          <h4>About</h4>
          <ul>
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Community</h4>
          <ul>
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Socials</h4>
          <ul>
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>©2022 MORENT. All rights reserved by Mahammad Mammadli</span>
        <div>
          <span>Privacy & Policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
}
