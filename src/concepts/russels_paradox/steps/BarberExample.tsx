import { Fade } from "react-awesome-reveal";
import Button from "../../../shared/components/Button";
import { StickFigure } from "../components/StickFigure/StickFigure";
import { FC, useEffect, useState } from "react";
import { OUTLET_FADE_DURATION } from "../../shared/components/BaseLayout";
import "./BarberExample.css";
function BeardedBarber({ ...props }) {
  return (
    <div>
      <StickFigure
        beard={true}
        speakBubble="I take a lot of pride in my work. I shave everyone in this town who doesn't shave themself"
        {...props}
      />
    </div>
  );
}

function BarberAppears() {
  return (
    <div>
      <StickFigure beard={true} size={1} />
    </div>
  );
}

function BeardedManOneApproaches() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure beard={true} size={0.8} />
      <StickFigure
        beard={true}
        size={0.75}
        speakBubble="Hey, I don't shave myself and I could use a shave."
      />
    </div>
  );
}

function BeardedManTwoApproaches() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure beard={true} size={0.8} />
      <StickFigure
        beard={true}
        size={0.75}
        speakBubble="Hey, I don't shave myself and I could use a shave."
      />
      <StickFigure
        beard={true}
        size={0.75}
        speakBubble="Hey, I ALSO don't shave myself and I could use a shave."
      />
    </div>
  );
}

function BarberShavesTheMenOne() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={true}
        size={0.8}
        razer={true}
        speakBubble="I'm going to shave you both now. That's the rule."
      />
      <StickFigure beard={true} size={0.75} speakBubble="" />
      <StickFigure beard={true} size={0.75} speakBubble="" />
    </div>
  );
}

function BarberShavesTheMenTwo() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure beard={true} size={0.8} razer={true} speakBubble="BUZZZZ" />
      <StickFigure beard={false} size={0.75} speakBubble="" />
      <StickFigure beard={true} size={0.75} speakBubble="" />
    </div>
  );
}

function BarberShavesTheMenThree() {
  return (
    <div className="flex justify-start md:justify-center">
      <BeardedBarber size={0.8} razer={true} speakBubble="And BUZZZZ" />
      <StickFigure beard={false} size={0.75} speakBubble="" />
      <StickFigure beard={false} size={0.75} speakBubble="" />
    </div>
  );
}

function BarberShavesTheMenFour() {
  return (
    <div className="flex justify-start md:justify-center">
      <BeardedBarber size={0.8} razer={true} speakBubble="" />
      <StickFigure
        beard={false}
        razer={true}
        size={0.6}
        speakBubble="Thanks! Smooth as a porpoise."
      />
      <StickFigure
        beard={false}
        razer={true}
        size={0.6}
        speakBubble="I'm gonna apply for that corporate job now."
      />
    </div>
  );
}

function BarbersDilemnaOne() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={true}
        razer={true}
        size={1}
        speakBubble="Now I shaved everyone in town who doesn't shave themself."
      />
    </div>
  );
}

function BarbersDilemnaTwo() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={true}
        razer={true}
        size={1}
        speakBubble="Oh Wait I forgot me! I don't shave myself, therefore I must shave myself."
      />
    </div>
  );
}

function BarberSelfShave() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure beard={true} size={1} razer={true} speakBubble="BUZZZZ" />
    </div>
  );
}

function BarberSelfShaveTwo() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={false}
        razer={true}
        size={1}
        speakBubble="Ah. Silky smooth."
      />
    </div>
  );
}

function BarbersDilemnaThree() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={false}
        razer={true}
        size={1}
        speakBubble="Oh no! I shaved myself. That means the barber in this town shouldn't shave me and IM the barber so therefore I shouldn't shave myself."
      />
    </div>
  );
}

function BarberBeardContentment() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={true}
        razer={true}
        size={1}
        speakBubble="there we are."
      />
    </div>
  );
}

function BarberWithBeardParadox() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={true}
        razer={true}
        size={1}
        speakBubble="Wait a minute...Since I now don't shave myself, I must shave myself."
      />
    </div>
  );
}

function BarberWaitAMinute() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={false}
        razer={true}
        size={1}
        speakBubble="Wait a minute..."
      />
    </div>
  );
}

function BarberRealizesNeedsShave() {
  return (
    <div className="flex justify-start md:justify-center">
      <StickFigure
        beard={true}
        razer={true}
        size={1}
        speakBubble="Oh shoot now I gotta shave myself."
      />
    </div>
  );
}

function InfiniteLoopError() {
  return (
    <div className="flex justify-center flex-col bg-red-400 px-4 rounded-lg text-white py-12  w-auto">
      <h1>Error: Max Call stack exceeded</h1>
      <br />
      <p>
        The barber is stuck in an infinite loop of shaving himself and then not
        shaving himself.
      </p>
    </div>
  );
}

const miniSteps: FC[] = [
  BarberAppears,
  BeardedManOneApproaches,
  BeardedManTwoApproaches,
  BarberShavesTheMenOne,
  BarberShavesTheMenTwo,
  BarberShavesTheMenThree,
  BarberShavesTheMenFour,
  BarbersDilemnaOne,
  BarbersDilemnaTwo,
  BarberSelfShave,
  BarberSelfShaveTwo,
  BarbersDilemnaThree,
  BarberBeardContentment,
  BarberWithBeardParadox
];

const infiniteLoopSteps: FC[] = [
  BarberSelfShave,
  BarberSelfShaveTwo,
  BarberWaitAMinute,
  BarberBeardContentment,
  BarberRealizesNeedsShave
];

const INFINITE_LOOP_LIMIT: number = 1500;
const INFINITE_LOOP_INITIAL_DELAY: number = 3000;
const INFINITE_LOOP_DELAY_MIN: number = 2;
const INFINITE_LOOP_DELAY_DECREMENT_PER_ROUND: number = 200;
const INFINITE_LOOP_DELAY_DECREMENT_PER_STEP: number = 100;
const DELAY_MULTIPLIER: number = 1.15;
export default function BarberExample() {
  const [currentMiniStep, setCurrentMiniStep] = useState<number>(0);
  const [currentInfiniteLoopStep, setCurrentInfiniteLoopStep] =
    useState<number>(0);
  const [totalInfiniteLoopStep, setTotalInfiniteLoopStep] = useState<number>(0);
  const [infiniteLoopDelay, setInfiniteLoopDelay] = useState<number>(
    INFINITE_LOOP_INITIAL_DELAY
  );
  const [
    infiniteLoopDelayDecrementPerRound,
    setInfiniteLoopDelayDecrementPerRound
  ] = useState<number>(INFINITE_LOOP_DELAY_DECREMENT_PER_ROUND);
  const isInfiniteLoopTime = currentMiniStep === miniSteps.length - 1;
  const isInfiniteLoopFinished = totalInfiniteLoopStep >= INFINITE_LOOP_LIMIT;

  useEffect(() => {
    let intervalId: number;

    if (isInfiniteLoopTime && !isInfiniteLoopFinished) {
      intervalId = setInterval(() => {
        if (
          currentInfiniteLoopStep % infiniteLoopSteps.length === 0 &&
          currentInfiniteLoopStep !== 0
        ) {
          setInfiniteLoopDelay((prevDelay) =>
            Math.max(
              prevDelay - infiniteLoopDelayDecrementPerRound,
              INFINITE_LOOP_DELAY_MIN
            )
          );
          setInfiniteLoopDelayDecrementPerRound(
            (prevDecrement) => prevDecrement * DELAY_MULTIPLIER
          );
        } else {
          setInfiniteLoopDelay((prevDelay) =>
            Math.max(
              prevDelay - INFINITE_LOOP_DELAY_DECREMENT_PER_STEP,
              INFINITE_LOOP_DELAY_MIN
            )
          );
        }
        setTotalInfiniteLoopStep((prevStep) => prevStep + 1);
        setCurrentInfiniteLoopStep(
          (prevStep) => (prevStep + 1) % infiniteLoopSteps.length
        );
      }, infiniteLoopDelay);
    }

    return () => clearInterval(intervalId);
  }, [
    currentInfiniteLoopStep,
    isInfiniteLoopTime,
    infiniteLoopDelay,
    isInfiniteLoopFinished,
    totalInfiniteLoopStep,
    infiniteLoopDelayDecrementPerRound
  ]);

  return (
    <div className="w-full">
      <h1 className="font-bold">The Barber Example</h1>
      <p>
        Consider a village with a single barber. The barber shaves all those,
        and only those, who do not shave themselves.
      </p>
      <div className="flex justify-center flex-col md:flex-row gap-2 mt-2">
        {!isInfiniteLoopTime && (
          <>
            <div className="align-middle self-center">
              {currentMiniStep > 0 && (
                <Button
                  onClick={() => setCurrentMiniStep(currentMiniStep - 1)}
                  hideIcon={true}
                >
                  Previous
                </Button>
              )}
            </div>
            <div className="block md:hidden align-middle self-center">
              <Button
                onClick={() => setCurrentMiniStep(currentMiniStep + 1)}
                hideIcon={true}
              >
                Ok
              </Button>
            </div>
            <Fade duration={OUTLET_FADE_DURATION + 1000}>
              <div className="">{miniSteps[currentMiniStep]({})}</div>
            </Fade>
            <div className="hidden md:block align-middle self-center">
              <Button
                onClick={() => setCurrentMiniStep(currentMiniStep + 1)}
                hideIcon={true}
              >
                Ok
              </Button>
            </div>
          </>
        )}
      </div>
      <div
        className={`flex ${
          !isInfiniteLoopFinished ? "justify-start" : "justify-center"
        } md:justify-center`}
      >
        {isInfiniteLoopTime && !isInfiniteLoopFinished ? (
          infiniteLoopSteps[currentInfiniteLoopStep]({})
        ) : isInfiniteLoopTime && isInfiniteLoopFinished ? (
          <div className="flex flex-col justify-center mt-16 w-[80%] md:w-1/3">
            <InfiniteLoopError />
            <br />
            <div className="flex justify-center gap-8">
              <Button onClick={() => window.location.reload()} hideIcon={false}>
                Reset
              </Button>
              <Button
                onClick={() => window.location.replace("/")}
                hideIcon={false}
              >
                Home
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
