const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_inner">
          <div className="footer_container">
            <div className="footer_column">
              <h3>ONLINE SHOPPING</h3>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Kids</a>
              <a href="#">Home & Living</a>
              <a href="#">Beauty</a>
              <a href="#">Gift Card</a>
              <a href="#">Myntra Insider</a>
              <h3 className="useful_heading">USEFUL LINKS</h3>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Site Map</a>
              <a href="#">Corporate Information</a>
              <a href="#">Whitehat</a>
              <a href="#">Cleartrip</a>
              <a href="#">Myntra Global</a>
            </div>
            <div className="footer_column">
              <h3>CUSTOMER POLICIES</h3>
              <a href="#">Contact Us</a>
              <a href="#">FAQ</a>
              <a href="#">T&C</a>
              <a href="#">Terms Of Use</a>
              <a href="#">Track Orders</a>
              <a href="#">Shipping</a>
              <a href="#">Cancellation</a>
              <a href="#">Privacy policy</a>
              <a href="#">Grievance Redressal</a>
              <a href="#">FSSAI Food Safety Connect app</a>
            </div>
            <div className="footer_column" id="img_footer">
              <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
              <div className="store_icons">
                <a href="#">
                  <img
                    src="./images/googlePlay.png"
                    alt="Goole Play icon"
                    className="app_version_icon"
                  />
                </a>
                <a href="#">
                  <img
                    src="./images/appleStore.png"
                    alt="Apple Store icon"
                    className="app_version_icon"
                  />
                </a>
              </div>
              <h3>KEEP IN TOUCH</h3>
              <div className="social_media_icon_container">
                <a href="#">
                  <img src="./images/facebook.png" alt="Facebook icon" />
                </a>
                <a href="#">
                  <img src="./images/twitter.png" alt="Twitter icon" />
                </a>
                <a href="#">
                  <img src="./images/youtube.png" alt="Youtube icon" />
                </a>
                <a href="#">
                  <img src="./images/instagram.png" alt="Instagram icon" />
                </a>
              </div>
            </div>
            <div className="footer_column">
              <div className="guarantee">
                <div className="guarantee_icon">
                  <img src="./images/Original_icon.png" alt="100% Guarantee" />
                  <p>
                    <b style={{ color: "#000000" }}>100% ORIGINAL</b> guarantee{" "}
                    <br /> for all products at myntra.com
                  </p>
                </div>
                <div className="guarantee_icon">
                  <img
                    src="./images/return_icon.png"
                    alt="Return within 14days"
                  />
                  <p>
                    <b style={{ color: "#000000" }}>Return within 14days</b> of{" "}
                    <br />
                    receiving your order
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="popular_search">
            <h3>POPULAR SEARCHES</h3>
            <div className="line"></div>
          </div>
          <div className="popular_search_items">
            <a href="#">Makeup </a>
            <a href="#">Dresses For Girls </a>
            <a href="#">T-Shirts </a>
            <a href="#">Sandals</a>
            <a href="#">Headphones </a>
            <a href="#">Babydolls </a>
            <a href="#">Blazers For Men </a>
            <a href="#">Handbags </a>
            <a href="#">Ladies Watches </a>
            <a href="#">Bags</a>
            <a href="#">Sport Shoes</a>
            <a href="#">Reebok Shoes</a>
            <a href="#">Puma Shoes</a>
            <a href="#">Boxers</a>
            <a href="#">Wallets</a>
            <a href="#">Tops</a>
            <a href="#">Earrings</a>
            <a href="#">Fastrack Watches </a>
            <a href="#">Kurtis </a>
            <a href="#">Nike </a>
            <a href="#">Smart Watches </a>
            <a href="#">Titan Watches </a>
            <a href="#">Designer Blouse </a>
            <a href="#">Gowns </a>
            <a href="#">Rings </a>
            <a href="#">Cricket Shoes </a>
            <a href="#">Forever 21 </a>
            <a href="#">Eye Makeup </a>
            <a href="#">Photo Frames </a>
            <a href="#">Punjabi Suits </a>
            <a href="#">Bikini </a>
            <a href="#">Myntra Fashion Show </a>
            <a href="#">Lipstick </a>
            <a href="#">Saree </a>
            <a href="#">Watches </a>
            <a href="#">Dresses </a>
            <a href="#">Lehenga </a>
            <a href="#">Nike Shoes </a>
            <a href="#">Goggles </a>
            <a href="#">Bras </a>
            <a href="#">Suit </a>
            <a href="#">Chinos </a>
            <a href="#">Shoes </a>
            <a href="#">Adidas Shoes </a>
            <a href="#">Woodland Shoes </a>
            <a href="#">Jewellery </a>
            <a href="#">Designer Sarees</a>
          </div>
          <div className="footer_bottom">
            <div className="footer_left">
              In case of any concern, <a href="#"> Contact Us</a>
            </div>
            <div className="footer_center">
              © 2026 www.myntra.com. All rights reserved.
            </div>
            <div className="footer_right">A Flipkart company</div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
