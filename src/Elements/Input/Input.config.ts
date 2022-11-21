import React from "react";

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
}