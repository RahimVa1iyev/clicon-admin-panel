import { useState } from "react"
import BrandPostForm from "../../components/BrandPostForm"
import FormLayout from "../../components/FormLayout"
import BrandTable from "../../components/BrandTable"

const Brand = () => {
  const [showPostForm, setShowPostForm] = useState<boolean>(false)
  const [showPatchForm, setShowPatchForm] = useState<boolean>(false)
  const [showForm, setShowForm] = useState<boolean>(false)


  const handleShow = () => {
    setShowPatchForm(!showPatchForm)
  }

  return (
    <>
      {showForm ?
        <FormLayout >
          <BrandPostForm />
        </FormLayout> :
        
        <BrandTable />
      }

    </>
  )
}

export default Brand