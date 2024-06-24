'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import caseStudiesStyles from './styles/case-studies-section.module.css'

import { Button, ButtonGroup } from "@nextui-org/button";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export default function CaseStudies() {



    return (


        <div className={caseStudiesStyles.caseStudiesMainContainer}>
            <div className={caseStudiesStyles.sectionTitle}>
                <div>
                    case studies
                </div>
            </div>
            <div className={caseStudiesStyles.subContainer}>
                <div className={caseStudiesStyles.subContainerLeft}>
                    <div className={caseStudiesStyles.subContainerContent}>
                        <div className={caseStudiesStyles.subContainerTitleText}>
                            Real Success Stories
                        </div>
                        <div className={caseStudiesStyles.subContainerDescription}>
                            At Vopaq Consultancy, we are dedicated to revolutionizing the business process outsourcing (BPO) landscape. Headquartered in Australia with operational staff situated in Sri Lanka.
                        </div>
                    </div>

                    <div className={caseStudiesStyles.caseStudyButtons}>

                        <Button className={caseStudiesStyles.buttonOne}>
                            View Case Studies
                        </Button>

                    </div>

                </div>
                <div className={caseStudiesStyles.subContainerRight}>
                    <div className={caseStudiesStyles.caseStudyCardOne}>

                        <div className={caseStudiesStyles.caseStudyCardContent}>

                            <div className={caseStudiesStyles.caseStudyCardIntroduction}>
                                {/* <img src={case01} /> */}
                                <div className={caseStudiesStyles.CaseStudyTitle}>
                                    Tech Innovators Inc
                                </div>
                                <div className={caseStudiesStyles.CaseStudyDescription}>
                                    Explore how we partnered with Tech Innovators Inc.
                                </div>

                                <div className={caseStudiesStyles.caseStudyCardButton}>

                                    <Button className={caseStudiesStyles.caseStudyButtonOne}>
                                        View Case Study
                                    </Button>

                                </div>


                            </div>

                            <div className={caseStudiesStyles.caseStudyRating}>
                                <div className={caseStudiesStyles.caseStudyReviewerProfileImage}>

                                </div>
                                <div className={caseStudiesStyles.caseStudyRatingAndReviewDetails}>
                                    <div className={caseStudiesStyles.caseStudyRatingValue}>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </Stack>
                                    </div>
                                    <div className={caseStudiesStyles.caseStudyReviewDetails}>
                                        "Rapid expansion—unmatched achievement."
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={caseStudiesStyles.caseStudyCardTwo}>
                        <div className={caseStudiesStyles.caseStudyCardContent}>

                            <div className={caseStudiesStyles.caseStudyCardIntroduction}>
                                {/* <img src={case01} /> */}
                                <div className={caseStudiesStyles.CaseStudyTitle}>
                                    Global Bank Ltd
                                </div>
                                <div className={caseStudiesStyles.CaseStudyDescription}>
                                    Discover the success journey of Global Bank Ltd.
                                </div>

                                <div className={caseStudiesStyles.caseStudyCardButton}>

                                    <Button className={caseStudiesStyles.caseStudyButtonOne}>
                                        View Case Study
                                    </Button>

                                </div>


                            </div>

                            <div className={caseStudiesStyles.caseStudyRating}>
                                <div className={caseStudiesStyles.caseStudyReviewerProfileImage}>

                                </div>
                                <div className={caseStudiesStyles.caseStudyRatingAndReviewDetails}>
                                    <div className={caseStudiesStyles.caseStudyRatingValue}>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                                        </Stack>
                                    </div>
                                    <div className={caseStudiesStyles.caseStudyReviewDetails}>
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