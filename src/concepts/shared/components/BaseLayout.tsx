import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Button from "../../../shared/components/Button";
import "./BaseLayout.css";
const stepLengthMap: Record<string, number> = {
  "russels-paradox": 5,
};

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
    }
    else if (step === 1) {
      navigate(`/${conceptPath}`);
    }
  };

  return (
    <div className="w-[90%] ">
      <div className="flex justify-center mt-4">
      <h1>{concept}</h1>
      </div>
    <div className="mt-4 flex flex-col gap-8 items-center h-full min-h-[100vh] text-center">
      <div className="h-64 md:min-h-[450px] md:max-h-700px flex flex-col w-full mt-16">
        <Outlet />
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
