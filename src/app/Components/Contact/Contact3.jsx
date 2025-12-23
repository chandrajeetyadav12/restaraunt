"use client"
import Image from "next/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
const Contact3 = () => {
    // Validation Schema
    const [responseMsg, setResponseMsg] = useState("");
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10,15}$/, "Phone must be 10 to 15 digits")
            .required("Phone is required"),
        subject: Yup.string()
            .oneOf(
                ["complain", "greetings","date","price", "order",],
                "Invalid subject"
            )
            .required("Subject is required"),
        message: Yup.string()
            .min(10, "Message must be at least 10 characters")
            .max(5000, "Message is too long")
            .required("Message is required"),
        acceptTerms: Yup.bool().oneOf(
            [true],
            "You must accept the terms to continue"
        ),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = async (data) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, data);
            setResponseMsg(res.data.message);
            reset();
        } catch (err) {
            setResponseMsg(err.response?.data?.error || "Something went wrong");
        }
    };
 
    return (
        <div>
            <div className="contact-us-section section-padding fix">
                <div className="contact-box-wrapper style1">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"> <Image src="/assets/img/icon/location.png" alt="img" width={70} height={70} /></div>
                                    <h3 className="title">Our Address</h3>
                                    <p>Shop No. GF-18 Signate Plaza Complex Krunal Char Rasta Gotri-Samta Road, Laxmipura, Gotri, Vadodara, Gujarat-390021</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"><Image src="/assets/img/icon/gmail.png" alt="img" width={70} height={70} /></div>
                                    <h3 className="title">pgonekar18@gmail.com</h3>
                                    <p>Email us anytime for any kind of query.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"><Image src="/assets/img/icon/phone.png" alt="img" width={70} height={70} /></div>
                                    <h3 className="title">Hot:+91 9589945050</h3>
                                    <p>24/7/365 priority Live Chat and ticketing support.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"><Image src="/assets/img/icon/clock.png" alt="img" width={70} height={70} /></div>
                                    <h3 className="title">Opening Hour</h3>
                                    <p>Sunday-Fri: 9 AM – 6 PM Saturday: 9 AM – 4 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form-section section-padding pt-0 fix">
                <div className="contact-form-wrapper style2">
                    <div className="container">
                        <div className="row gx-60 gy-5">
                            <div className="col-xl-6">
                                <div className="contact-form-thumb">
                                    <Image src="/assets/img/contact/vegetarianrestaurant.png" alt="img" width={933} height={634} />

                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-form style2">
                                    <h2>Get in Touch </h2>
                                    <form className="row" action="#" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-md-6">
                                            <input type="text"
                                                placeholder="Full Name"
                                                {...register("fullname")}
                                            />
                                            <p className="text-danger">{errors.fullname?.message}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                {...register("email")}
                                            />
                                            <p className="text-danger">{errors.email?.message}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="number"
                                                placeholder="Phone Number"
                                                {...register("phone")}
                                            />
                                            <p className="text-danger">{errors.phone?.message}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <select
                                                className="single-select"
                                                aria-label="Shop order"
                                                {...register("subject")}
                                            >
                                                <option value="subject">Subject</option>
                                                <option value="complain">Complain</option>
                                                <option value="greetings">Greetings</option>
                                                <option value="date">Expire Date</option>
                                                <option value="price">About Price</option>
                                                <option value="order">About order</option>
                                            </select>
                                            <p className="text-danger">{errors.subject?.message}</p>
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                id="message"
                                                className="form-control"
                                                placeholder="Write your message here..."
                                                rows="5"
                                                {...register("message")}
                                            ></textarea>
                                            <p className="text-danger">{errors.message?.message}</p>
                                        </div>
                                        <div className="col-12 form-group">
                                            <input
                                                id="reviewcheck"
                                                type="checkbox"
                                                {...register("acceptTerms")}
                                            />
                                            <label htmlFor="reviewcheck">Collaboratively formulate principle capital. Progressively
                                                evolve user<span className="checkmark"></span></label>
                                            <p className="text-danger">{errors.acceptTerms?.message}</p>
                                        </div>
                                        <div className="col-12 form-group mb-0">
                                            <button className="theme-btn w-100" type="submit">SUBMIT NOW <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                        </div>
                                        {responseMsg && (
                                            <p className="mt-3 text-success">{responseMsg}</p>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="map-wrapper contact-area-map">
  <iframe
    src="https://www.google.com/maps?q=22.32017750623666,73.14177324110433&hl=en&z=15&output=embed"
    height="550"
    loading="lazy"
    style={{ border: 0, width: "100%" }}
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
    );
};

export default Contact3;