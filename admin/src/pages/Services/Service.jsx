import React, { useEffect, useState } from 'react';
import serviceService from '../../services/serviceService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isUpdate = id !== 'add';

    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    useEffect(() => {
        if (isUpdate) {
            serviceService.get(id).then(({ service }) => {
                setFormData({
                    name: service.serviceName,
                    description: service.serviceDescription,
                });
            })
        }
    }, [isUpdate, id]);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            if (e.target.files.length) {

                const file = e.target.files[0];
                const reader = new FileReader();

                reader.onloadend = () => {
                    setFormData({
                        ...formData,
                        [name]: reader.result,
                    });
                };

                reader.readAsDataURL(file);
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isUpdate) {
            serviceService.update(id, formData).then((res) => {
                alert('Successfully updated');
                navigate('/service')
            });
        } else {
            serviceService.create(formData).then(() => {
                navigate('/service')
                setFormData({
                    name: '',
                    description: '',
                });
            })
        }
    };

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{id === 'add' ? 'Add' : 'Update'} Service</h6>
                </div>
                <div className="card-body">
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
                        <Link to="/service" className="btn btn-light ml-2">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Service;