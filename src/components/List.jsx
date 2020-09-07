import React, { useEffect, Fragment } from 'react';
import { withRouter } from "react-router-dom";

import { observer } from 'mobx-react';

import ListStore from '../store/ListStore';

import ItemList from './ItemList';
import ModalCreate from './ModalCreate';

const List = observer((props) => {

  useEffect(() => {
    ListStore.getItemList();
  }, [ListStore.items])

  const handleGetItemList = () => {
    ListStore.showModalCreate = true;

    console.log(ListStore.showModalCreate)
  }

  const handleEditItem = (event, item) => {
    ListStore.currentItem = item;

    props.history.push(`/${item.id}`)
  }

  const handleDeleteItem = async (event, item) => {
    await ListStore.handleItemDelete(item.id);
  }

  const handleCloseModal = () => {
    ListStore.showModalCreate = false;
  }

  const handleCreateItem = async (event) => {
    event.preventDefault();

    await ListStore.createItems(ListStore.title);

    ListStore.showModalCreate = false;
    ListStore.title = '';
  }

  return (
    <Fragment>
      {ListStore.showModalCreate &&
        <ModalCreate
          handleCloseModal={handleCloseModal}
          handleCreateItem={handleCreateItem}
        />
      }
      <section className='list'>
        <div className='list__header'>
          <h1 className='caption__h1'>Список задач</h1>

          <button className='button button--add' onClick={handleGetItemList}>Добавить</button>
        </div>

        {ListStore.items.map(item => {
          return (
            <ItemList
              key={item.id}
              itemId={item.id}
              itemTitle={item.title}
              handleEditItem={(event) => handleEditItem(event, item)}
              handleDeleteItem={(event) => handleDeleteItem(event, item)}
            />
          )
        })}
      </section>
    </Fragment>
  )
})

export default withRouter(List);
