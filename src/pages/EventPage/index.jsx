import React, { Fragment, useState } from "react"
import { useParams } from "react-router-dom"

import { eventMdSW } from "../../constants"
import { ButtonEvent, CardEvent, ModalInvite, ModalUser, Statistics } from "./fragment"
import "./_event_page.styles.css"

const EventPage = () => {
  const { id: paramsId } = useParams()
  const [isOpenModalInvite, setIsOpenModalInvite] = useState(false)
  const [isOpenModalUsers, setIsOpenModalUsers] = useState(false)
  const [numberStatistic, setNumberStatistic] = useState(0)
  const event = eventMdSW[paramsId]
  const eventStatisticsEvent = event.statisticsEvent[numberStatistic]

  return (
    <Fragment>
      <div className="d_ev_container">
        <div className="d_ev_title">{event.title}</div>
        <div className="stack">
          {event.events.map(({ title, active, number, users }, index) => (
            <CardEvent
              title={title}
              setIsOpenModalInvite={() => {
                setNumberStatistic(index)
                setIsOpenModalInvite((prevState) => !prevState)
              }}
              active={active}
              number={number}
              users={users}
              key={title}
            />
          ))}
        </div>
        <Statistics statistics={event.statistics} />
        <ButtonEvent setIsOpenModalUsers={() => setIsOpenModalUsers((prevState) => !prevState)} />
      </div>
      <ModalInvite
        isOpen={isOpenModalInvite}
        setIsOpenModalInvite={() => setIsOpenModalInvite((prevState) => !prevState)}
        statistics={eventStatisticsEvent}
      />
      <ModalUser
        isOpen={isOpenModalUsers}
        setIsOpenModalUsers={() => setIsOpenModalUsers((prevState) => !prevState)}
        participants={event.participants}
      />
    </Fragment>
  )
}

export default EventPage
