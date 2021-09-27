import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { init } from 'emailjs-com';
init("user_3HY1WiDySlOSVHux9qqkK");

export default function SendEmail() {
    const form = useRef();

    const sendtheEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_okwwk59', 'template_3ls89sj', form.current, 'user_3HY1WiDySlOSVHux9qqkK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form ref={form} onSubmit={sendtheEmail}>
            <div>
                <label>Name</label>
                <input type="text" name="name" />
            </div>
            <div><label>Email</label>
                <input type="email" name="email" /></div>
            <div>
                <label>Message</label>
                <textarea name="message" />
            </div>
            <input type="submit" value="Send" />
        </form>
    );

}
