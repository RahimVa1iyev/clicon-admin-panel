import { useMutation, useQuery } from "@tanstack/react-query"
import MultiSelect from "./MultiSelect"
import { fetchGetCategories } from "../services/apiCategory"
import { useEffect, useState } from "react"
import { BrandPost, Category, Feature, Option } from "../interfaces";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { fetchCreateBrand } from "../services/apiBrand";
import { SelectedFeature } from "./ProductPostForm";

type PostCategoryData = {
    name: string,
}

type BrandPostFormProp = {
    handleShow: () => void
}

const BrandPostForm = ({ handleShow }: BrandPostFormProp) => {
    const [categoryOptions, setCategoryoptions] = useState<Option[]>([])
    const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>()
    const [features, setFeatures] = useState<Feature[][]>()
    const [selectedFeatures, setSelectedFeatures] = useState<SelectedFeature[]>()

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

            const filteredFeatures = categories
                .filter(category => selectedCategoryIds?.includes(category._id))
                .map(category => category.features);
            setFeatures(filteredFeatures)
        }
    }, [categories, selectedCategoryIds]);




    const onSubmit = (data: BrandPost) => {
        const mutateData = {
            ...data,
            features: selectedFeatures
        }
        console.log('mutateData', mutateData);

        mutate(mutateData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col gap-3 mb-4">
                    <div >
                        <input
                            type="text"
                            name='name'
                            onChange={(e) => setValue('name', e.target.value)}
                            placeholder="Brand name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    <div>
                        <MultiSelect onChange={(selectedCategory: any) => { setValue('categoryIds', selectedCategory.map((category: any) => category)); setSelectedCategoryIds(selectedCategory) }} placeholder='Categories' options={categoryOptions} />
                    </div>
                    <div className="flex flex-col gap-3">
                        {features &&
                            features.map((featureGroup, index) => (
                                <div key={index}>
                                    {featureGroup.map((feature) => (
                                        <MultiSelect
                                            key={feature._id}
                                            onChange={(selectedData: any) => {
                                                // Filter out previously selected features with the same name
                                                setSelectedFeatures((prevFeatures: SelectedFeature[] | undefined) => {
                                                    const filteredFeatures = prevFeatures?.filter((prevFeature) => prevFeature.name !== feature.name);
                                                    return [...(filteredFeatures ?? []), { name: feature.name, option: selectedData }];
                                                });
                                            }}
                                            placeholder={feature.name}
                                            options={feature.options}
                                        />
                                    ))}
                                </div>
                            ))}
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