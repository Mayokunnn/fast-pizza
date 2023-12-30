import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type={`round`}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <p className="text-sm font-medium">{currentQuantity} </p>
      <Button
        type={`round`}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
