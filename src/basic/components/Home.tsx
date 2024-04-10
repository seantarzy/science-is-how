import { Fade } from "react-awesome-reveal";
import Button from "../../shared/components/Button";
export default function Home() {
  return (
    <div>
      <Fade>
        <h1>Science is How?</h1>
      </Fade>

      <Button
        onClick={() => {
          window.location.href = "/russels-paradox";
        }}
      >
        <span>Russel's Paradox</span>
      </Button>
    </div>
  );
}
