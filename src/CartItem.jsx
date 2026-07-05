import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import { plantArt } from './components/PlantArt';
import { updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

function CartRow({ item, onIncrement, onDecrement, onRemove }) {
  const Art = plantArt[item.image];
  const lineTotal = item.cost * item.quantity;

  return (
    <li className="cart-row">
      <div className="cart-row-thumb">
        <Art />
      </div>
      <div className="cart-row-details">
        <h3>{item.name}</h3>
        <p className="cart-row-unit">${item.cost.toFixed(2)} each</p>
      </div>
      <div className="cart-row-qty">
        <button
          type="button"
          className="qty-btn"
          onClick={() => onDecrement(item)}
          aria-label={`Decrease quantity of ${item.name}`}
        >
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          type="button"
          className="qty-btn"
          onClick={() => onIncrement(item)}
          aria-label={`Increase quantity of ${item.name}`}
        >
          +
        </button>
      </div>
      <div className="cart-row-total">${lineTotal.toFixed(2)}</div>
      <button
        type="button"
        className="cart-row-delete"
        onClick={() => onRemove(item.name)}
        aria-label={`Remove ${item.name} from cart`}
      >
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m2 0-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 7h14Z"
            fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </li>
  );
}

function CartItem({ onHomeClick, onPlantsClick, onContinueShopping }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalQuantity = () =>
    items.reduce((sum, item) => sum + item.quantity, 0);

  const calculateTotalAmount = () =>
    items.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleCheckoutShopping = () => {
    alert('Checkout is coming soon — thanks for your patience!');
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    onContinueShopping();
  };

  return (
    <div className="page">
      <Header
        cartItemCount={calculateTotalQuantity()}
        onHomeClick={onHomeClick}
        onPlantsClick={onPlantsClick}
        onCartClick={() => {}}
        activePage="cart"
      />
      <main className="cart-page">
        <header className="cart-page-header">
          <p className="section-eyebrow">Your Cart</p>
          <h1>Ready to bring some green home?</h1>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty. Time to go find a new plant friend.</p>
            <button type="button" className="btn btn-primary" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <div>
                <span className="cart-summary-label">Items</span>
                <span className="cart-summary-value">{calculateTotalQuantity()}</span>
              </div>
              <div>
                <span className="cart-summary-label">Total</span>
                <span className="cart-summary-value">${calculateTotalAmount().toFixed(2)}</span>
              </div>
            </div>

            <ul className="cart-list">
              {items.map((item) => (
                <CartRow
                  item={item}
                  key={item.name}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onRemove={handleRemove}
                />
              ))}
            </ul>

            <div className="cart-actions">
              <button type="button" className="btn btn-secondary" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button type="button" className="btn btn-primary" onClick={handleCheckoutShopping}>
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
