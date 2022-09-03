import LoginValidate from "./LoginValidate";

import {
  StLoginBlock,
  StLoginPage,
  StBackdropBlock,
  StTitle,
} from "./LoginPage.styles";

const LoginPage = () => (
  <StLoginPage>
    <StBackdropBlock>
      <StLoginBlock>
        <StTitle>Simple Hotel Check</StTitle>
        <LoginValidate />
      </StLoginBlock>
    </StBackdropBlock>
  </StLoginPage>
);

export default LoginPage;
