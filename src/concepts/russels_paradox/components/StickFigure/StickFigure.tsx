import { useIsMobile } from "../useIsMobile";
import "./StickFigure.css";


function SpeakBubble({speakBubble}: {speakBubble: string}) {

  return <div className="bubble-wrapper">
    <p
    className="bubble speech"
    >
      {speakBubble}
    </p>
    </div>
}

export function StickFigure({
  beard = false,
  razer = false,
  speakBubble,
  size = .8, 
}: {
  beard: boolean;
  razer?: boolean;
  speakBubble?: string;
  size?: number;
}) {
  const isMobile = useIsMobile();
  const mobileAdjustedSize = isMobile ? size * 0.5 : size;
  const scaleStyle = { transform: `scale(${mobileAdjustedSize})`, width: 170 * mobileAdjustedSize};
  return (
    <div className={`flex align-top md:align-bottom w-24 md:w-auto `}>
      <div className="wrapper md:top-36" style={scaleStyle}>
        <div className="head">

        {beard && <div className="beard"></div>}
        </div>

        <div className="torso"></div>
        <div className="leftarm"></div>
        <div className="rightarm">
          {razer && <div className="razer"></div>}
        </div>
        <div className="leftleg"></div>
        <div className="leftfoot"></div>
        <div className="rightleg"></div>
        <div className="rightfoot"></div>
      </div>
      <div className="" style={scaleStyle}>
        {speakBubble && <SpeakBubble speakBubble={speakBubble} />}
        </div>
    </div>
  );
  }
