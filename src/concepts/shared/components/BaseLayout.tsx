import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Button from "../../../shared/components/Button";
import "./BaseLayout.css";
import { Fade } from "react-awesome-reveal";
const stepLengthMap: Record<string, number> = {
  "russels-paradox": 5,
  "schrodingers-cat": 4
};

import AtomLogo from "../../../assets/atom-logo.png";

export const OUTLET_FADE_DURATION = 2000;

const BaseLayout = ({ concept }: { concept: string }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the current step based on the URL
  const step = parseInt(location.pathname.split("/").pop() || "") || 0;
  const conceptPath = location.pathname.split("/")[1];

  const stepLengh: number = stepLengthMap[conceptPath];

  const nextStep = () => {
    if (step < stepLengh) {
      navigate(`/${conceptPath}/${step + 1}`);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      navigate(`/${conceptPath}/${step - 1}`);
    } else if (step === 1) {
      navigate(`/${conceptPath}`);
    }
  };

  return (
    <div className="w-[90%]">
      <a href="/" className="absolute top-4 left-16">
        <img src={AtomLogo} alt="Atom logo" className="h-16 w-16" />
      </a>
      <div className="flex justify-center mt-4"></div>
      <div className="mt-4 flex flex-col gap-8 items-center h-full min-h-[100vh] text-center">
        <div className="h-96 md:min-h-[450px] md:max-h-700px flex flex-col w-full mt-16 overflow-scroll md:overflow-visible">
          <Fade duration={OUTLET_FADE_DURATION} key={`${concept}--${step}`}>
            <Outlet />
          </Fade>
        </div>
        <div className="mt-24 flex gap-16 justify-between items-center w-full">
          <div className="">
            {step > 0 && <Button onClick={prevStep}>Back</Button>}
          </div>
          <div className="">
            {step < stepLengh && <Button onClick={nextStep}>Next</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
