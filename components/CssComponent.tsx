import React from "react";
import { css } from "@emotion/css";

const color = "white";

export default function CssComponent() {
  return (
    <div
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      This my @emotion/css component.
    </div>
  );
}
