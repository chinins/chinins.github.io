import React from "react";

export const LinkListItem = props => {
  const {
    link: { href, label }
  } = props;

  return (
    <li>
      <a href={href} className="App-link">
        {label}
      </a>
    </li>
  );
};
