import React, { useCallback } from "react";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { Container, Content, Dark } from "./styles";
import { connect } from "react-redux";
import { changeTheme } from "../../features/theme/themeSlice";
const Header = ({ darkMode, changeTheme }) => {
  return (
    <Container>
      <div className="max-width">
        <Content>
          <h1>Where in the world?</h1>
          <Dark>
            <input type="checkbox" id="dark-mode" />
            <label htmlFor="dark-mode" onClick={() => changeTheme(!darkMode)}>
              {darkMode ? <FaMoon /> : <FaRegMoon />}
              <span>Dark mode</span>
            </label>
          </Dark>
        </Content>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({ darkMode: state.theme.darkMode });

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header));
