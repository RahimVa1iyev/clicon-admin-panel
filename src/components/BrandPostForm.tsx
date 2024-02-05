import { useMutation, useQuery } from "@tanstack/react-query"
import MultiSelect from "./MultiSelect"
import { fetchGetCategories } from "../services/apiCategory"
import { useEffect, useState } from "react"
import { BrandPost, Category, Option } from "../interfaces";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { fetchCreateBrand } from "../services/apiBrand";

type PostCategoryData = {
    name: string,
}

type BrandPostFormProp = {
    handleShow: () => void
}

const BrandPostForm = ({ handleShow }: BrandPostFormProp) => {
    const [categoryOptions, setCategoryoptions] = useState<Option[]>([])

    const { data: categories } = useQuery<Category[]>({
        queryKey: ['categories'],
        queryFn: fetchGetCategories
    })

    const { mutate } = useMutation({
        mutationFn: (mutateData: BrandPost) => fetchCreateBrand(mutateData),
        onSuccess: () => {
            handleShow()
        },
        onError: (err) => {
            console.log('err', err);

        }
    })

    const { setValue, handleSubmit } = useForm<BrandPost>()

    useEffect(() => {
        if (categories) {
            const options: Option[] = categories.map(category => ({
                label: category.name,
                value: category._id
            }));
            setCategoryoptions(options);
        }
    }, [categories])

    const onSubmit = (data: BrandPost) => {
        mutate(data)
    }
    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="p-6.5">
                    <div className="mb-4.5">
                        <input
                            type="text"
                            name='name'
                            onChange={(e) => setValue('name', e.target.value)}
                            placeholder="Brand name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <MultiSelect onChange={(selectedCategory: any) => setValue('categoryIds', selectedCategory.map((category: any) => category))} placeholder='Categories' options={categoryOptions} />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="flex  justify-center rounded bg-primary p-3 font-medium text-gray">
                        Create
                    </button>
                </div>
            </form>
        </>
    )
}

export default BrandPostForm