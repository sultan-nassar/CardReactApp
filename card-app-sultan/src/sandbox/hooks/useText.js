import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function useText(intialvalue = "please write here...") {
  const [text, setText] = useState(intialvalue);
  const navigate = useNavigate();
  const update = () => {
    onchange = ({ target }) => {
      setText(target.value);
    };
  };
  const reset = () => setText(intialvalue);
  const cancel = () => navigate(ROUTES.ROOT);
  const print = () => console.log(text);

  return { text, update, reset, cancel, print };
}
