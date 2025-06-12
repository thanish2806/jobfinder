import React, { useEffect, useState, useRef } from "react";
import "./Profilecard.css";
import { auth, db, storage } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
import GlobalRanking from "./GlobalRanking";

const defaultPhoto = "./Profile.jpeg";

const ProfileCard = ({ onProfileSave }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    displayName: "",
    skills: "",
    photoURL: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [fontSize, setFontSize] = useState("24px");

  const nameRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setUser(authUser);
        const userId = authUser.uid;
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProfile({
            displayName:
              data.displayName || authUser.displayName || "User Name",
            skills: data.skills?.join(", ") || "",
            photoURL: data.photoURL || authUser.photoURL || defaultPhoto,
          });
        } else {
          setProfile({
            displayName: authUser.displayName || "User Name",
            skills: "",
            photoURL: authUser.photoURL || defaultPhoto,
          });
        }
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (nameRef.current) {
      const nameWidth = nameRef.current.offsetWidth;
      if (nameWidth > 100) {
        setFontSize("18px");
      } else {
        setFontSize("24px");
      }
    }
  }, [profile.displayName]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setProfile({
        ...profile,
        photoURL: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleSave = async () => {
    if (!user) return;

    const trimmedName = profile.displayName.trim();
    const trimmedSkills = profile.skills.trim();

    if (!trimmedName || !trimmedSkills) {
      alert("Display Name and Skills cannot be empty.");
      return;
    }

    let uploadedURL = profile.photoURL;

    try {
      if (imageFile) {
        const storageRef = ref(
          storage,
          `profileImages/${user.uid}/${imageFile.name}`
        );
        await uploadBytes(storageRef, imageFile);
        uploadedURL = await getDownloadURL(storageRef);
      }

      const docRef = doc(db, "users", user.uid);
      await setDoc(
        docRef,
        {
          displayName: trimmedName,
          skills: trimmedSkills
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s.length > 0),
          photoURL: uploadedURL,
        },
        { merge: true }
      );

      setEditing(false);
      setImageFile(null);

      if (onProfileSave) {
        onProfileSave();
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile. Try again.");
    }
  };

  return (
    <div className="profile-card">
      <img className="profile-banner" src="./banner.png" alt="banner" />
      <div className="user-profile-role">
        <div className="profile-edit">
          <img
            src={profile.photoURL || defaultPhoto}
            alt="User Profile"
            className="profile-avatar"
            onError={(e) => (e.target.src = defaultPhoto)}
          />
          <div className="username-div">
            <h2
              className="user-name"
              ref={nameRef}
              style={{ fontSize: fontSize }}
            >
              {profile.displayName}
            </h2>
          </div>
          <div className="edit-button-div">
            <button className="edit-button" onClick={() => setEditing(true)}>
              Edit
            </button>
          </div>
        </div>

        <div className="name-role">
          <p className="user-role">{profile.skills || "No skills added"}</p>
        </div>
      </div>

      <div className="score-card">
        <GlobalRanking />
      </div>

      {/* Editing Overlay Modal */}
      {editing && (
        <div className="edit-overlay">
          <div className="edit-modal">
            <h3>Edit Profile</h3>
            <input
              type="text"
              name="displayName"
              value={profile.displayName}
              onChange={handleChange}
              placeholder="Display Name"
              autoFocus
            />
            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="Skills (comma-separated)"
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
