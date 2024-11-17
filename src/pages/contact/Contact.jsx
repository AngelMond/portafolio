import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useFetcher } from "react-router-dom";

const SERVICE = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE;
const TEMPLATE = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const KEY = import.meta.env.VITE_REACT_APP_USER_ID;


export const Contact = () => {
    const formRef = useRef();

    const [message, setMessage] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorName, setErrorName] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [messageSended, setMessageSended] = useState();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

    }, [])



    //Handler for Email input
    const handleValidEmail = event => {
        setMessageSended(null);
        if (!isValidEmail(event.target.value)) {
            //If input not receive a valid email will display an error message
            setErrorEmail('Email is invalid');
        } else {
            setErrorEmail(null);
        }
        setMessage(event.target.value);
    };

    const isValidEmail = (email) => {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


    //Handler for Name input
    const handlerName = (event) => {
        setMessageSended(null);
        if (!requireName(event.target.value)) {
            //If input not receive any value will display an error message
            setErrorName("This field is required")
        } else {
            setErrorName(null)
        }
        setMessage(event.target.value)
    }

    const requireName = (name) => {
        return /^[a-z, .'-']+$/i.test(name)
    }



    //Handler for Message input
    const handlerMessage = (event) => {
        setMessageSended(null);
        if (!requireMessage(event.target.value)) {
            //If input not receive any value will display an error message
            setErrorMessage("This field is required");
        } else {
            setErrorMessage(null)
        }
        setMessage(event.target.value)
    }

    const requireMessage = (message) => {
        return /^[a-z, .'-', 0-9, *+/!, \n]+$/i.test(message)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null);
        setMessageSended("");

        emailjs.sendForm(SERVICE, TEMPLATE, formRef.current, KEY)
            .then((result) => {
                if (result.status === 200) {
                    setMessageSended("Message sent successfully!");
                } else {
                    setErrorMessage("Message not sent. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error sending email:", error.text);
                setErrorMessage("An error occurred while sending the message.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section className="container contact-section mt-5">
            <article className="section-border p-3" style={{ height: '500px'}}>
                <h3 className="section-headings text-center">Contact</h3>
                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-9">
                        <form ref={formRef} onSubmit={handleSubmit} id="form" >
                            <div className="row mt-3">
                                {!isLoading &&
                                    <>
                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="form-floating ">
                                                <input onMouseLeave={handlerName} id="inputName" className="form-control" type="text" name="name" placeholder="Name" required />
                                                <label className="text-start" htmlFor="name">Name</label>
                                                <div style={{ height: '20px' }}>
                                                    {errorName && <span id="requireName" className=" text-danger fs-6 mt-2 text-start">{errorName}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 mb-3">
                                            <div className="form-floating ">
                                                <input onChange={handleValidEmail} id="inputEmail" className="form-control" type="text" name="email" placeholder="email" required />
                                                <label className="text-start" htmlFor="email">email</label>
                                                <div style={{ height: '20px' }}>
                                                    {errorEmail && <span id="invalidEmail" className=" text-danger fs-6 mt-2 text-start">{errorEmail}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating ">
                                                <textarea onMouseLeave={handlerMessage} id="inputMessage" className="form-control textarea-contact" name="message" placeholder="Message" required>
                                                </textarea>
                                                <label className="text-start" htmlFor="message">Message</label>
                                                <div style={{ height: '20px' }}>
                                                    {errorMessage && <span id="requireMessage" className=" text-danger fs-6 mt-2 text-start">{errorMessage}</span>}

                                                    {messageSended &&
                                                        <span className=" text-success fs-6 mt-2 text-center">{messageSended}</span>
                                                    }
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end mt-3">
                                                <input id="reload" className="sendButton text-start" type="submit" value="Send" />
                                            </div>
                                        </div>
                                    </>
                                }
                                {isLoading &&
                                    <div className="col-12 height-240 mt-5">
                                        <div className="row justify-content-center">
                                            <div class="spinner-border col-12 align-middle" role="status">
                                            </div>
                                            <span class="text-center mt-2 ff align-middle">Sending message...</span>
                                        </div>
                                    </div>

                                }
                            </div>

                        </form>
                    </div>
                </div>
            </article>
        </section>
    )
}