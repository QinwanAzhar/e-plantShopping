import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import { plantArt } from './components/PlantArt';
import { categories } from './plantData';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) =>
    state.cart.items.some((item) => item.name === plant.name)
  );
  const Art = plantArt[plant.key];

  const handleAddToCart = () => {
    dispatch(addItem({ name: plant.name, image: plant.key, cost: plant.cost }));
  };

  return (
    <li className="plant-card">
      <div className="plant-thumb">
        <Art />
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">${plant.cost.toFixed(2)}</span>
          <button
            type="button"
            className="btn btn-add"
            onClick={handleAddToCart}
            disabled={inCart}
          >
            {inCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </li>
  );
}

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const handleCartClick = () => setShowCart(true);
  const handlePlantsClick = () => setShowCart(false);
  const handleContinueShopping = () => setShowCart(false);

  if (showCart) {
    return (
      <CartItem
        onHomeClick={onHomeClick}
        onPlantsClick={handlePlantsClick}
        onContinueShopping={handleContinueShopping}
      />
    );
  }

  return (
    <div className="page">
      <Header
        cartItemCount={totalItems}
        onHomeClick={onHomeClick}
        onPlantsClick={handlePlantsClick}
        onCartClick={handleCartClick}
        activePage="plants"
      />
      <main className="product-page">
        <header className="product-page-header">
          <p className="section-eyebrow">The Catalog</p>
          <h1>Find your next houseplant</h1>
          <p className="section-lede">
            Six favorites across three categories, grown in-house and ready to ship.
          </p>
        </header>

        {categories.map((category) => (
          <section className="category-block" key={category.name}>
            <div className="category-heading">
              <h2>{category.name}</h2>
              <p>{category.blurb}</p>
            </div>
            <ul className="plant-grid">
              {category.plants.map((plant) => (
                <ProductCard plant={plant} key={plant.key} />
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
