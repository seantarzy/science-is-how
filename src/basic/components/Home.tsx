import { Fade } from "react-awesome-reveal";
import Button from "../../shared/components/Button";
import Rocket from '../../assets/house-rocket.png'
import MonkeyScope from '../../assets/monkey-scope.png'
export default function Home() {
  return (
    <div className="flex flex-col justify-between h-full items-center">
      <div className="mt-16">
      <Fade
      duration={3000}
      >
        <h1
        // want a cool 'sciency' font
        className="text-5xl font-bold"
        >Science is How?</h1>
      </Fade>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between">
        <Fade
        duration={3500}
        >
          <div className="w-64 md:w-96">
        <img
          src={Rocket}
          alt="Rocket"
          className="w-full"
        />

          </div>
        </Fade>

        <Fade
        duration={4000}
        >
        <div className="w-64 md:w-96">
        <img
          src={MonkeyScope}
          alt="MonkeyScope"
          className="w-full"
        />
          </div>
        </Fade>
      </div>
    <div className="mb-12"
    >
      <Button
        onClick={() => {
          window.location.href = "/russels-paradox";
        }}
      >
        <span>Russel's Paradox</span>
      </Button>

    </div>
    </div>
  );
}
