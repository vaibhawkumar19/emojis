import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😉": "winking",
  "😘": "kiss",
  "😳": "disbelief",
  "😔": "sad",
  "🤔": "thinking",
  "❤️": "love",
  "😴": "sleeping",
  "😑": "annoyance",
  "😕": "confused",
  "😠": "angry",
  "🤓": "nerd"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var insertedEmoji = event.target.value;

    var meaning = emojiDictionary[insertedEmoji];

    if (meaning === undefined) {
      meaning = "Sorry, We don't have this in our database";
    }
    // ,output
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    // output
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Know your emotions</h1>

      <input
        placeholder="Enter the emoji to know it's emotions"
        onChange={emojiInputHandler}
      />

      <h2 style={{ color: "grey" }}> {meaning} </h2>

      <h3> List of Emojis </h3>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
