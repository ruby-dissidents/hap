import React from "react"
import { Link } from "react-router-dom"

import logo from "../../../assets/images/logo_white.svg"
import iconPlus from "../../../assets/images/icon-plus.svg"
import { Button } from "../../button"

export const MainNavBar = () => (
  <div className="d_pw_navbar">
    <Link to="/">
      <img src={logo} alt="hap" />
    </Link>
    <div className="stack">
      <Button children="Войти" className="d_pw_navbar_link_button" link />
      <Button
        children="Новая встреча"
        iconRight={<img src={iconPlus} alt="Icon plus" />}
        className="d_pw_navbar_button"
      />
    </div>
  </div>
)
