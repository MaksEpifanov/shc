import ClipLoader from "react-spinners/PulseLoader";
import { StSpinner } from "./Spinner.styles";

const Spinner = () => (
  <StSpinner>
    <ClipLoader size={20} color="gray" margin={5} />
  </StSpinner>
);

export default Spinner;
