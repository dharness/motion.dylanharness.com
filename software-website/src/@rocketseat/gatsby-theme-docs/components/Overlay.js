/* @jsx jsx */
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";

export default function Overlay({ isMenuOpen, ...rest }) {
  return (
    <div
      className="overlay"
      css={css`
        background: red;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.8);
        display: ${isMenuOpen ? `block` : `none`};
      `}
      aria-label="Close menu"
      {...rest}
    />
  );
}

Overlay.propTypes = {
  isMenuOpen: PropTypes.bool,
};

Overlay.defaultProps = {
  isMenuOpen: false,
};
