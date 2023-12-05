import React, { useState } from 'react';
import serviceService from '../../services/serviceService';
import { useParams } from 'react-router-dom';

const Service = () => {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    [name]: reader.result,
                });
            };

            reader.readAsDataURL(file);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        serviceService.create(formData).finally(() => {
            setFormData({
                name: '',
                description: '',
            });
        })
    };

    return (
        <>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">{id === 'add' ? 'Add' : 'Update'} Service</h6>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <img className='img-thumbnail mb-2' style={{ height: 50, minWidth: 70 }} src={formData.image} alt="" />
                        <div className="form-group">
                            <label htmlFor="image">Image:</label>
                            <input
                                type="file"
                                className="form-control-file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Service;