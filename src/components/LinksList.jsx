import React from "react";
import { LinkListItem } from "./LinkListItem";

const links = [
  { href: "https://github.com/chinins", label: "github" },
  { href: "https://www.linkedin.com/in/olga-chinina", label: "linkedin" },
  { href: "https://angel.co/olga-chinina", label: "angel list" }
];

export const LinksList = () => (
  <ul className="App-list">
    {links.map((link, key) => (
      <LinkListItem link={link} key={key} />
    ))}
  </ul>
);
