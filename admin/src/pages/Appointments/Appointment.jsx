import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { DateTime } from 'luxon'
import { useDispatch } from "react-redux";
import appointmentService from "../../services/appointmentService";
import { updateStatus } from "../../store/slices/appointmentsSlice";

const Appointment = () => {
    const { id } = useParams();
    const [editMode, setEditMode] = useState(false);

    const [appointmentData, setAppointmentData] = useState({})

    useEffect(() => {
        appointmentService.get(id).then(({ appointment }) => {
            setAppointmentData(appointment);
        })
    }, [id]);

    const handleCustomerDetailChange = (field, value) => {
        setAppointmentData({ ...appointmentData, [field]: value });
    };

    const handleOrderItemChange = (index, field, value) => {
        const orderItems = [...appointmentData.orderItems];
        orderItems[index] = { ...orderItems[index], [field]: value };
        setAppointmentData({ ...appointmentData, orderItems });
    };

    const handleAddOrderItem = () => {
        const orderItems = [...appointmentData.orderItems, { name: '', quantity: 1, price: 0 }]
        setAppointmentData({ ...appointmentData, orderItems });
    };

    const handleToggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleSaveChanges = () => {
        appointmentService.update(id, appointmentData).then(res => {
            setEditMode(false);
        })
    };

    const handleRemoveItem = (index) => {
        const removeConfirmation = window.confirm("Are you sure you want to delete this item?");
        if (removeConfirmation) {
            const orderItems = [...appointmentData.orderItems];
            orderItems.splice(index, 1);
            setAppointmentData({ ...appointmentData, orderItems });
        }
    }

    const onStatusChange = (event) => {
        const status = event.target.value
        appointmentService.updateStatus({ appointmentId: id, status })
        setAppointmentData({ ...appointmentData, status })
    }

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header d-flex align-items-center justify-content-between py-3">
                    <h6 className="m-0 font-weight-bold text-primary">#{appointmentData.invoiceNumber}</h6>
                    <Link className="btn btn-icon-split btn-sm btn-primary shadow-sm" to={`/invoice/${id}`} target="_blank">
                        <span className="icon text-white-50">
                            <i className="fas fa-file-invoice fa-sm"></i>
                        </span>
                        <span className="text">Invoice</span>
                    </Link>
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <span>
                            {DateTime.fromISO(appointmentData.appointmentDate).setZone('Pacific/Auckland').toLocaleString(DateTime.DATETIME_MED)}
                        </span>
                        <select value={appointmentData.status} onChange={onStatusChange} className='form-control w-auto'>
                            <option value="requested" hidden>Requested</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="canceled">Canceled</option>
                        </select>
                    </div>
                    <hr className="horizontal-dark" />
                    <p class="text-uppercase text-sm">Customer Information</p>
                    <div className="form-group">
                        <label htmlFor="customerName">Customer Name:</label>
                        {editMode ? (
                            <input
                                type="text"
                                className="form-control"
                                id="customerName"
                                value={appointmentData.customerName}
                                onChange={(e) => handleCustomerDetailChange('customerName', e.target.value)}
                            />
                        ) : (
                            <p>{appointmentData.customerName}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        {editMode ? (
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={appointmentData.customerEmail}
                                onChange={(e) => handleCustomerDetailChange('customerEmail', e.target.value)}
                            />
                        ) : (
                            <p>{appointmentData.customerEmail}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        {editMode ? (
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                value={appointmentData.customerPhone}
                                onChange={(e) => handleCustomerDetailChange('customerPhone', e.target.value)}
                            />
                        ) : (
                            <p>{appointmentData.customerPhone}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        {editMode ? (
                            <textarea
                                className="form-control"
                                id="address"
                                value={appointmentData.customerAddress}
                                onChange={(e) => handleCustomerDetailChange('customerAddress', e.target.value)}
                            />
                        ) : (
                            <p>{appointmentData.customerAddress}</p>
                        )}
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="orderDate">Appointment Date:</label>
                        <p>{DateTime.fromISO(appointmentData.appointmentDate).setZone('Pacific/Auckland').toLocaleString(DateTime.DATETIME_MED)}</p>
                    </div> */}
                    <hr className="horizontal-dark" />
                    <p class="text-uppercase text-sm">Service Items</p>
                    <ul className="list-group">
                        {appointmentData?.orderItems?.map((item, index) => (
                            <li className="list-group-item" key={index}>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label htmlFor={`productName-${index}`}>Product Name:</label>
                                            {editMode ? (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id={`productName-${index}`}
                                                    value={item.name}
                                                    onChange={(e) => handleOrderItemChange(index, 'name', e.target.value)}
                                                />
                                            ) : (
                                                <p>{item.name}</p>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor={`quantity-${index}`}>Quantity:</label>
                                                {editMode ? (
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id={`quantity-${index}`}
                                                        value={item.quantity}
                                                        onChange={(e) => handleOrderItemChange(index, 'quantity', e.target.value)}
                                                    />
                                                ) : (
                                                    <p>{item.quantity}</p>
                                                )}
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor={`price-${index}`}>Price:</label>
                                                {editMode ? (
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id={`price-${index}`}
                                                        value={item.price}
                                                        onChange={(e) => handleOrderItemChange(index, 'price', e.target.value)}
                                                    />
                                                ) : (
                                                    <p>${item.price}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-right">
                                        <p>Total: ${parseFloat(item.price) * item.quantity}</p> <button className="btn btn-sm btn-inline btn-light" onClick={() => handleRemoveItem(index)}><i className="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {editMode && (
                        <button type="button" className="btn btn-success mt-2" onClick={handleAddOrderItem}>
                            Add Item
                        </button>
                    )}

                </div>
                <div class="card-footer">
                    <button
                        type="button"
                        className={`btn ${editMode ? 'btn-secondary' : 'btn-primary'} mt-3`}
                        onClick={handleToggleEditMode}
                    >
                        {editMode ? 'Cancel' : 'Edit Details'}
                    </button>
                    {editMode && (
                        <button type="button" className="btn btn-primary mt-3 ml-2" onClick={handleSaveChanges}>
                            Save
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Appointment