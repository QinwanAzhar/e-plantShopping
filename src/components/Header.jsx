import React from 'react';
import './Navbar.css';

function Header({ cartItemCount, onHomeClick, onPlantsClick, onCartClick, activePage }) {
  return (
    <header className="navbar">
      <button type="button" className="navbar-brand" onClick={onHomeClick}>
        <span className="navbar-brand-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="28" height="28">
            <path d="M20 34 C20 22 20 12 20 6" stroke="#F6F3EA" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M20 18 C12 16 8 10 8 6 C16 6 20 12 20 18" fill="#E3A857" />
            <path d="M20 22 C28 20 32 14 32 10 C24 10 20 16 20 22" fill="#7CA982" />
          </svg>
        </span>
        Paradise Nursery
      </button>
      <nav className="navbar-links">
        <button type="button" className={activePage === 'home' ? 'active' : ''} onClick={onHomeClick}>
          Home
        </button>
        <button type="button" className={activePage === 'plants' ? 'active' : ''} onClick={onPlantsClick}>
          Plants
        </button>
        <button type="button" className={activePage === 'cart' ? 'active' : ''} onClick={onCartClick}>
          <span className="cart-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M3 4h2l2.4 12.4A2 2 0 0 0 9.36 18H18a2 2 0 0 0 1.96-1.6L21.5 8H6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="21" r="1.6" fill="currentColor" />
              <circle cx="18" cy="21" r="1.6" fill="currentColor" />
            </svg>
            <span className="cart-count" data-testid="cart-count">{cartItemCount}</span>
          </span>
          <span className="navbar-link-label">Cart</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
