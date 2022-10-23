import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import './ContactMe.css';

export default function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_y5o3zt5',
            'hannie-dev-contact-form',
            form.current,
            'MlnnNV-u-8HeZQ-KM'
        )
        .then(() => {
            toast('Message successfully sent!')
        }, (error) => {
            toast.error(error.text)
        })
    }

    return (
        <div className='page-container'>
            <div className='content-container'>
                <h1 className='header'>Contact Me</h1>

                <div className='contact-content'>

                    <div className='contact-info'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact-icon'/>
                        <span className='way-of-contact'>Email</span>
                        <span className='contact-detail'>hanniett.nguyen@gmail.com</span>
                        <a href='mailto:hanniett.nguyen@gmail.com' className='send-a-message-text'>Send a message</a>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className='contact-form-container'>
                        <div className='info-input-container'>
                            <input type="text" placeholder='Your Full Name' className='contact-info-name' name='name'/>
                            <input type="email" placeholder='Your Email' className='contact-info-email' name='email'/>
                            <textarea type="text" placeholder='Your Message' className='your-message' name='message'/>
                        </div>
                        <div>
                            <input type="submit" value='Send Message' className='submit-btn'/>
                        </div>
                    </form>
                    <ToastContainer />

                </div>

            </div>
        </div>
    )
}