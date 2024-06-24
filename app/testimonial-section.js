'use client';

import { useState } from 'react';
import Link from 'next/link';
import TestimonialStyles from './styles/testimonial.section.module.css'

import React, { Component } from "react";
import Slider from "react-slick";

export default function Testimonial() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // cssEase: "linear",
        arrows: false,

        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,

        // className: "center",
        // centerMode: true,
        // infinite: true,
        // centerPadding: "60px",
        // slidesToShow: 3,
        // speed: 500,
        // rows: 3,
        // slidesPerRow: 2
    };

    return (
        <div className={TestimonialStyles.mainContainer}>
            <div className={TestimonialStyles.subContainer}>
                <div className={TestimonialStyles.subContainerLeft}>
                    <div className={TestimonialStyles.subContainerLeftTitle}>
                        Hear From Our Clients
                    </div>
                    <div className={TestimonialStyles.subContainerLeftDescription}>
                        We prioritize personalized solutions over generic ones because we recognize the uniqueness of each challenge.
                    </div>
                </div>

                <div className={TestimonialStyles.subContainerRight}>
                    <Slider {...settings}>
                        <div className={TestimonialStyles.testimonyCards}>

                            <div className={TestimonialStyles.testimonyCardRowOne}>

                                <div className={TestimonialStyles.testimonyCard}>
                                    <div className={TestimonialStyles.testimonyInfo}>
                                        <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDetails}>
                                            <div className={TestimonialStyles.testimonyReviewerName}>
                                                John Matthews
                                            </div>
                                            <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                                Engineer
                                            </div>
                                        </div>
                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewDetails}>
                                        We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                    </div>
                                </div>
                                <div className={TestimonialStyles.testimonyCard}>
                                    <div className={TestimonialStyles.testimonyInfo}>
                                        <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDetails}>
                                            <div className={TestimonialStyles.testimonyReviewerName}>
                                                John Matthews
                                            </div>
                                            <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                                Engineer
                                            </div>
                                        </div>
                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewDetails}>
                                        We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                    </div>
                                </div>

                            </div>

                            <div className={TestimonialStyles.testimonyCardRowTwo}>
                                <div className={TestimonialStyles.testimonyCard}>
                                    <div className={TestimonialStyles.testimonyInfo}>
                                        <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDetails}>
                                            <div className={TestimonialStyles.testimonyReviewerName}>
                                                John Matthews
                                            </div>
                                            <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                                Engineer
                                            </div>
                                        </div>
                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewDetails}>
                                        We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                    </div>
                                </div>

                            </div>
                            <div className={TestimonialStyles.testimonyCardRowThree}>
                                <div className={TestimonialStyles.testimonyCard}>
                                    <div className={TestimonialStyles.testimonyInfo}>
                                        <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDetails}>
                                            <div className={TestimonialStyles.testimonyReviewerName}>
                                                John Matthews
                                            </div>
                                            <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                                Engineer
                                            </div>
                                        </div>
                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewDetails}>
                                        We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                    </div>
                                </div>
                                <div className={TestimonialStyles.testimonyCard}>
                                    <div className={TestimonialStyles.testimonyInfo}>
                                        <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDetails}>
                                            <div className={TestimonialStyles.testimonyReviewerName}>
                                                John Matthews
                                            </div>
                                            <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                                Engineer
                                            </div>
                                        </div>
                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewDetails}>
                                        We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <div className={TestimonialStyles.testimonyCards}>
                        <div className={TestimonialStyles.testimonyCardRowOne}>
                            <div className={TestimonialStyles.testimonyCard}>
                                <div className={TestimonialStyles.testimonyInfo}>
                                    <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewerDetails}>
                                        <div className={TestimonialStyles.testimonyReviewerName}>
                                            John Matthews
                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                            Engineer
                                        </div>
                                    </div>
                                </div>
                                <div className={TestimonialStyles.testimonyReviewDetails}>
                                    We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                </div>
                            </div>
                            <div className={TestimonialStyles.testimonyCard}>
                                <div className={TestimonialStyles.testimonyInfo}>
                                    <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewerDetails}>
                                        <div className={TestimonialStyles.testimonyReviewerName}>
                                            John Matthews
                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                            Engineer
                                        </div>
                                    </div>
                                </div>
                                <div className={TestimonialStyles.testimonyReviewDetails}>
                                    We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                </div>
                            </div>
                        </div>
                        <div className={TestimonialStyles.testimonyCardRowTwo}>
                            <div className={TestimonialStyles.testimonyCard}>
                                <div className={TestimonialStyles.testimonyInfo}>
                                    <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewerDetails}>
                                        <div className={TestimonialStyles.testimonyReviewerName}>
                                            John Matthews
                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                            Engineer
                                        </div>
                                    </div>
                                </div>
                                <div className={TestimonialStyles.testimonyReviewDetails}>
                                    We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                </div>
                            </div>

                        </div>
                        <div className={TestimonialStyles.testimonyCardRowThree}>
                            <div className={TestimonialStyles.testimonyCard}>
                                <div className={TestimonialStyles.testimonyInfo}>
                                    <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewerDetails}>
                                        <div className={TestimonialStyles.testimonyReviewerName}>
                                            John Matthews
                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                            Engineer
                                        </div>
                                    </div>
                                </div>
                                <div className={TestimonialStyles.testimonyReviewDetails}>
                                    We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                </div>
                            </div>
                            <div className={TestimonialStyles.testimonyCard}>
                                <div className={TestimonialStyles.testimonyInfo}>
                                    <div className={TestimonialStyles.testimonyReviewerProfileImage}>

                                    </div>
                                    <div className={TestimonialStyles.testimonyReviewerDetails}>
                                        <div className={TestimonialStyles.testimonyReviewerName}>
                                            John Matthews
                                        </div>
                                        <div className={TestimonialStyles.testimonyReviewerDesignation}>
                                            Engineer
                                        </div>
                                    </div>
                                </div>
                                <div className={TestimonialStyles.testimonyReviewDetails}>
                                    We handle the entire renting process, from screening tenants to signing leases and collecting rent.
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </Slider>
                </div>

            </div>
        </div>
    );
}