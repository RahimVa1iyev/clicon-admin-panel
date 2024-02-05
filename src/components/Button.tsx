// DeleteButton.js
import { CustomCellRendererProps } from 'ag-grid-react';

export default function DeleteButton (props: CustomCellRendererProps & { handleDelete: (brandId: string) => void }) {
  const buttonClicked = () => {
    const { data, handleDelete } = props;
    if (data && data._id) {
      handleDelete(data._id);
    }
  };

  return (
    <span>
      <button className='py-[0px] px-[26px] bg-danger flex items-center justify-center border-none text-white font-medium' onClick={() => buttonClicked()}>Delete</button>
    </span>
  );
};

