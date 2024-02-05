import { useMutation, useQuery } from '@tanstack/react-query';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useMemo, useState } from 'react';
import { fetchAllBrands, fetchDeleteBrand } from '../services/apiBrand';
import { Brands } from '../interfaces';
import Table from './Table';
import { Button } from 'antd';

type BrandTableProp = {
  handleShow: () => void
}

export interface CustomColDef extends ColDef {
  cellRendererFramework?: any;
}

const BrandTable = ({ handleShow }: BrandTableProp) => {

  const { data, isLoading, refetch } = useQuery<Brands[]>({
    queryKey: ['all-brands'],
    queryFn: fetchAllBrands
  });

  const { mutate } = useMutation({
    mutationFn: (brandId: string) => fetchDeleteBrand(brandId),
    onSuccess: () => {
      refetch();
    }
  });


  const handleDelete = (brandId: string) => {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      mutate(brandId);
    }
  };

  const [colDefs] = useState<CustomColDef[]>([
    { field: '_id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'categoryCount', headerName: 'Category Count' },
    { field: 'productCount', headerName: 'Product Count' },
    { field: 'createdAt', headerName: 'Created At' },

    {
      headerName: 'Actions', field: '_id',editable:false, checkboxSelection: false,
      cellRenderer: (params: any) =>
        <div className='flex items-center gap-2'>
          <Button onClick={() =>handleDelete(params.value)} type="primary" danger ghost>
            Delete
          </Button>
          <Button type="primary" ghost>
            Update
          </Button>
        </div>
    }
  ]);

  const brandsWithCounts = useMemo(() => {
    if (!data) return [];
    return data.map(brand => ({
      ...brand,
      categoryCount: brand.categories.length,
      productCount: brand.products.length
    }));
  }, [data]);

  return (
    <>
      <Table onShow={handleShow} data={brandsWithCounts} columns={colDefs} />
    </>
  );
};

export default BrandTable;
