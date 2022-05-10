import React, { Component } from "react";

export default class MotMainCenter extends Component {
  constructor(props) {
    super(props);
    this.props = 'one'

    this.state = {
      count: 1,
      price: 5,
      zero: false
    }
  }
  render() {

    const PlusHandler = () => {
      this.setState({ count: this.state.count + 1 })
    }

    const minusHandler = () => {
      this.setState({ count: this.state.count - 1 })
    }
    return (
      <div className="mots-center">
        <h4 className="mot-h4">MOTT'S</h4>
        <h3 className="mot-h3">Mott's Unsweetened Applesauce</h3>
        <p className="pack-size">
          Pack Size <span>24/16.90 oz</span>
        </p>
        <p className="lorem20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo
          at numquam libero.
        </p>
        <a className="mot-a" href="#">
          <i className="bx bx-cloud-download"></i>
          <p>Download Spec Sheets</p>
        </a>

        <hr className="hr1" />

        <div className="prices-flex">
          <div className="left-price">
            ${this.state.price * this.state.count} /Cs <span>($0.21/oz)</span>
          </div>
          <div className="right-price">$730 /Plt</div>
        </div>
        <div className="time">
          <p className="lead-time">
            Approax Lead Time: <span className="days">12 days</span>
          </p>
        </div>

        <div className="bts-flex">
          <div className="count-btn-flex">
            <p>  {this.state.count}</p>
            <div className="down-up">
              <button className="up"  onClick={PlusHandler}>
                <i className="bx bx-chevron-up"></i>
              </button>
              <button className="down" onClick={minusHandler}>
                <i className="bx bx-chevron-down"></i>
              </button>
            </div>
          </div>

          <button className="add">
            <i className="bx bx-shopping-bag"></i> Add to Card
          </button>
          <button>
            <i className="bx bx-cog"></i> Custom Pallet
          </button>
        </div>

        <span className="quantity">minimum pallet quantity 2</span>
        <p className="wishlist">
          <i className="bx bx-star"></i> Add to Wishlist
        </p>
      </div>
    );
  }
}
