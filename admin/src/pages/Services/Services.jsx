import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../../store/slices/servicesSlice';
import serviceService from '../../services/serviceService';

const Services = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { services } = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(fetchServices({ page: 1 }));
    }, [dispatch]);

    const handleEdit = (id) => {
        navigate(`/service/${id}`);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure to delete?')) {
            serviceService.delete(id).then(() => {
                dispatch(fetchServices({ page: 1 }));
            })
        }
    };

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header d-flex justify-content-between align-items-center py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Services</h6>
                    <Link className="btn btn-icon-split btn-sm btn-primary shadow-sm" to='/service/add'>
                        <span className="icon text-white-50">
                            <i className="fas fa-plus-circle fa-sm"></i>
                        </span>
                        <span className="text">Add Service</span>
                    </Link>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-striped" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th style={{ maxWidth: 70 }}>#</th>
                                    <th>Name</th>
                                    <th style={{ maxWidth: 50 }} className='text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th className='text-center'>Actions</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    services.map(s =>
                                        <tr key={s.serviceId} >
                                            <td>{s.serviceId}</td>
                                            <td>{s.serviceName}</td>
                                            <td className='text-center'>
                                                <button onClick={() => handleEdit(s.serviceId)} className='btn btn-light btn-sm mr-2'>
                                                    <i className="fas fa-pencil-alt fa-sm text-info"></i>
                                                </button>
                                                <button onClick={() => handleDelete(s.serviceId)} className='btn btn-light btn-sm'>
                                                    <i className="fas fa-trash fa-sm text-danger"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Services;