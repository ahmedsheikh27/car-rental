import React, { useEffect, useState } from 'react';

const CarsFilter = ({ carsList, setBrand, priceOrder }: any) => {
    const [brandList, setBrandList] = useState<any>();

    useEffect(() => {
        if (carsList && carsList.length > 0) {
            filterCarsList();
        }
    }, [carsList]);

    const filterCarsList = () => {
        const brandSet = new Set();
        carsList.forEach((element: any) => {
            brandSet.add(element.carBrand);
        });
        setBrandList(Array.from(brandSet));
    };


    return (
        <div className="mt-10 px-5 flex items-center justify-between">
            <div>
                <h2 className="text-[35px] font-bold">Filter cars</h2>
                <h2 className="text-[15px]">Explore our cars you might like</h2>
            </div>
            <div className="flex gap-10">
                <select
                    onChange={(e) => priceOrder(e.target.value)}
                    className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Prices</option>
                    <option value={-1}>Min to Max</option>
                    <option value={1}>Max to Min</option>
                </select>
                <select
                    onChange={(e) => setBrand(e.target.value)}
                    className="select select-bordered w-full max-w-xs md:block hidden">
                    <option disabled selected>Select Brand</option>
                    {brandList &&
                        brandList.map((brand: string, i: number) => (
                            <option key={i} value={brand}>
                                {brand}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};

export default CarsFilter;
