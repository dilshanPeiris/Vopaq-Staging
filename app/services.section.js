'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, ButtonGroup } from "@nextui-org/button";


// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

import serviceStyles from './styles/services-section.module.css'


export default function Services() {



    return (
        <section>
            <div className={`container ${serviceStyles.mainContainer} ${serviceStyles.container}`}>
                <div className="row">
                    <div className={`col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 ${serviceStyles.sectionTitle}`}>
                        <div>
                            Services
                        </div>
                    </div>
                    <div className={`col-xxl-12 col-lg-12 col-md-12 col-sm-12 col-12 ${serviceStyles.subContainer}`}>
                        <div className={`col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 ${serviceStyles.subContainerLeft}`}>
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
                        <div className={`col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 ${serviceStyles.subContainerRight}`}>
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
            </div>
        </section>

    );

}