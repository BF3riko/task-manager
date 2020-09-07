import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import { observer } from 'mobx-react';

import ListStore from '../store/ListStore';

const DetailPage = observer((props) => {
  const { history } = props;

  // useEffect(() => {
    // ListStore.currentItem =
  // })

  const handleBack = async (event, itemId, itemTitle) => {
    await ListStore.handleEditItem(itemId, itemTitle);
    history.push('/');
  }

  const handleSetValue = (event) => {
    const {value} = event.target;

    ListStore.currentItem.title = value;
  }

  return (
    <Fragment>
      {ListStore.currentItem !== null ?
        <section className='wrapper detail-item'>
          <h1 className='detail-item__h1'>Задача №{ListStore.currentItem.id}</h1>

          <p className='detail-item__text'>Краткое описание</p>

          <input className='detail-item__input' type='text'
            value={ListStore.currentItem.title}
            onChange={handleSetValue}
          />

          <button className='button button--back'
            onClick={(event) => handleBack(event, ListStore.currentItem.id, ListStore.currentItem.title)}
          >
            Вернуться в список
          </button>
        </section> :
        <section className='wrapper'>
          <button className='button button--back'
            onClick={() => history.push('/')}
          >
            Вернуться в список
          </button>
        </section>
      }
    </Fragment>
  )
})

export default withRouter(DetailPage);
