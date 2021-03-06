import React, { Fragment, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import IconClose from "../../../assets/images/icon-close.svg"
import { getContent, marking } from "../../../constants"

export const EventNavBar = () => {
  const navigate = useNavigate()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [request, setRequest] = useState(false)

  useEffect(() => {
    if (isLoading) navigate("/finish-marking")
  }, [isLoading])

  return (
    <div className="d_pw_navbar">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="d_pw_navbar_title">{marking.eventName}</div>
        <div className="d_pw_navbar_description">Укажи день и время когда тебе будет удобно</div>
      </div>
      <button className="d_pw_navbar_link" onClick={() => setIsOpenModal((prevState) => !prevState)} children="Далее" />
      {isOpenModal && (
        <Fragment>
          <div className="d_ep_overlay">
            <div className="d_pw_modal">
              <div className="stack" style={{ justifyContent: "center" }}>
                <button
                  className="d_ep_modal_invite_button_delete"
                  onClick={() => setIsOpenModal((prevState) => !prevState)}
                >
                  <img src={IconClose} alt="close" />
                </button>
              </div>
              <div className="d_pw_modal_title">Пожалуйста,представься</div>
              <input type="text" className="d_pw_modal_input" placeholder="Имя Фамилия" />
              <div className="d_pw_modal_input_label">Представься так, чтобы тебя точно узнал организатор</div>
              <button
                className="d_pw_modal_button"
                children={request ? "Отправляем" : "Завершить"}
                disabled={request}
                onClick={() => {
                  setRequest((prevState) => !prevState)
                  getContent(setIsLoading)
                }}
              />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}
