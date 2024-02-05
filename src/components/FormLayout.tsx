import { type FC, type ReactNode } from "react"
import { IoIosArrowBack } from "react-icons/io";


type FromLayoutProps = {
    children: ReactNode
    handleShow: () => void
}

const FormLayout: FC<FromLayoutProps> = ({ children, handleShow }) => {
    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div onClick={handleShow} className="pt-5 pl-5 flex items-center gap-1 cursor-pointer">
                    <IoIosArrowBack className='text-lg ' />
                    <span className="text-lg font-semibold text-graydark" >Back</span>
                </div>
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        {children}
                    </h3>
                </div>
            </div>
        </>
    )
}

export default FormLayout