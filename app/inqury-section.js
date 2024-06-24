'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import inquiryStyles from './styles/case-studies-section.module.css'

import { Button, ButtonGroup } from "@nextui-org/button";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export default function CaseStudies() {



    return (


        <div className={inquiryStyles.inquiryMainContainer}>
            <div className={inquiryStyles.sectionTitle}>
                <div>
                    case studies
                </div>
            </div>
            <div className={inquiryStyles.subContainer}>
                <div className={inquiryStyles.subContainerLeft}>
                    <div className={inquiryStyles.subContainerContent}>
                        <div className={inquiryStyles.subContainerTitleText}>
                            Real Success Stories
                        </div>
                        <div className={inquiryStyles.subContainerDescription}>
                            At Vopaq Consultancy, we are dedicated to revolutionizing the business process outsourcing (BPO) landscape. Headquartered in Australia with operational staff situated in Sri Lanka.
                        </div>
                    </div>

                    <div className={inquiryStyles.caseStudyButtons}>

                        <Button className={inquiryStyles.buttonOne}>
                            View Case Studies
                        </Button>

                    </div>

                </div>
                <div className={inquiryStyles.subContainerRight}>
                    <div className={inquiryStyles.caseStudyCardOne}>

                        <div className={inquiryStyles.caseStudyCardContent}>

                            <div className={inquiryStyles.caseStudyCardIntroduction}>
                                {/* <img src={case01} /> */}
                                <div className={inquiryStyles.CaseStudyTitle}>
                                    Tech Innovators Inc
                                </div>
                                <div className={inquiryStyles.CaseStudyDescription}>
                                    Explore how we partnered with Tech Innovators Inc.
                                </div>

                                <div className={inquiryStyles.caseStudyCardButton}>

                                    <Button className={inquiryStyles.caseStudyButtonOne}>
                                        View Case Study
                                    </Button>

                                </div>


                            </div>

                            <div className={inquiryStyles.caseStudyRating}>
                                <div className={inquiryStyles.caseStudyReviewerProfileImage}>

                                </div>
                                <div className={inquiryStyles.caseStudyRatingAndReviewDetails}>
                                    <div className={inquiryStyles.caseStudyRatingValue}>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </Stack>
                                    </div>
                                    <div className={inquiryStyles.caseStudyReviewDetails}>
                                        "Rapid expansion—unmatched achievement."
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={inquiryStyles.caseStudyCardTwo}>
                        <div className={inquiryStyles.caseStudyCardContent}>

                            <div className={inquiryStyles.caseStudyCardIntroduction}>
                                {/* <img src={case01} /> */}
                                <div className={inquiryStyles.CaseStudyTitle}>
                                    Global Bank Ltd
                                </div>
                                <div className={inquiryStyles.CaseStudyDescription}>
                                    Discover the success journey of Global Bank Ltd.
                                </div>

                                <div className={inquiryStyles.caseStudyCardButton}>

                                    <Button className={inquiryStyles.caseStudyButtonOne}>
                                        View Case Study
                                    </Button>

                                </div>


                            </div>

                            <div className={inquiryStyles.caseStudyRating}>
                                <div className={inquiryStyles.caseStudyReviewerProfileImage}>

                                </div>
                                <div className={inquiryStyles.caseStudyRatingAndReviewDetails}>
                                    <div className={inquiryStyles.caseStudyRatingValue}>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                        </Stack>
                                    </div>
                                    <div className={inquiryStyles.caseStudyReviewDetails}>
                                        "Transformative collaboration that reshaped our path."
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}