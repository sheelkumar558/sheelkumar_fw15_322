import React from "react";
interface HederProps {
  label?: string;
  children?:JSX.Element | JSX.Element[];
}
const Header = ({ label = "Counter",children }: HederProps) => {
  return <>
    <h1>{label}</h1>
    {children}
  </>;
};

export default Header;
