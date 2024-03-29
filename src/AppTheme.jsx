import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
  return (
    // 엄브렐라를 씌운다.
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  // 사용하고 싶은 자식컴포넌트 어디에서라도 useContext 사용해 아래와 같이 사용가능.
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:{' '}
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
