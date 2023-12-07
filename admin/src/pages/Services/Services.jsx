import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchServices } from '../../store/slices/servicesSlice';
import serviceService from '../../services/serviceService';

const Services = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { services, loading, error } = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(fetchServices({ page: 1 }));
    }, [dispatch]);

    const handleEdit = (id) => {
        navigate(`/service/${id}`);
    };

    const handleDelete = (id) => {
        serviceService.delete(id).then(() => {
            dispatch(fetchServices({ page: 1 }));
        })
    };

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <Link class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" to='/service/add'>
                    <i class="fas fa-plus-circle fa-sm text-white-50"></i> Add Service</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Services</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th style={{ width: 150 }} className='text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th className='text-center'>Actions</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    services.map(s =>
                                        <tr>
                                            <td>{s.serviceId}</td>
                                            <td>{s.serviceName}</td>
                                            <td className='text-center'>
                                                <button onClick={() => handleEdit(s.serviceId)} className='btn btn-info btn-sm mr-2'>Edit</button>
                                                <button onClick={() => handleDelete(s.serviceId)} className='btn btn-info btn-sm'>Delete</button>
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