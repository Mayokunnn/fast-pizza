import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(id))} type={`small`}>
      Delete
    </Button>
  );
}

export default DeleteItem;
