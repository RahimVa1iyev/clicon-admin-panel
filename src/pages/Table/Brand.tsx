import { useState } from "react"
import BrandPostForm from "../../components/BrandPostForm"
import FormLayout from "../../components/FormLayout"
import BrandTable from "../../components/BrandTable"
import Table from "../../components/Table"

const Brand = () => {
  const [showPostForm, setShowPostForm] = useState<boolean>(false)
  const [showPatchForm, setShowPatchForm] = useState<boolean>(false)
  const [showForm, setShowForm] = useState<boolean>(false)


  const handleShow = () => {
    setShowPostForm(!showPostForm)
  }

  return (
    <>
      {showPostForm ?
        <FormLayout handleShow = {handleShow} >
          <BrandPostForm handleShow = {handleShow}   />
        </FormLayout> :
        <BrandTable handleShow = {handleShow} />
      }
    </>
  )
}

export default Brand