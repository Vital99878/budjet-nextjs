'use client'

import'./Button.css';
import {ButtonHTMLAttributes} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  function switchTheme() {
    document.body.classList.toggle('dark')
  }
  return <button {...props} onClick={switchTheme} className={'wrapper'}>switchTheme</button>;
}
