import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "./Profilecard";
import ProfilePerformance from "./ProfilePerformance";
import Footer from "../components/Footer";
import MainLoader from "../components/Loader";
import "./Dashboard.css";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [profileUpdated, setProfileUpdated] = useState(false);

  // Simulate fetching user info (replace with real logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Reload page after profile update
  useEffect(() => {
    if (profileUpdated) {
      window.location.reload();
    }
  }, [profileUpdated]);

  return (
    <div className="dashboard-main">
      <div className="dashboard">
        <Navbar />
        <main>
          {loading ? (
            <MainLoader />
          ) : (
            <div className="dashboard-grid">
              <div className="dasboard-profile-progress">
                <ProfileCard onProfileSave={() => setProfileUpdated(true)} />
                <ProfilePerformance />
              </div>
              {/* Optional: Add more components here */}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
