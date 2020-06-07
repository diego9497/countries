import React, { useCallback } from "react";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { Container, Content, Dark } from "./styles";
import { connect } from "react-redux";
import { changeDarkMode } from "../../actions/theme";
const Header = ({ darkMode, changeDarkMode }) => {
  return (
    <Container>
      <div className="max-width">
        <Content>
          <h1>Where in the world?</h1>
          <Dark>
            <input type="checkbox" id="dark-mode" />
            <label
              htmlFor="dark-mode"
              onClick={() => changeDarkMode(!darkMode)}
            >
              {darkMode ? <FaMoon /> : <FaRegMoon />}
              <span>Dark mode</span>
            </label>
          </Dark>
        </Content>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({ darkMode: state.darkMode });

const mapDispatchToProps = {
  changeDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header));
