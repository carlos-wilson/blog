import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import "./footer.css";

export function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} Dor Shinar, Built with
      {` `}
      <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink>
    </footer>
  );
}
