import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, LayoutDashboard, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <ShoppingBag className="brand-icon" />
          <span>RisAquatic</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/dashboard" className="nav-link">
                  <LayoutDashboard size={18} /> Dashboard
                </Link>
              )}
              <div className="user-menu">
                <span className="welcome-text">Hi, {user.username}</span>
                <button onClick={handleLogout} className="btn-logout">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/register" className="btn-register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
