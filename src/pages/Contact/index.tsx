import React from 'react'
import styles from './contact.module.sass'

import { FormEvent, useRef, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

import emailjs from '@emailjs/browser'
import GithubLight from '../../icons/GithubLight.tsx'
import LinkedIn from '../../icons/LinkedIn.tsx'


const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

export default function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const formClassName = formSubmitted ? 'submitted' : ''

    const sendEmail = () => {
        if (!form.current) return
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY)
            .then(() => {
                alert('Email successfully sent. Thank you for reaching out to me !')
                console.log('Email successfully sent !')
            })
            .catch((error) => {
                alert('Email failed to send !')
                console.error('Email failed to send !', error)
            })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFormSubmitted(true)

        if (event.currentTarget.checkValidity()) {
            sendEmail()
            form.current?.reset()
            setFormSubmitted(false)
        }
        else {
            event.stopPropagation()
        }
    }

    return (
        <section id="contact">
            <div className={styles.title}>
                <h1></h1>
                <hr />
            </div>
            <div className={styles.contentContainer}>
                <Fade direction="up" triggerOnce>
                    <div className={styles.card}>
                        <div className="form-container">
                            <span className={styles.contactHeader}>Send a Message</span>
                            <form ref={form} className={formClassName} noValidate onSubmit={handleSubmit}>
                                <div className={styles.formElement}>
                                    <label htmlFor="form-name">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        id="form-name"
                                        required
                                    />
                                </div>
                                <div className={styles.formElement}>
                                    <label htmlFor="form-email">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        id="form-email"
                                        required
                                    />
                                </div>
                                <div className={styles.formElement}>
                                    <label htmlFor="form-message">Message</label>
                                    <textarea
                                        name="message"
                                        id="form-message"
                                        required
                                        rows={3}
                                    />
                                </div>
                                <button type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="info-container">
                            <span className={styles.contactHeader}>Find Me On</span>
    
                            <p className='link'>Feel free to connect with me and send me a message.</p>
                            <div className={styles.buttonContainer}>
                                <a className='IT' href="https://github.com/3lectricfly69" role="button" target="_blank">
                                    <GithubLight /> GitHub
                                </a>
                                <a className='symbiosis' href="https://www.linkedin.com/in/marlie-ford/" role="button" target="_blank">
                                    <LinkedIn /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}
