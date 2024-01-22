

const BrandPostForm = () => {
    return (
        <>
                <form action="#">
                    <div className="p-6.5">
                        <div className="mb-4.5">
                            <label className="mb-2.5 block text-black dark:text-white">
                                Name
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            />
                        </div>
                        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            Create
                        </button>
                    </div>
                </form>



        </>
    )
}

export default BrandPostForm