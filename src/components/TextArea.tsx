
type TextAreaProps = {
    handleChange: any
}

const TextArea = ({ handleChange } :TextAreaProps) => {
    return (
        <textarea
            id='description'
            name='description'
            onChange={handleChange}
            placeholder='Desription'
            className="py-[10px] px-[16px] border-[1px] border-solid border-gray200 rounded-[16px] w-full text-base text-gray350 font-normal"
        />
    )
}

export default TextArea