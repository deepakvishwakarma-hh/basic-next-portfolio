import Link from "next/link"
import { useState } from "react"
export default function MenuComp() {
    return (
        <div className="menu-wrapper">
            <ul>
                <Self_component value="welcome" link="/"  />
                <Self_component value="About" link="#about"  />
                <Self_component value="Highlight" link="#highlight"  />
                <Self_component value="Project" link="/"  />
                <Self_component value="Contact" link="/"  />
            </ul>
        </div>
    )
}
function Self_component(props) {
    return (
        <li>
            <Link href={props.link} >{props.value}</Link>
        </li>
    )
}
