import React, { useState } from 'react'
import Table from '../../components/Table'
import FormLayout from '../../components/FormLayout'
import ProductPostForm from '../../components/ProductPostForm'
import ProductTable from '../../components/ProductTable'

const Product = () => {
    const [showPostForm, setShowPostForm] = useState<boolean>(false)

    const handleShow = () => {
        setShowPostForm(!showPostForm)
    }


    return (
        <>

            {
                showPostForm ?
                    <FormLayout handleShow={handleShow} >
                        <ProductPostForm />
                    </FormLayout> :
                    <ProductTable handleShow ={handleShow} />
            }

        </>
    )
}

export default Product