import './index.css'
import {FaRegHeart} from 'react-icons/fa'

const ProductCard = props => {
  const {product} = props
  const {image, title} = product
  return (
    <li className="product-item">
      <img className="product-image" alt={title} src={image} />
      <div className="productcontent-container">
        <div className="title-heart-container">
          <h2 className="product-title">{title}</h2>
          <p className="product-description">
            Sign in or Create an account to see pricing
          </p>
        </div>
        <button type="button" className="heart-button">
          <FaRegHeart className="heart-icon" />
        </button>
      </div>
    </li>
  )
}
export default ProductCard
