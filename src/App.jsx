import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleSubscribenow = () => {
    alert("Thanks for Subscribe 🎉🎉");
  };

  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(14 + 15); // Add 15 days
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown({ days, hours, minutes, seconds });
      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="banner-1 bg-fixed parallax-bg fullscreen-banner valign-wrapper"
        data-stellar-background-ratio="0.5"
        style={{ height: "963px" }}
      >
        <div className="valign-cell">
          <div className="container">
            <div className="comingsoon-wrapper text-center">
              <div className="mb-50">
                <p className="sub-intro lead">
                  Embark on a Journey to Discover Your Ultimate Style
                  Destination
                </p>
                <h1 className="intro-title black-text">
                  Dipak Selection, Arriving Soon...😊
                </h1>
              </div>

              <div className="countdown-wrapper mb-30 white-text">
                <ul className="countdown">
                  <li>
                    <span className="days white-text">{countdown.days}</span>
                    <p>days</p>
                  </li>
                  <li>
                    <span className="hours white-text">{countdown.hours}</span>
                    <p>hours</p>
                  </li>
                  <li>
                    <span className="minutes white-text">
                      {countdown.minutes}
                    </span>
                    <p>minutes</p>
                  </li>
                  <li>
                    <span className="seconds white-text">
                      {countdown.seconds}
                    </span>
                    <p>seconds</p>
                  </li>
                </ul>
              </div>

              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <div className="subscribe-wrapper text-center">
                    <button
                      type="submit"
                      className="btn btn-lg pink waves-effect waves-light mt-30 text-capitalize"
                      onClick={handleSubscribenow}
                    >
                      Subscribe Now
                    </button>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
