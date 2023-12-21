import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchHolidays } from '../../store/slices/holidaysSlice';
import { deleteHoliday } from '../../store/slices/holidaysSlice';

const Holidays = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { holidays, loading, error } = useSelector((state) => state.holidays);
    console.log(holidays)
    useEffect(() => {
        dispatch(fetchHolidays({}));
    }, [dispatch]);

    const handleEdit = (id) => {
        navigate(`/holiday/${id}`);
    };

    const handleDelete = (id) => {
       dispatch(deleteHoliday(id));
    };

    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <Link class=" d-sm-inline-block btn btn-sm btn-primary shadow-sm" to='/holiday/add'>
                    <i class="fas fa-plus-circle fa-sm text-white-50"></i> Add Holiday</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Holidays</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Title</th>
                                    <th style={{ width: 150 }} className='text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Date</th>
                                    <th>Title</th>
                                    <th className='text-center'>Actions</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                   holidays &&  holidays?.map(s =>
                                        <tr key={s.holidayId} >
                                            <td>{s.holidayDate}</td>
                                            <td>{s.holidayTitle}</td>
                                            <td className='text-center'>
                                                {/* <button onClick={() => handleEdit(s.holidayId)} className='btn btn-info btn-sm mr-2'>Edit</button> */}
                                                <button onClick={() => handleDelete(s.holidayId)} className='btn btn-info btn-sm'>Delete</button>
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

export default Holidays;