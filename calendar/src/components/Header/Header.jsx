import React from 'react'
// import PropTypes from 'prop-types'
import style from "./header.module.scss"
import { IoCalendarSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { SiOverleaf } from "react-icons/si";

function Header(props) {
  return (
    <header className={style.wrapper}>
        <div className={style.iconBar}>
            <SiOverleaf/>
            <h3>LavenderCalendar</h3>
        </div>
        <nav>
            <a href="" className={style.link}>Main</a>
            <a href="" className={style.link}><IoCalendarSharp/>Month</a>
            <a href="" className={style.link}><FaCalendarAlt/>Week</a>
            <a href="" className={style.link}><FaCalendarDay/>Day</a>
        </nav>
    </header>
  )
}

// Header.propTypes = {}

export default Header
