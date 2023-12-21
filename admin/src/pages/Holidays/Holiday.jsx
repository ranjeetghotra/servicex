import React, { useEffect, useState } from 'react';
import holidayService from './../../services/holidayService'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
const Holiday = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isUpdate = id !== 'add';
    const [formData, setFormData] = useState({
        holidayDate: '',
        holidayTitle: '',
    });
    
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
        console.log('submit called')
        e.preventDefault();
        if (isUpdate) {
            console.log("is update")
            // serviceService.update(id, formData).then((res) => {
            //     alert('Successfully updated');
            //     // navigate('/service')
            // });
        } else {
            holidayService.add(formData).then(() => {
                // navigate('/holiday')
                setFormData({
                    holidayDate: '',
                    holidayTitle: '',
                });
            })
        }
    };

    return (
        <>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">{id === 'add' ? 'Add' : 'Update'} Holiday</h6>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="holidayDate">Holiday Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="holidayDate"
                                name="holidayDate"
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
                        <Link to="/service" className="btn btn-light ml-2">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Holiday;