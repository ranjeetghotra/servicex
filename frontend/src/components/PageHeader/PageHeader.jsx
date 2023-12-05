import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, content }) => {
    return (
        <>
            <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container text-center py-5">
                    <h1 class="display-4 text-white animated slideInDown mb-4">{title}</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                            <li class="breadcrumb-item primary-text"><Link className={content ? "text-white" : ""} to="/services" >{title}</Link></li>
                            {
                                content &&
                                <li class="breadcrumb-item primary-text" style={{ color: '#FDA12B' }} aria-current="page">{content}</li>
                            }
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default PageHeader;