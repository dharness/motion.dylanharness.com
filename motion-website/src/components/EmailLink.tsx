import React, { useEffect, useState } from "react";
import { EMAIL_ADDRESS } from "../utils";

export function EmailLink(props: any) {
  const { children } = props;
  const [emailAddress, setEmailAddress] = useState("");
  useEffect(() => setEmailAddress(EMAIL_ADDRESS), []);
  return (
    <a href={"mailto:" + emailAddress} target="_blank">
      {children && children}
    </a>
  );
}
