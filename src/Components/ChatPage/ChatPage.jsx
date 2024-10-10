import {
  RoseBox,
  ShinyButton,
  ShinyText,
  WaveText,
  RandomAnimate,
  useBatteryStatus,
  useColorScheme,
  useOnlineStatus,
  useLocalStorage,
  useUserCountry,
  useContinentContent,
  usePhotoCapture,
  SideText,
  Image,
} from "larose-js";
import React, { useState, useRef, useEffect } from "react";
import styles from "./ChatPage.module.css";
import Avatar from "../../assets/LaRose.webp";
import settingIcon from "../../assets/setting.svg";
import CameraIcon from "../../assets/CameraIcon.svg";

const ChatApp = () => {
  const [messages, setMessages] = useLocalStorage("chatMessages", []); // Use useLocalStorage to persist chat messages
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [detailsOpen, setDetailsOpen] = useState(false); // State to track the details toggle
  const { takePhoto, photo, videoRef, canvasRef, cameraError } =
    usePhotoCapture();
  const [CameraIconAction, setCameraIconAction] = useState("none");

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Function to get the current time in AM/PM format
  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 24h to 12h format, with 12 instead of 0
    const formattedTime = `${hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
    return formattedTime;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      const messageTime = getCurrentTime(); // Get current time when message is sent
      // Add user message to state and localStorage with the timestamp
      const newMessages = [
        ...messages,
        { sender: "user", text: newMessage, time: messageTime },
      ];
      setMessages(newMessages);
      setNewMessage("");
    }
  };

  const handleRemoveMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  const colorTheme = useColorScheme();
  useEffect(() => {
    document.body.style.backgroundColor =
      colorTheme === "dark" ? "rgb(28, 28, 28)" : "transparent";
  }, [colorTheme]);

  const isOnline = useOnlineStatus();

  // Battery Level
  const { level, charging } = useBatteryStatus();

  // UserCountry
  const { country, error } = useUserCountry();

  // useUserContinent
  const { continent } = useContinentContent();

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleToggleCameraIconActions = () => {
    setCameraIconAction(CameraIconAction === "none" ? "block" : "none");
  };

  return (
    <div className={styles["chat-app"]}>
      <div className={styles["chat-header"]}>
        <div className={styles["header-left"]}>
          <Image
            height={200}
            width={200}
            loading
            src={Avatar}
            alt="Avatar"
            RoseName={styles.avatar}
          />
          <RoseBox edit={{ color: "black", fontWeight: "bold" }}>
            Magia ChatBot <span>{isOnline ? " Online " : " Offline "}</span>
          </RoseBox>
        </div>
        <div className={styles["header-right"]}>
          <details onToggle={() => setDetailsOpen((prev) => !prev)}>
            <summary>
              <Image loading RoseName={styles.settingIcon} src={settingIcon} />
            </summary>
          </details>
          <details onClick={handleToggleCameraIconActions}>
            <summary>
              <Image loading RoseName={styles.settingIcon} src={CameraIcon} />
            </summary>
          </details>
        </div>
      </div>
      <div className={styles["chat-body"]}>
        <div style={{ fontSize: "1.2rem", textAlign: "start" }}>
          {messages.map((message, index) => (
            <div
              id={styles.SMS}
              key={index}
              className={styles[`message ${message.sender}`]}
            >
              <RandomAnimate edit={{ all: "none" }}>
                {message.text}
                {"  "}
              </RandomAnimate>
              <div className={styles["message-time"]}>
                <div>{message.time}</div>
                <SideText direction="right">
                  <button
                    onClick={() => handleRemoveMessage(index)}
                    className={styles["message-remove-button"]}
                  >
                    X
                  </button>
                </SideText>
              </div>
            </div>
          ))}
          {loading && (
            <div className={styles["message ai"]}>
              <WaveText>Loading...</WaveText>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className={styles["chat-input"]}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <ShinyButton edit={{ height: "3rem", width: "10rem" }}>
          <ShinyText edit={{ color: "white" }}>Send</ShinyText>
        </ShinyButton>
      </form>
      {/* Conditional pop-up based on details open state */}
      {detailsOpen && (
        <RoseBox RoseName={styles.infopop} autoLayout AutoHandling>
          <div>Your Country is: {country}</div>
          <div>
            Your continent is {continent || "Determining your location..."}
          </div>
          <div>
            Battery:{" "}
            {level !== null ? (
              <div>
                <p>Battery Level: {Math.round(level * 100)}%</p>
                <p>{charging ? "Charging" : "Not Charging"}</p>
              </div>
            ) : (
              <p>
                Battery Status API not supported or unable to retrieve battery
                status.
              </p>
            )}
          </div>
        </RoseBox>
      )}
      {/* Take Photo POPUP */}
      <div>
        {cameraError ? (
          <p>{cameraError}</p>
        ) : (
          <div className={styles.videoMask}>
            <video
              style={{ display: CameraIconAction }}
              className={styles.TakeVideo}
              ref={videoRef}
            />
          </div>
        )}
      </div>  
    </div>
  );
};

export default ChatApp;
