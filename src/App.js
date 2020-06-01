import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      securities: ["FB", "TWTR", "GRUB", "UBER", "LYFT"],
      prices: [],
    };
  }

  componentDidMount() {
    this.state.securities.forEach((company) => {
      axios
        .get(
          "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
            company +
            "&apikey=O3KVPPR93UBF433D"
        )
        .then((res) => {
          const price = res.data["Global Quote"]["05. price"];
          this.setState({ prices: [...this.state.prices, price] });
        });
    });
  }
  render() {
    const today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear();
    return (
      <div>
        <div className="stocks">
          <div className="stock-names">
            <div className="facebook">
              Facebook: <b>{this.state.prices[0]}</b>
            </div>
            <div className="twitter">
              Twitter: <b>{this.state.prices[1]}</b>
            </div>
            <div className="grubhub">
              Grubhub: <b>{this.state.prices[2]}</b>
            </div>
            <div className="uber">
              Uber: <b>{this.state.prices[3]}</b>
            </div>
            <div className="lyft">
              Lyft: <b>{this.state.prices[4]}</b>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="menu-button">
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>
          <h2 className="title">
            The Wall Street Journal
            <h7 className="subheading">
              English Edition | {m}/{d}/{y} | Print Edition | Video | Latest
              Headlines
            </h7>
          </h2>

          <h2 className="title2">WSJ</h2>
          <img
            className="search"
            src="https://img.icons8.com/android/24/000000/search.png"
          />
        </div>
      </div>
    );
  }
}

export default App;
