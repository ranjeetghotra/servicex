import { useEffect, useState } from 'react'
import './Invoice.scss'
import { useParams } from 'react-router-dom';
import appointmentService from '../../services/appointmentService';
import { DateTime } from 'luxon';

const Invoice = () => {
    const { id } = useParams();
    const [appointment, setAppointment] = useState({})
    const subtotal = appointment?.orderItems ? appointment.orderItems.map(oi => oi.price * oi.quantity).reduce((a, b) => a + b, 0) : 0
    useEffect(() => {
        appointmentService.get(id).then(({ appointment }) => {
            setAppointment(appointment);
        })
    }, [id]);
    return (
        <div className='invoice-wrap'>
            <div className="tm_container">
                <div className="tm_invoice_wrap">
                    <div className="tm_invoice tm_style1" id="tm_download_section">
                        <div className="tm_invoice_in">
                            <div className="tm_invoice_head tm_align_center tm_mb20">
                                <div className="tm_invoice_left">
                                    <div className="tm_logo tm_size1">
                                        {/* <img src="assets/img/logo.svg" alt="Logo" /> */}
                                    </div>
                                </div>
                                <div className="tm_invoice_right tm_text_right">
                                    <div className="tm_primary_color tm_f50 tm_text_uppercase">Invoice</div>
                                </div>
                            </div>
                            <div className="tm_invoice_info_2 tm_mb20">
                                <p className="tm_invoice_number tm_m0">Invoice No: <b className="tm_primary_color">#{appointment.invoiceNumber}</b></p>
                                <p className="tm_invoice_date tm_m0">Date: <b className="tm_primary_color">{DateTime.fromISO(appointment.appointmentDate).setZone('Pacific/Auckland').toFormat("dd.MM.yyyy")}</b></p>
                            </div>
                            <div className="tm_invoice_head tm_mb10">
                                <div className="tm_invoice_left">
                                    <p className="tm_mb2"><b className="tm_primary_color">Invoice To:</b></p>
                                    <p>
                                        {appointment.customerName} <br />
                                        {appointment.customerAddress} <br />New Zealand <br />
                                        {appointment.customerEmail}
                                    </p>
                                </div>
                                <div className="tm_invoice_right tm_text_right">
                                    <p className="tm_mb2"><b className="tm_primary_color">Pay To:</b></p>
                                    <p>
                                        ServiceX <br />
                                        Hastings, North Island<br />
                                        New Zealand 4120<br />
                                        info@servicex.co.nz
                                    </p>
                                </div>
                            </div>
                            <div className="tm_table tm_style1 tm_mb40">
                                <div className="tm_round_border">
                                    <div className="tm_table_responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="tm_width_7 tm_semi_bold tm_primary_color tm_gray_bg">Item Details
                                                    </th>
                                                    <th className="tm_width_2 tm_semi_bold tm_primary_color tm_gray_bg">Price</th>
                                                    <th className="tm_width_1 tm_semi_bold tm_primary_color tm_gray_bg">Qty</th>
                                                    <th
                                                        className="tm_width_2 tm_semi_bold tm_primary_color tm_gray_bg tm_text_right">
                                                        Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    appointment?.orderItems?.map(item =>
                                                        <tr>
                                                            <td className="tm_width_7">{item.name}</td>
                                                            <td className="tm_width_2">${item.price}</td>
                                                            <td className="tm_width_1">{item.quantity}</td>
                                                            <td className="tm_width_2 tm_text_right">${item.price * item.quantity}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tm_invoice_footer">
                                    <div className="tm_left_footer">
                                        {/* <p className="tm_mb2"><b className="tm_primary_color">Payment info:</b></p>
                                        <p className="tm_m0">Credit Card - 236********928 <br />Amount: $990</p> */}
                                    </div>
                                    <div className="tm_right_footer">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="tm_width_3 tm_primary_color tm_border_none tm_bold">Subtoal</td>
                                                    <td
                                                        className="tm_width_3 tm_primary_color tm_text_right tm_border_none tm_bold">
                                                        ${subtotal}</td>
                                                </tr>
                                                {/* <tr>
                                                    <td className="tm_width_3 tm_primary_color tm_border_none tm_pt0">Discount <span
                                                        className="tm_ternary_color">(10%)</span></td>
                                                    <td className="tm_width_3 tm_primary_color tm_text_right tm_border_none tm_pt0">
                                                        -$100</td>
                                                </tr>
                                                <tr>
                                                    <td className="tm_width_3 tm_primary_color tm_border_none tm_pt0">Tax <span
                                                        className="tm_ternary_color">(5%)</span></td>
                                                    <td className="tm_width_3 tm_primary_color tm_text_right tm_border_none tm_pt0">
                                                        +$90</td>
                                                </tr> */}
                                                <tr className="tm_border_top tm_border_bottom">
                                                    <td className="tm_width_3 tm_border_top_0 tm_bold tm_f16 tm_primary_color">Grand
                                                        Total </td>
                                                    <td
                                                        className="tm_width_3 tm_border_top_0 tm_bold tm_f16 tm_primary_color tm_text_right">
                                                        ${subtotal}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="tm_mb5"><b className="tm_primary_color">Terms & Conditions:</b></p>
                                <ul className="tm_m0 tm_note_list">
                                    <li>All claims relating to quantity or shipping errors shall be waived by Buyer unless made
                                        in writing to Seller within thirty (30) days after delivery of goods to the address
                                        stated.</li>
                                    <li>Delivery dates are not guaranteed and Seller has no liability for damages that may be
                                        incurred due to any delay in shipment of goods hereunder. Taxes are excluded unless
                                        otherwise stated.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tm_invoice_btns tm_hide_print">
                        <a href="javascript:window.print()" className="tm_invoice_btn tm_color1">
                            <span className="tm_btn_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                                    <path
                                        d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
                                        fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                                    <rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" fill="none"
                                        stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                                    <path d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24" fill="none"
                                        stroke="currentColor" stroke-linejoin="round" stroke-width="32" />
                                    <circle cx="392" cy="184" r="24" fill='currentColor' />
                                </svg>
                            </span>
                            <span className="tm_btn_text">Print</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice