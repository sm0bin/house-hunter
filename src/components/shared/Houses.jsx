import React, { useState } from 'react';
import useLoadData from '../hooks/useLoadData';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Houses = () => {
    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    // const [houses, isHousesLoading, refetchHouses] = useLoadData(`/houses?page=${currentPage}&limit=${itemsPerPage}`, 'Houses')
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const itemsPerPageOptions = [6, 12, 24];

    const { data: houses, isLoading: isHousesLoading, refetch: refetchHouses } = useQuery({
        queryKey: ['houses', currentPage, itemsPerPage, search, filter, sort],
        queryFn: () => axiosPublic(`/houses?page=${currentPage}&limit=${itemsPerPage}`),
        keepPreviousData: true
        // & search=${ search } & filter=${ filter } & sort=${ sort }`)
    });


    console.log(currentPage, itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
        refetchHouses();
    }

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        refetchHouses();
    }

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
                    {/* <select className="select select-bordered join-item">
                        <option disabled selected>Filter</option>
                        <option>Sci-fi</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select> */}
                    {/* <select className="select select-bordered join-item">
                        <option disabled selected>Sort</option>
                        <option>Alphabetical</option>
                        <option>Recently Added</option>
                        <option>Most Popular</option>
                    </select> */}
                    <select className="select select-bordered join-item">
                        {/* <option disabled selected>Items per page</option> */}
                        {
                            itemsPerPageOptions.map(item => (
                                <option key={item} value={itemsPerPage} onChange={() => setItemsPerPage(item)}>{item}</option>
                            ))
                        }
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
                                houses.data.houses?.map(house => (
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

            <div className="join my-4">
                <button onClick={handlePrevPage} disabled={currentPage <= 1} className="join-item btn">«</button>
                <button className="join-item btn">Page {currentPage}</button>
                <button onClick={handleNextPage} className="join-item btn">»</button>
            </div>

            {/* <div className="join">
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>

            <div className="join grid grid-cols-2">
                <button className="join-item btn btn-outline">Previous page</button>
                <button className="join-item btn btn-outline">Next</button>
            </div> */}



        </div>
    );
};

export default Houses;