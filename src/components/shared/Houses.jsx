import React from 'react';
import useLoadData from '../hooks/useLoadData';

const Houses = () => {
    const [houses, isHousesLoading, refetchHouses] = useLoadData('/houses', 'Houses')

    return (
        <div>

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