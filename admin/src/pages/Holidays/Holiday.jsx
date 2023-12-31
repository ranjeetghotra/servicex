import React, { useEffect, useState } from 'react';
import holidayService from './../../services/holidayService'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Holiday = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isUpdate = id !== 'add';
    const [formData, setFormData] = useState({
        holidayDate: '',
        holidayTitle: '',
    });
    const minDate = getCurrentDate();

    function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    useEffect(() => {
        if (isUpdate) {
            holidayService.get(id).then(({ holiday }) => {
                setFormData({
                    holidayDate:holiday.holidayDate,
                    holidayTitle:holiday.holidaytitle
                });
            })
        }
    }, [isUpdate, id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isUpdate) {
            holidayService.add(formData).then(() => {
                navigate('/holiday')
                setFormData({
                    holidayDate: '',
                    holidayTitle: '',
                });
            })
        }
    };

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{id === 'add' ? 'Add' : 'Update'} Holiday</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="holidayDate">Holiday Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="holidayDate"
                                name="holidayDate"
                                min={minDate}
                                value={formData.holidayDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="holidayTitle"> Holiday Title </label>
                            <textarea
                                className="form-control"
                                id="holidayTitle"
                                name="holidayTitle"
                                value={formData.holidayTitle}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                        <Link to="/holiday" className="btn btn-light ml-2">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Holiday;