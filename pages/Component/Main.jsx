import Logo from "./MainComps/Logo"
import MenuComp from "./MainComps/MenuComp"
import ScrollBox from "./MainComps/ScrollBox"
import IntroductionTxt from "./MainComps/IntroductionTxt"
export default function Main() {
    return (
        <div className="main-wrapper">

            <div className="logo-container">
                <Logo />
            </div>
            <div className="main-grid">

                <div className="introtext-container">
                    <IntroductionTxt />
                </div>

                <div className="menu-container">
                    <MenuComp />
                </div>

            </div>

            <div className="scroll-container">
                <ScrollBox />
            </div>
        </div>
    )
}
