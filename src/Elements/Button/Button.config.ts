import React from "react";


export enum ButtonVartian {
  NONE = 'NONE',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
}

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  childeren?: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant: ButtonVartian.NONE | ButtonVartian.PRIMARY | ButtonVartian.SECONDARY
}