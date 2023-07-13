import React from "react";

export const Footer = () => {
  return (
    <footer className="position-absolute bottom-0 w-100 mx-auto text-center">
      <p>
        Copyright Reserved <span>{new Date().toJSON().slice(0, 4)}</span>
      </p>
    </footer>
  );
};
