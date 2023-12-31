import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments, updateStatus } from '../../store/slices/appointmentsSlice';
import { useSearchParams, Link } from 'react-router-dom'
import { DateTime } from 'luxon'
const Appointments = () => {
  const dispatch = useDispatch();
  const { appointments, loading, error, pagination } = useSelector((state) => state.appointments);
  let [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get('page')


  useEffect(() => {

    dispatch(fetchAppointments({ page: page ?? 1 }));
  }, [dispatch, page]);

  const handlePageClick = (pageNumber) => {
    // Dispatch the fetchAppointments action with the selected page number
    setSearchParams({
      page: pageNumber
    })
  };
  const onStatusChange = (event) => {
    //on Status Change
    console.log(event.target.id);
    dispatch(updateStatus({
      appointmentId: event.target.id,
      status: event.target.value
    }))
    // console.log(event.target.)
  }

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Appointments</h6>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table onChange={onStatusChange} className="table table-striped" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Status</th>
                  <th>Appointment Date</th>
                  <th>Name</th>
                  <th>Service</th>
                  <th></th>

                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>#</th>
                  <th>Status</th>
                  <th>Appointment Date</th>
                  <th>Name</th>
                  <th>Service</th>
                  <th></th>

                </tr>
              </tfoot>
              <tbody>
                {
                  appointments?.map(appointment => {
                    return (
                      <tr key={appointment.appointmentId} >
                        <td>{appointment.invoiceNumber}</td>
                        <td>
                          <select defaultValue={appointment.status} name={appointment.appointmentId} id={appointment.appointmentId} className='form-control w-auto '
                          >
                            <option value="requested" hidden>Requested</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="canceled">Canceled</option>
                          </select>

                        </td>
                        <td>{DateTime.fromISO(appointment.appointmentDate).setZone('Pacific/Auckland').toLocaleString(DateTime.DATETIME_MED)}</td>
                        <td>{appointment.customerName}</td>
                        <td>{appointment.service.serviceName}</td>
                        <td>
                          <Link to={`/appointment/${appointment.appointmentId}`} className='btn btn-light btn-sm'>
                            <i className="fas fa-eye fa-sm text-primary"></i>
                          </Link>
                        </td>
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
                  <li key={pageNumber + 1} className={`page-item ${pageNumber + 1 == page ? 'active' : ''}`}>
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