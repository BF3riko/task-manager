import React from 'react';
import { observer } from 'mobx-react';

import ListStore from '../store/ListStore';

const ModalCreate = observer((props) => {
  const {handleCloseModal, handleCreateItem} = props;

  const handleGetTitle = (event) => {
    const {value} = event.target;

    ListStore.title = value;
  }

  return (
    <form className='modal' onSubmit={handleCreateItem}>
      <div className='modal__wrapper'>
        <p>Краткое описание</p>

        <button className='modal__btn' onClick={handleCloseModal}/>
      </div>

      <input className='modal__input' type='text' onChange={handleGetTitle}/>

      <div className='modal__btn-wr'>
        <button className='button button--add'>
          Создать
        </button>
      </div>
    </form>
  )
})

export default ModalCreate;
