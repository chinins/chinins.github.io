import React from "react";

export const LinkListItem = props => {
  const {
    link: { href, label }
  } = props;
  console.log("href: ", href);

  return (
    <li>
      <a href={href} className="App-link">
        {label}
      </a>
    </li>
  );
};
