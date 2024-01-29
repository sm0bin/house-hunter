import React from 'react';
import useLoadData from '../hooks/useLoadData';

const Houses = () => {
    const [houses, isHousesLoading, refetchHouses] = useLoadData('/houses', 'Houses')

    return (
        <div className='mx-4 md:mx-5 lg:mx-auto max-w-7xl'>
            <div className='text-center py-8 flex justify-between items-center'>
                <h1 className='text-4xl font-bold'>Houses</h1>

                <div className="join">
                    <div>
                        <div>
                            <input className="input input-bordered join-item" placeholder="Search" />
                        </div>
                    </div>
                    <select className="select select-bordered join-item">
                        <option disabled selected>Filter</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                    <div className="indicator">
                        <button className="btn btn-primary join-item">Search</button>
                    </div>
                </div>
            </div>

            <div>
                {
                    isHousesLoading ?
                        <div>Loading...</div>
                        :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                houses?.map(house => (
                                    <div key={house._id} className="card card-compact bg-base-100 shadow-xl">
                                        <figure><img className='h-72 w-full object-cover' src={house?.thumbnail} alt={house?.owner} /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{house?.owner}</h2>
                                            <p>{house?.rent}</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>

        </div>
    );
};

export default Houses;