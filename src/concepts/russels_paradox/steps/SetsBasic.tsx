import { FC, useState } from "react";
import PetSet from "../components/Set/PetSet";
import Button from "../../../shared/components/Button";
import { Fade } from "react-awesome-reveal";


function PlaceHolder(){
  return (
    <div className="">
      <p>
      </p>
    </div>
  );

}

function CatSet() {
  return (
    <Fade
      duration={2000}
    >
      <p>
        Here is a basic set of cats:
      </p>
      <br />
      <PetSet set="Cat" key={"cat"} />
    </Fade>
  );
}

function DogSet() {
  return (
    <Fade
      duration={2000}
    >
      <p>
        Here is a basic set of dogs:
      </p>
      <br />
      <PetSet set="Dog" key={"dog"} />
    </Fade>
  );
}

function BothSet() {
  return (
    <Fade
      duration={2000}
    >
      <p>
        Here is a basic set of cats and dogs:
      </p>
      <br />
      <PetSet set="Both" key={"both"} />
    </Fade>
  );
}
const miniSteps: FC[] = [PlaceHolder,CatSet, DogSet, BothSet];
export default function SetsBasic() {
  const [currentMiniStep, setCurrentMiniStep] = useState<number>(0);

  return (
    <div className="w-full">
      <h1 className="font-bold">Sets</h1>
      <br />
      <br />
      <p>
        A set is a collection of distinct objects, considered as an object in
        its own right.
      </p>
      <p>
        Sets are one of the most fundamental concepts in mathematics. They are
        used to define many other mathematical objects, such as numbers and
        functions.
      </p>
      <p>
        The objects in a set are called elements or members of the set. We write
        <code>{`{1, 2, 3}`}</code> to denote a set with elements 1, 2, and 3.
      </p>
      <br />
      <div className="h-auto md:h-64">

      {miniSteps[currentMiniStep]({})}
      </div>
      <br />
      <div className="flex justify-between">
        <div>
        {currentMiniStep > 0 && (
        <Button
          hideIcon={true}
          onClick={() =>
            setCurrentMiniStep((prevStep) =>
              prevStep - 1
            )
          }
        >
          Previous
        </Button>
        )}
        </div>
        <div>
        {currentMiniStep < miniSteps.length - 1 && (
        <Button
          hideIcon={true}
          onClick={() =>
            setCurrentMiniStep((prevStep) =>
               prevStep + 1
            )
          }
        >
          Ok
        </Button>
        )}
        </div>
        </div>  
    </div>
  );
}
