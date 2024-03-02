import React, { useEffect, useState } from 'react';
import serviceService from '../../services/serviceService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Service = () => {
    const [items, setItems] = useState([{ id: 0, title: '', description: '' }]);
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
                setItems(service.highlights.map((highlight, index) => ({
                    id: index,
                    title: highlight.title,
                    description: highlight.description
                })));
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
    const handleRemoveItem = (indexToRemove) => {
        const updatedItems = [...items];
        updatedItems.splice(indexToRemove, 1);
        setItems(updatedItems);
    };

    const handleTitleChange = (id, value) => {
        setItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, title: value } : item
        ));
    };

    const handleDescriptionChange = (id, value) => {
        setItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, description: value } : item
        ));
    };
    const handleAddItem = () => {
        const newItemId = items.length > 0 ? items[items.length - 1].id + 1 : 0;
        setItems([...items, { id: newItemId, title: '', description: '' }]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestData = {
            ...formData,
            highlights: items.map(({ title, description }) => ({ title, description }))
        };
        if (isUpdate) {
            serviceService.update(id, requestData).then((res) => {
                alert('Successfully updated');
                navigate('/service');
            }).catch(error => {
                console.error('Error updating service:', error);
            });
        } else {
            serviceService.create(requestData).then(() => {
                navigate('/service');
                setFormData({
                    name: '',
                    description: '',
                });
            }).catch(error => {
                console.error('Error creating service:', error);
            });
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

                        <div>
                            <ul className="list-group">
                                {items.map(({ id, title, description }, index) => (
                                    <li className="list-group-item" key={id}>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <label htmlFor={`title${id}`}>Title {id + 1}:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id={`title${id}`}
                                                        name={`title${id}`}
                                                        value={title}
                                                        onChange={(e) => handleTitleChange(id, e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor={`description${id}`}>Description {id + 1}:</label>
                                                    <textarea
                                                        className="form-control"
                                                        id={`description${id}`}
                                                        name={`description${id}`}
                                                        value={description}
                                                        onChange={(e) => handleDescriptionChange(id, e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-right">
                                                <div className="mt-2"> {/* Add margin top */}
                                                    <button type="button" className="btn btn-light btn-sm" onClick={() => handleRemoveItem(index)}>
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <button type="button" className="btn btn-success mt-2" onClick={handleAddItem}>
                                Add Item
                            </button>
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
                                required={!isUpdate}
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