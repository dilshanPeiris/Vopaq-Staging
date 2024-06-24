'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import inquiryStyles from './styles/inqury-section.module.css'

import ContactForm from './contact-form';
import ContactFormStyles from './styles/contact-form.module.css';

import { Button, ButtonGroup } from "@nextui-org/button";


export default function InqurySection() {

    return (
        <div className={inquiryStyles.inquiryMainContainer}>
            <div className={inquiryStyles.subContainer}>
                <div className={inquiryStyles.subContainerLeft}>
                    <div className={inquiryStyles.subContainerSubTitleText}>
                        Write us
                    </div>
                    <div className={inquiryStyles.subContainerTitleText}>
                        Get in Touch
                    </div>
                    <div className={inquiryStyles.subContainerDescription}>
                        Don’t be Shy. Give us a call or drop us line.
                        Let’s make some magic together.
                    </div>

                    <div className={inquiryStyles.caseStudyButtons}>
                        <Button className={inquiryStyles.buttonOne}>
                            Contact Us
                        </Button>

                        <Button className={inquiryStyles.buttonTwo}>
                            About Us
                        </Button>
                    </div>

                </div>
                <div className={inquiryStyles.subContainerRight}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}