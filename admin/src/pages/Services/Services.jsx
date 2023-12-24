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
        if (window.confirm('Are you sure to delete?')) {
            serviceService.delete(id).then(() => {
                dispatch(fetchServices({ page: 1 }));
            })
        }
    };

    return (
        <>
            <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Services</h6>
                    <Link class=" d-sm-inline-block btn btn-sm btn-primary shadow-sm" to='/service/add'>
                        <i class="fas fa-plus-circle fa-sm text-white-50"></i> Add Service</Link>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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
                                                    <i class="fas fa-pencil-alt fa-sm text-info"></i>
                                                </button>
                                                <button onClick={() => handleDelete(s.serviceId)} className='btn btn-light btn-sm'>
                                                    <i class="fas fa-trash fa-sm text-danger"></i>
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