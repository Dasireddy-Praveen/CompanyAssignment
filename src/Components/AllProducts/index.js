import {Component} from 'react'

import Header from '../Header'

import ProductsHeader from '../ProductsHeader'

import ProductCard from '../ProductCard'

import FooterSection from '../FooterSection'

import './index.css'

class AllProducts extends Component {
  state = {
    productsData: [],
  }

  componentDidMount() {
    this.getProductsData()
  }

  getProductsData = async () => {
    const url = 'https://fakestoreapi.com/products'

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({productsData: data})
    }
  }

  renderProducts = () => {
    const {productsData} = this.state
    console.log(productsData)
    return (
      <ul className="products-list-container">
        {productsData.map(each => (
          <ProductCard product={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <Header />
        <div className="home-shop-container">
          <h2 className="home-heading">HOME</h2>
          <h2 className="shop-heading">SHOP</h2>
        </div>
        <div>
          <h1 className="discover-main-heading">DISCOVER OUR PRODUCTS</h1>
          <p className="page-discreption">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <ProductsHeader />
        {this.renderProducts()}
        <FooterSection />
      </div>
    )
  }
}
export default AllProducts
