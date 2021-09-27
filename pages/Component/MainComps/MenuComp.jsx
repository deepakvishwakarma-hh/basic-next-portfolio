import Link from "next/link"
export default function MenuComp() {
    return (
        <div className="menu-wrapper">
            <ul>
                <Self_component value="welcome" link="/" />
                <Self_component value="About" link="#about" />
                <Self_component value="Highlight" link="#highlight" />
                {/* <Self_component value="Project" link="/"  /> */}
                <Self_component value="Contact" link="#contact" />
            </ul>
        </div>
    )
}

// its own Component 
function Self_component(props) {
    return (
        <li>
            <Link href={props.link} >{props.value}</Link>
        </li>
    )
}
