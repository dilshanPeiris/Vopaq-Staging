'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from "@nextui-org/button";

import serviceStyles from './styles/services-section.module.css'


export default function Services() {



    return (
        <div className={serviceStyles.mainContainer}>
            <div className={serviceStyles.sectionTitle}>
                <div>
                    Services
                </div>
            </div>
            <div className={serviceStyles.subContainer}>
                <div className={serviceStyles.subContainerLeft}>
                    <div className={serviceStyles.subContainerContent}>
                        <div className={serviceStyles.subContainerTitleText}>
                            Tailored Solutions for Optimal Performance
                        </div>
                        <div className={serviceStyles.subContainerDescription}>
                            At Vopaq Consultancy, we are dedicated to revolutionizing the business process outsourcing (BPO) landscape. Headquartered in Australia with operational staff situated in Sri Lanka.
                        </div>
                    </div>

                    <div className={serviceStyles.serviceButtons}>

                        <Button className={serviceStyles.buttonOne}>
                            View All Services
                        </Button>

                    </div>
                </div>
                <div className={serviceStyles.subContainerRight}>
                    <div className={serviceStyles.sliderContent}>
                        <div className={serviceStyles.sliderServiceCard}>
                            <div className={serviceStyles.ServiceTitle}>
                                Finance & Accounting
                            </div>
                            <div className={serviceStyles.ServiceDescription}>
                                We streamline your financial operations with our comprehensive finance and accounting services.
                            </div>
                        </div>

                        <div className={serviceStyles.sliderServiceCard}>
                            <div className={serviceStyles.ServiceTitle}>
                                Back-office Services
                            </div>
                            <div className={serviceStyles.ServiceDescription}>
                                We enhance your administrative efficiency and streamline back-office operations with our comprehensive support services.
                            </div>
                        </div>

                        <div className={serviceStyles.sliderServiceCard}>
                            <div className={serviceStyles.ServiceTitle}>
                                Payroll Services
                            </div>
                            <div className={serviceStyles.ServiceDescription}>
                                We ensure accurate and timely payment to your employees with our comprehensive payroll services.                            </div>
                        </div>

                        <div className={serviceStyles.sliderServiceCard}>
                            <div className={serviceStyles.ServiceTitle}>
                                Research & development                            </div>
                            <div className={serviceStyles.ServiceDescription}>
                                Drive innovation and stay ahead of the curve with our specialized research and development services.                            </div>
                        </div>

                        <div className={serviceStyles.sliderServiceCard}>
                            <div className={serviceStyles.ServiceTitle}>
                                Finance & Accounting
                            </div>
                            <div className={serviceStyles.ServiceDescription}>
                                We streamline your financial operations with our comprehensive finance and accounting services.
                            </div>
                        </div>

                        <div className={serviceStyles.sliderServiceCard}>
                            <div className={serviceStyles.ServiceTitle}>
                                Back-office Services
                            </div>
                            <div className={serviceStyles.ServiceDescription}>
                                We enhance your administrative efficiency and streamline back-office operations with our comprehensive support services.
                            </div>
                        </div>

                        <div className={serviceStyles.sliderServiceCard}>
                            <div className={serviceStyles.ServiceTitle}>
                                Payroll Services
                            </div>
                            <div className={serviceStyles.ServiceDescription}>
                                We ensure accurate and timely payment to your employees with our comprehensive payroll services.                            </div>
                        </div>

                        <div className={serviceStyles.sliderServiceCard}>
                            <div className={serviceStyles.ServiceTitle}>
                                Research & development                            </div>
                            <div className={serviceStyles.ServiceDescription}>
                                Drive innovation and stay ahead of the curve with our specialized research and development services.                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}