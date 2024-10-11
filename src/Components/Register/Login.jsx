import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [formType, setFormType] = useState("login");
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const switchForm = (type) => {
    setFormType(type);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  };

  const handleSignUp = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (profilePic) {
      formData.append("profilePic", profilePic);
    }

    try {
      const response = await fetch(
        "https://dashboardchatapp-production.up.railway.app/api/v1/auth/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const contentType = response.headers.get("content-type");
      let result;

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        result = await response.text();
      }

      if (response.ok) {
        console.log("Registration Successful:", result);

        setFormType("login");
      } else {
        console.error("Registration Failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.container}>
      {formType === "login" && (
        <div className={styles.form}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
          <p>
            Don't have an account?{" "}
            <span className={styles.link} onClick={() => switchForm("signup")}>
              Sign Up
            </span>
          </p>
          <p>
            Forgot your password?{" "}
            <span className={styles.link} onClick={() => switchForm("forgot")}>
              Reset Password
            </span>
          </p>
        </div>
      )}

      {formType === "signup" && (
        <div className={styles.form}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />

          <div className={styles.profilePicContainer}>
            {profilePic ? (
              <img
                src={URL.createObjectURL(profilePic)}
                alt="Profile Preview"
                className={styles.profilePic}
              />
            ) : (
              <p>No profile picture uploaded</p>
            )}
            <input
              type="file"
              onChange={handleProfilePicChange}
              className={styles.fileInput}
            />
          </div>

          <button className={styles.button} onClick={handleSignUp}>
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <span className={styles.link} onClick={() => switchForm("login")}>
              Login
            </span>
          </p>
        </div>
      )}

      {formType === "forgot" && (
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <input type="email" placeholder="Email" className={styles.input} />
          <button className={styles.button}>Send Reset Link</button>
          <p>
            Remembered your password?{" "}
            <span className={styles.link} onClick={() => switchForm("login")}>
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
