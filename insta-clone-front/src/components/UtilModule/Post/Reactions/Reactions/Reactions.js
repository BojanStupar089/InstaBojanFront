import { Reaction } from "./Reaction/Reaction";
import "./Reactions.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import { useEffect, useState, useContext } from "react";
import { myPostReaction } from "../../../../../services/ReactionService";
import { REACTIONS } from "../../../../../helpers/constants";
import { PostContext } from "../../../../../helpers/contexts/PostContext";

const ICONS = [
  <ThumbUpOutlinedIcon />,
  <ThumbDownAltOutlinedIcon />,
  <SentimentVerySatisfiedOutlinedIcon />,
  <SentimentVeryDissatisfiedOutlinedIcon />,
  <SentimentDissatisfiedOutlinedIcon />,
];

export const Reactions = ({ reactionKind }) => {
  const [reactionType, setReactionType] = useState("");

  const { entityId } = useContext(PostContext);

  useEffect(() => {
    myPostReaction(entityId).then((result) => {
      setReactionType(result.data);
    });
  }, []);

  return (
    <div className="custom-reactions">
      {REACTIONS.map((type, id) => (
        <Reaction key={id}
          reactionType={type}
          reactionKind={reactionKind}
          icon={ICONS[id]}
          active={reactionType === type}
          reactionTypeState={reactionType}
          setReactionType={setReactionType}
        />
      ))}
    </div>
  );
};
