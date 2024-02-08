import React, { useState } from 'react'
import { CustomColDef } from './BrandTable';
import { Button } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { fetchGetProducts } from '../services/apiProduct';
import Table from './Table';
import { Product } from '../interfaces';

type ProductTableProps = {
    handleShow: () => void
}

const ProductTable = ({ handleShow }: ProductTableProps) => {

    const { data: products } = useQuery({
        queryKey: ['products'],
        queryFn: fetchGetProducts
    })


    const [colDefs] = useState<CustomColDef[]>([
        { field: '_id', headerName: 'ID' },
        { field: 'name', headerName: 'Name' },
        { field: 'categoryId.name', headerName: 'Category' },
        { field: 'brandId.name', headerName: 'Brand' },
        {
            field: 'features', headerName: 'Features',
            valueGetter: (params: any) => {
                const features = params.data.features;
                return features.map((feature: any) => `${feature.name}: ${feature.option}`).join(', ');
            }
        },
        { field: 'description', headerName: 'Description' },
        { field: 'costPrice', headerName: 'Cost Price' },
        { field: 'salePrice', headerName: 'Sale Price' },
        { field: 'discountPercent', headerName: 'Discount Percent' },
        {
            field: 'stockCount', headerName: 'Stock Count',
            valueGetter: (params: any) => params.data.stockCount
        },
        // {
        //     headerName: 'Actions',
        //     field: '_id',
        //     editable: false,
        //     checkboxSelection: false,
        //     cellRenderer: (params: any) => (
        //         <div className='flex items-center gap-2'>
        //             <Button type="primary" danger ghost>
        //                 Delete
        //             </Button>
        //             <Button type="primary" ghost>
        //                 Update
        //             </Button>
        //         </div>
        //     )
        // }
    ]);



    return (
        <>
            <Table<Product> data={products} columns={colDefs} onShow={handleShow} name='Product' />
        </>
    )
}

export default ProductTable