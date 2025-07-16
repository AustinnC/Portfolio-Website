import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet';

const Contact = () => {
        const [letterClass, setLetterClass] = useState('text-animate')
        const refForm = useRef()
            useEffect(() => {
                const timeoutId = setTimeout(() => {
                  setLetterClass('text-animate-hover')
                }, 3000)
              
                return () => clearTimeout(timeoutId)
              }, [])

              const sendEmail = (e) => {
                e.preventDefault()

                emailjs
                .sendForm(
                    'service_4e1u724',
                    'template_270gs1o',
                    refForm.current,
                    'ZF3vx97x5esbikQJC'
                )
                .then(
                    () => {
                        alert('Message successfully sent!')
                        window.location.reload(false)
                    },
                    ()=> {
                        alert('Failed to send the message, please try again')
                    }
                )
              }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass} 
                    strArray={['C','o','n','t','a','c','t', ' ','m','e']} 
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in software engineering internship opportunities - especially at big companies.
                    If you have questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit"className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
                </div>
                <div className='info-map'>
                    Austin Chung,
                    <br />
                    United States of America,
                    <br />
                    1200 Berry Court <br />
                    San Ramon <br />
                    <span>laserman235@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[37.774663568, -121.973496106]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[37.774663568, -121.973496106]}>
                            <Popup>Austin lives here, come over here for a cup of coffee</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact;