import { createPortal } from 'react-dom';
import { useAppDispatch, useAppSelector } from '@services/redux/store';
import { clear, itemsCount, selectItems } from '@services/redux/slices/selectStoreSlice';
import { downloadCharacterCSV } from '@services/csv';

function ItemsActionsModal() {
  const totalSelected = useAppSelector(itemsCount);
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  return createPortal(
    totalSelected > 0 && (
      <div className="fixed bottom-2 right-2 z-10 flex flex-col rounded-2xl bg-zinc-800 p-4 text-white dark:bg-zinc-950">
        <h2>Total selected: {totalSelected}</h2>
        <div className="flex gap-2">
          <button type="button" onClick={() => dispatch(clear())}>
            Unselect all
          </button>
          <button type="button" onClick={() => downloadCharacterCSV(items)}>
            Download cvs
          </button>
        </div>
      </div>
    ),
    document.body
  );
}

export default ItemsActionsModal;
