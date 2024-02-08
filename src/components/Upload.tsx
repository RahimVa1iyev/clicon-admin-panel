import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { fetchUploadImage } from '../services/apiProduct'

type Id = {
    id: string | undefined
    handleShow: () => void
}
const Upload = ({ id, handleShow }: Id) => {
    const { setValue, handleSubmit } = useForm()
    console.log('uploaId', id);


    const { mutate } = useMutation({
        mutationFn: (formData: any) => fetchUploadImage({ id, formData }),
        onSuccess: () => {
            handleShow()
        },
        onError: (err) => {
            console.log('err', err);
        }
    })

    const onSubmit = (data: any) => {
        const formData = new FormData()
        formData.append('image', data.image)
        for (const image of data.images) {
            formData.append('images', image); // assuming data.images is an array of files
        }

        mutate(formData)

    }
    return (
        <form className='flex flex-col gap-3 mt-3' onSubmit={handleSubmit(onSubmit)}>
            <input type="file" onChange={(e) => setValue('image', e.target.files[0])} />
            <input multiple type="file" onChange={(e) => setValue('images', e.target.files)} />
            <div className='flex justify-end'>
                <button className='text-[#fff] text-base flex items-center justify-center bg-[#1c2434] rounded-[15px] font-medium py-3 px-10 ' type='submit'>Create</button>
            </div>
        </form>
    )
}

export default Upload