import React from 'react';
import { Link } from 'react-router-dom';
const PageHeader = ({ title, breadcrumb,backgroundUrl }) => {
    const style = {};
    if(backgroundUrl){
        style.background=`linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)), url(${  backgroundUrl } ) center center no-repeat`
    }
    return (
        <>
            <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={style} >
                <div class="container text-center py-5">
                    <h1 class="display-4 text-white animated slideInDown mb-4">{title}</h1>
                    
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                            {
                                breadcrumb &&
                                breadcrumb.map(bc =>
                                    <li key={bc} class="breadcrumb-item"><Link to={bc.to}>{bc.title}</Link></li>
                                )
                            }
                            <li class="breadcrumb-item text-primary active">service</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default PageHeader;