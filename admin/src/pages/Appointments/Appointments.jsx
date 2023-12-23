import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments,updateStatus } from '../../store/slices/appointmentsSlice';
import {useSearchParams} from 'react-router-dom'
import {DateTime} from 'luxon'
const Appointments = () => {
    const dispatch = useDispatch();
    const { appointments, loading, error,pagination } = useSelector((state) => state.appointments);
    let [searchParams, setSearchParams ]= useSearchParams();
    let page = searchParams.get('page')

    
    useEffect(() => {
      
      dispatch(fetchAppointments({page: page?page:1}));
    }, [page]);
    const handlePageClick = (pageNumber) => {
        // Dispatch the fetchAppointments action with the selected page number
        setSearchParams({
            page:pageNumber
        })
      };
    const onStatusChange  = (event)=>{
        //on Status Change
        console.log(event.target.id);
        dispatch(updateStatus({
            appointmentId:event.target.id,
            status:event.target.value
        }))
        // console.log(event.target.)
    }

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Appointments</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table onChange={onStatusChange}  className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Appointment Id</th>
                                    <th>Status</th>
                                    <th>Appointment Date</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Service Id</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Appointment Id</th>
                                    <th>Status</th>
                                    <th>Appointment Date</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Service Id</th>
                                    
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    appointments?.map(appointment=>{
                                        return(
                                            <tr key={appointment.appointmentId} >
                                            <td>{appointment.appointmentId}</td>
                                            <td>
                                                <select defaultValue={appointment.status}  name={appointment.appointmentId}   id={appointment.appointmentId} className='form-control w-auto ' 
                                                >
                                                    <option value="confirmed">Confirmed</option>
                                                    <option value="requested">Requested</option>
                                                    <option value="completed">Completed</option>
                                                    <option value="canceled">Canceled</option>
                                                </select>

                                            </td>
                                            <td>{DateTime.fromISO(appointment.appointmentDate).setZone('Pacific/Auckland').toFormat('yyyy-LL-dd HH:mm:ss')}</td>
                                            <td>{appointment.customerName}</td>
                                            <td>{appointment.customerEmail}</td>
                                            <td>{appointment.customerPhone}</td>
                                            <td>{appointment.serviceId}</td>
                                            
                                        </tr>
                                 
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${pagination.hasPrevPage ? '' : 'disabled'}`}>
                  <a
                    className="page-link"
                    href="#"
                    tabIndex="-1"
                    onClick={() => handlePageClick(pagination.currentPage - 1)}
                  >
                    Previous
                  </a>
                </li>

                {[...Array(pagination.totalPages).keys()].map((pageNumber) => (
                  <li key={pageNumber + 1} className={`page-item ${pageNumber+1 == page ? 'active' : ''}`}>
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => handlePageClick(pageNumber + 1)}
                    >
                      {pageNumber + 1}
                    </a>
                  </li>
                ))}

                <li className={`page-item ${pagination.hasNextPage ? '' : 'disabled'}`}>
                  <a
                    className="page-link"
                    href="#"
                    onClick={() => handlePageClick(pagination.currentPage + 1)}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Appointments;