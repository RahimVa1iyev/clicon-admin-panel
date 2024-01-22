import { type FC, type ReactNode } from "react"

type FromLayoutProps = {
  children : ReactNode
}

const FormLayout : FC<FromLayoutProps> = ({children}) => {
    return (
        <>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
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