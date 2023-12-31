import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon'
import { fetchHolidays } from '../../store/slices/holidaysSlice';
import { deleteHoliday } from '../../store/slices/holidaysSlice';

const Holidays = () => {
    const dispatch = useDispatch();
    const { holidays, loading, error } = useSelector((state) => state.holidays);
    console.log(holidays)
    useEffect(() => {
        dispatch(fetchHolidays({}));
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteHoliday(id));
        }
    };

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header d-flex justify-content-between align-items-center py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Holidays</h6>
                    <Link className="btn btn-icon-split btn-sm btn-primary shadow-sm" to='/holiday/add'>
                        <span className="icon text-white-50">
                            <i className="fas fa-plus-circle fa-sm"></i>
                        </span>
                        <span className="text">Add Holiday</span>
                    </Link>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-striped" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th style={{ width: 150 }}>Date</th>
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
                                    holidays.map(s =>
                                        <tr key={s.holidayId} >
                                            <td>{DateTime.fromISO(s.holidayDate).toLocaleString(DateTime.DATE_MED)}</td>
                                            <td>{s.holidayTitle}</td>
                                            <td className='text-center'>
                                                <button onClick={() => handleDelete(s.holidayId)} className='btn btn-light btn-sm'>
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

export default Holidays;