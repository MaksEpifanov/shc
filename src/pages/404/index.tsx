import styled from "styled-components";
import { StWrapperSection } from "../../styles/common.styles";

const St404 = styled(StWrapperSection)`
  height: 60vh;
  font-size: 52px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NotFoundPage = () => (
  <St404>
    <h3>404</h3>
    <div>Page Not Found</div>
  </St404>
);

export default NotFoundPage;
