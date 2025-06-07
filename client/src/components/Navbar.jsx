import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Pen,
  PaperclipIcon,
  LogIn,
  UserPlus,
  LogOut,
  Code2Icon,
} from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const defaultPhoto = "/Profile.jpeg";

  const HandleProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userId = currentUser.uid;
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        const photoURLFromGoogle = currentUser.photoURL;
        const photoURLFromFirestore = docSnap.exists() ? docSnap.data().photoURL : null;

        setUser({
          ...currentUser,
          displayName: currentUser.displayName || "User",
          photoURL: photoURLFromFirestore || photoURLFromGoogle || defaultPhoto,
        });

        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
      setLoadingAuth(false); // ✅ Stop loading after auth state is determined
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinks = [
    { name: "Home", path: "/home", icon: <Home size={18} /> },
    { name: "Courses", path: "/courses", icon: <Code2Icon size={18} /> },
    { name: "Jobs", path: "/jobs", icon: <BookOpen size={18} /> },
    { name: "MCQ", path: "/mcq", icon: <Pen size={18} /> },
    { name: "Resume", path: "/resume", icon: <PaperclipIcon size={18} /> },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="logo">
            <img src="/logo.png" alt="Logo" />
            <span className="brand-name">SKILL NEST</span>
          </Link>

          <div className="desktop-links">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="nav-link">
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {!loadingAuth && (
              isLoggedIn ? (
                <>
                  <div
                    className="profile"
                    onClick={HandleProfile}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={user?.photoURL || defaultPhoto}
                      alt="Profile"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultPhoto;
                      }}
                    />
                  </div>
                  <button className="btn logout" onClick={handleLogout}>
                    <LogOut size={18} />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn login">
                    <LogIn size={18} />
                    Login
                  </Link>
                  <Link to="/signup" className="btn signup">
                    <UserPlus size={18} />
                    Sign Up
                  </Link>
                </>
              )
            )}
          </div>

          <div className="icon-wrapper" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="close-icon" onClick={() => setIsOpen(false)}>
            <X size={26} />
          </div>
        </div>

        <div className="drawer-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}

          {!loadingAuth && (
            isLoggedIn ? (
              <>
                <div className="profile" onClick={HandleProfile}>
                  <img
                    src={user?.photoURL || defaultPhoto}
                    alt="Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultPhoto;
                    }}
                  />
                </div>
                <button className="btn logout" onClick={handleLogout}>
                  <LogOut size={18} />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn login">
                  <LogIn size={18} />
                  Login
                </Link>
                <Link to="/signup" className="btn signup">
                  <UserPlus size={18} />
                  Sign Up
                </Link>
              </>
            )
          )}
        </div>
      </div>

      {isOpen && (
        <div className="drawer-backdrop" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
