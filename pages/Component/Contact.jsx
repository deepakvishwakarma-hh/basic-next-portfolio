import SendEmail from "./SendEmail"
export default function Contact() {
    return (
        <div className="contact">
            <div className="c-header">
                {/* <h1>GET IN TOUCH</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <img src="/01.png" alt="designpupose" /> */}
            </div>
            <div className="c-main">
                <div className="cm-left">
                    <h1>Semd us a Message</h1>
                    <SendEmail/>
                </div>
                <div className="cm-right"></div>
            </div>

        </div>
    )
}
