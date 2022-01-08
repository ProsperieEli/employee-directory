import React from "react";
import { updateProfile } from "../../services/Profiles";
import { getProfile } from "../../services/Profiles";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import { useUser } from "../../components/context/UserContext";

export default function EditProfile() {
  const history = useHistory("");

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");

  const { user } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [changeProfile] = await updateProfile({
      name,
      email: user.email,
      bio,
      birthday,
    });
    if (changeProfile) {
      history.replace("/profile");
    }
  };

  useEffect(() => {
    getProfile().then((res) => {
      setName(res.name);
      setBirthday(res.birthday);
      setBio(res.bio);
    });
  }, []);

  return (
    <div>
      <h1>Update Your profile below!</h1>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{user.email}</p>
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
        <button>Save</button>
      </form>
    </div>
  );
}
