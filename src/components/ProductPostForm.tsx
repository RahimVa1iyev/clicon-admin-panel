import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Brands, Feature, Product } from '../interfaces'
import Input from './Input'
import SingleSelect from './SingleSelect'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAllBrands } from '../services/apiBrand'
import { fetchGetCategories } from '../services/apiCategory'
import TextArea from './TextArea'
import { Checkbox } from 'antd'
import Upload from './Upload'
import { fetchPostProduct } from '../services/apiProduct'

export  type SelectedFeature = {
    name: string,
    option: string
}
const ProductPostForm = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState()
    const [features, setFeatures] = useState<Feature[]>()
    const [brands, setBrands] = useState<Brands[]>()
    const [selectedFeatures, setSelectedFeatures] = useState<SelectedFeature[]>()
    const [show, setShow] = useState(false)
    const [showBtn, setShowBtn] = useState(true)
    const { setValue, handleSubmit } = useForm<Product>()


    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchGetCategories
    })


    const { mutate,data :productId } = useMutation({
        mutationFn: (mutateData: Product) => fetchPostProduct(mutateData),
        onSuccess: () => {
            setShow(!show)
            setShowBtn(!showBtn)
            
        },
        onError: (err) => {
            console.log('err', err);

        }

    })

    console.log('data',productId);
    

    useEffect(() => {
        if (selectedCategoryId) {
            const filterCategories = categories?.find((category) => category._id === selectedCategoryId)
            setFeatures(filterCategories?.features)
            setBrands(filterCategories?.brands)
        }
    }, [selectedCategoryId])

    const onSubmit = (data: Product) => {

        const mutateData = {
            ...data,
            features: selectedFeatures
        }
        mutate(mutateData)
    }
    return (
        <>
            <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                <Input type='text' id='name' name='name' placeholder='Product name' handleChange={(e: any) => setValue('name', e.target.value)} />
                <SingleSelect id='category' placeholder='Categories' onChange={(selectedData: any) => { setValue('categoryId', selectedData); setSelectedCategoryId(selectedData) }} options={categories} />
                {
                    brands &&
                    <SingleSelect id='brand' placeholder='Brands' onChange={(selectedData: any) => setValue('brandId', selectedData)} options={brands} />
                }
                {
                    features &&
                    features.map((feature) => (
                        <SingleSelect key={feature._id} id={feature.name} placeholder={feature.name} onChange={(selectedData: any) => { setSelectedFeatures((prev: SelectedFeature[] | undefined) => [...(prev ?? []), { name: feature.name, option: selectedData }]) }} options={feature.options} />
                    ))
                }
                <TextArea handleChange={(e: any) => setValue('description', e.target.value)} />
                <Input type='number' id='costPrice' name='costPrice' placeholder='Cost Price' handleChange={(e: any) => setValue('costPrice', e.target.value)} />
                <Input type='number' id='salePrice' name='salePrice' placeholder='Sale Price' handleChange={(e: any) => setValue('salePrice', e.target.value)} />
                <Input type='number' id='discountPercent' name='discountPercent' placeholder='Discount Percent' handleChange={(e: any) => setValue('discountPercent', e.target.value)} />
                <Input type='number' id='bestDiscountPercent' name='bestDiscountPercent' placeholder='Best Discount Percent' handleChange={(e: any) => setValue('bestDiscountPercent', e.target.value)} />
                <Input type='number' id='stockStatus' name='stockStatus' placeholder='Stock Status' handleChange={(e: any) => setValue('stockStatus', e.target.value)} />
                <Checkbox onChange={(e) => setValue('isHot', e.target.checked)}>Is Hot</Checkbox>
                <Checkbox onChange={(e) => setValue('isFeature', e.target.checked)}>Is Feature</Checkbox>
                {showBtn &&
                    <div className='flex justify-end'>
                        <button className='text-[#fff] text-base flex items-center justify-center bg-[#1c2434] rounded-[15px] font-medium py-3 px-10 ' type='submit'>Next</button>
                    </div>}
            </form>

            {
                show &&
                <Upload id={productId} />

            }



        </>
    )
}

export default ProductPostForm