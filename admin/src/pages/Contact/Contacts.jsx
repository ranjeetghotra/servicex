import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../store/slices/contactSlice';
import { useSearchParams } from 'react-router-dom'
import { DateTime } from "luxon";


const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, pagination } = useSelector((state) => state.contacts);
  let [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get('page')
  useEffect(() => {
    dispatch(fetchContacts({ page: page ? page : 1 }));
  }, [dispatch, page]);

  const handlePageClick = (pageNumber) => {
    // Dispatch the fetchAppointments action with the selected page number
    setSearchParams({
      page: pageNumber
    })
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Contacts Messages</h6>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-striped" id="dataTable" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Messge</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>#</th>
                  <th>Time</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Messge</th>
                </tr>
              </tfoot>
              <tbody>
                {
                  !!contacts?.length && contacts.map(contact => {
                    return (
                      <tr key={contact.contactId} >

                        <td>{contact.contactId}</td>
                        <td>{DateTime.fromISO(contact.createdAt).toLocaleString(DateTime.DATETIME_MED)}</td>
                        <td>{contact.customerName}<br />{contact.customerEmail}</td>
                        <td>{contact.subject}</td>
                        <td>{contact.message}</td>
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

export default Contacts;