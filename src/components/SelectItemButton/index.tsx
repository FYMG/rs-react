import { Character } from '@models/RickAndMortyApiResponse';
import { useAppDispatch, useAppSelector } from '@services/redux/store';
import { addItem, itemExists, removeItem } from '@services/redux/slices/selectStoreSlice';

export interface ISelectItemButtonProperties {
  item: Character;
  onClick?: () => void;
}

function SelectItemButton({ item, onClick }: ISelectItemButtonProperties) {
  const isItemExists = useAppSelector(itemExists(item.id));
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    if (isItemExists) {
      dispatch(removeItem(item));
    } else {
      dispatch(addItem(item));
    }

    onClick?.();
  };

  return (
    <button onClick={onClickHandler} type="button">
      {isItemExists ? 'Unselect' : 'Select'}
    </button>
  );
}

export default SelectItemButton;
