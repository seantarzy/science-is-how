import { useState } from "react";
import Button from "../../../shared/components/Button";
import PartyCat from "../../../assets/party-cat.png";
import DeadCat from "../../../assets/dead-cat.png";
import ZombieCat from "../../../assets/zombie-cat.png";
import BoxOpen from "../../../assets/box-open.png";
import BoxClosed from "../../../assets/box-closed.png";
import "./CatAnalogyInteractive.css";
function PartyCatImage() {
  return (
    <div>
      <h2>The cat is alive! 🎉🎉🎉</h2>
      <br />
      <img src={PartyCat} alt="Party Cat" className="w-48 h-48 party" />
    </div>
  );
}

function DeadCatImage() {
  return (
    <div>
      <h2>The cat is dead! 💀💀💀</h2>
      <br />
      <img src={DeadCat} alt="Dead Cat" className="w-48 h-48 dead" />
    </div>
  );
}

function ZombieCatImage() {
  return (
    <div>
      <h2>The cat is both dead and alive! 🧟‍♂️</h2>
      <br />
      <img src={ZombieCat} alt="Zombie Cat" className="w-48 h-48 zombie" />
    </div>
  );
}

export default function CatAnalogyInteractive() {
  const [catState, setCatState] = useState<"alive" | "dead" | "deadAndAlive">(
    "deadAndAlive"
  );

  const handleCatCoinFlip = () => {
    const random = Math.random();
    if (random < 0.5) {
      setCatState("alive");
    } else {
      setCatState("dead");
    }
  };

  return (
    <div className="w-full">
      <h1 className="font-bold">Cat Analogy Interactive</h1>
      <br />
      <br />
      <p>
        Let's play around with this idea! Below is an opaque box with the cat
        and the radioactive atom inside. You can click on the box to open it and
        see if the cat is alive or dead.
      </p>
      <br />
      <br />
      <br />
      {catState === "deadAndAlive" ? (
        <Button
          onClick={() => {
            handleCatCoinFlip();
          }}
        >
          Open Box
        </Button>
      ) : (
        <Button onClick={() => setCatState("deadAndAlive")}>
          Close Box (Reset)
        </Button>
      )}

      <br />
      <br />
      <br />
      <div className="flex justify-between">
        <div className={`relative w-48 h-48`} onClick={() => {}}>
          {catState === "dead" && <div className="stench"></div>}
          {catState === "alive" && <div className="meow">Meow!</div>}
          <img
            src={catState === "deadAndAlive" ? BoxClosed : BoxOpen}
            alt="Cat State"
            className={`box-image ${catState}`}
          />
        </div>
        <div className="cat relative">
          {
            {
              alive: <PartyCatImage />,
              dead: <DeadCatImage />,
              deadAndAlive: (
                <div className="flex flex-col items-center">
                  <ZombieCatImage />
                </div>
              )
            }[catState]
          }
        </div>
      </div>
    </div>
  );
}
