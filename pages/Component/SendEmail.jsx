import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { init } from 'emailjs-com';
init("user_3HY1WiDySlOSVHux9qqkK");
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
                <TextField id="standard-basic" label="Name" variant="standard" name="name" />
            </div>
            <div>
                <TextField id="standard-basic" label="Email" variant="standard" name="email" type="email" />
            </div>
            <div>
                <TextField id="standard-basic" label="Message" variant="standard" name="message" type="text" />
            </div>
            <br /><br />
            <Button variant="primary" type="submit" onClick={() => { alert("Sent") }}>Send Message</Button>
        </form>
    );

}
