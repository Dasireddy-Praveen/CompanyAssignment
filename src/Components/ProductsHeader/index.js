import {Component} from 'react'

import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'

import './index.css'

class ProductsHeader extends Component {
  render() {
    return (
      <div>
        <div className="productsheader-sub-container">
          <hr />
          <div className="filter-recomdations-container">
            <div className="arrow-items-container">
              <h2 className="items-heading">3425 ITEMS</h2>
              <div className="arrowicon-container">
                <MdOutlineKeyboardArrowLeft className="arrow-icon" />
                <button type="button" className="show-button">
                  SHOW FILTER
                </button>
              </div>
            </div>
            <h2 className="filter-heading">FILTER</h2>
            <hr className="hr-line" />
            <div>
              <span className="">RECOMMENDED</span>
              <select className="recomdations">
                <option className="options" value="">
                  RECOMMENDED
                </option>
                <option value="Newest first">NEWEST FIRST</option>
                <option value="popular">POPULAR</option>
                <option value="Price : high to low">PRICE : HIGH TO LOW</option>
                <option value="Price : low to high">PRICE : LOW TO HIGH</option>
              </select>
            </div>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}
export default ProductsHeader
