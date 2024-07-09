import img1 from "../src/images/img1.png";
import icon2 from "../src/images/shopping-cart.svg";
import icon3 from "../src/images/Image.svg";
import "./App.css";

function Home() {
    return (     
    <div className="App">
    <header className="App-header">
      <nav>
        <div className="logo">
          <img src="" />
          <h3>TrusyBuy</h3>
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>Product</li>
          <li>Cart</li>
        </ul>
        <div className="icons">
          <img src={icon2} />
          <img src="" />
          <img src={icon3} />
        </div>
      </nav>
      <div className="home">
        <div className="homeContent">
          <div className="textContent">
            <h3>Shop Smarter, Live Better</h3>
            <p>
              Welcome to TrustBuy, your one-stop shop for the best in quality
              and convenience. Browse our diverse range of products, each
              selected to enhance your lifestyle. Experience fast, secure
              checkout and exceptional customer support.{" "}
            </p>
            <button className="btn">Shop Now</button>
            <div className="infos">
              <div className="info">
                <span>100%</span>
                <span>Quality</span>
              </div>
              <div className="info">
                <span>2000+</span>
                <span>Happy Customer</span>
              </div>
              <div className="info">
                <span>200+</span>
                <span>Certified Outlet</span>
              </div>
            </div>
          </div>
          <div className="imgContainer">
            <img src={img1} />
          </div>
        </div>
      </div>
    </header>
  </div>
    );
}

export default Home;