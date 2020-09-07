import React from 'react';

import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon';

const ItemList = (props) => {
  const { itemId, itemTitle, handleEditItem, handleDeleteItem } = props;

  return (
    <div className='item-list'>
      <div className='item-list__task-number'>
        <p>Задача №{itemId}</p>
      </div>

      <div className='item-list__dsc'>
        <p>
          {itemTitle}
        </p>
      </div>

      <div className='item-list__btn-wr'>
        <button className='item-list__btn' onClick={handleEditItem}>
          <EditIcon />
        </button>
        <button className='item-list__btn' onClick={handleDeleteItem}>
          <DeleteIcon />
        </button>
      </div>

    </div>
  )
}

export default ItemList;
