import { useContext } from "react";
import "./Reaction.css";
import * as reactionService from "../../../../../../services/ReactionService";
import { PostContext } from "../../../../../../helpers/contexts/PostContext";
import { POST_REACTION } from "../../../../../../helpers/constants";

export const Reaction = ({
  reactionType,
  reactionKind,
  icon,
  active,
  reactionTypeState,
  setReactionType
}) => {

  const {entityId, likes, setLikes} = useContext(PostContext)

  const sendReaction = () => {
    if (reactionKind === POST_REACTION) {
      reactionService
        .togglePostReaction({ reactionType: reactionType, entityId: entityId })
        .then((result) => {
          if (reactionTypeState === reactionType) {
            setReactionType("");
            setLikes(likes - 1);
          } else {
            setReactionType(reactionType);
            if (!result.data.update) {
              setLikes(likes + 1);
            }
          }
        });
    }
  };

  return (
    <span className={active ? "active" : "icon"} onClick={sendReaction}>
      {icon}
    </span>
  );
};
