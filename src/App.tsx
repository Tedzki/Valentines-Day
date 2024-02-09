import { useState } from "react";
import "./App.css";
import myImage from "./assets/images/bear.gif";
import yesImage from "./asssets/images/yes.gif";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Bffr, rn babe",
      "Not me, not ron, yew!",
      "Maybe you misclicked",
      "Surely not?",
      "Just say yes, <--",
      "Give it another thought!",
      "but but but...",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <a
        href="https://github.com/dikshikaaa/Valentine-s-day-experiment"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      ></a>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://i.pinimg.com/originals/5a/96/98/5a9698bf5e591662be47616db01bae32.gif" />
            <div className="text-container">Ok yay! :)</div>
            <div className="text-container">
              It's a date, be ready by 9:00 PM on Valentine's Day!
            </div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src={myImage}
            />
            <h1 className="text-container">
              Dear Jenny, will you be my Valentine?
            </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
