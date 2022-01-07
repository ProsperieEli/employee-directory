import React from "react";
import { createProfile } from "../../services/Profiles";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProfile } from "../../services/Profiles";

export default function ProfileCreate() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [profile, setProfile] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    const [newProfile] = await createProfile({ name, email, bio, birthday });
    setProfile(newProfile);
    history.replace("/profile");
  };

  useEffect(() => {
    getProfile().then((res) => setProfile(res));
  }, []);

  return (
    <div>
      <h1>Create your own profile down below!</h1>

      {!profile.id ? (
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Birthday</label>
          <input
            type="date"
            id="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <label>Bio</label>
          <textarea
            id="setBio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <button>Submit</button>
        </form>
      ) : (
        <div>
          {profile.name}
          {profile.email}
          {profile.birthday}
          {profile.bio}
          <Link to="/edit-profile">
            <button>Edit</button>
          </Link>
        </div>
      )}
    </div>
  );
}
