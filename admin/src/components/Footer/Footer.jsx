import React from 'react';

const Footer = () => {
    return (
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; ServiceX {new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
