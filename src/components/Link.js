import React from "react";
import PropTypes from "prop-types";

export default function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

Link.propTypes = {
  page: PropTypes.string.isRequired
};
