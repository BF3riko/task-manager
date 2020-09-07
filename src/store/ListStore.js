import {action, decorate, observable} from "mobx";
import API from '../api/API';

class ListStore {

  items = [];

  currentItem = null;

  showModalCreate = false;

  title = '';

  API = new API();

  async getItemList() {
    await API.getList().then(action('fetchSuccess', items => {
      this.items = items.data;
    }));
  }

  async createItems(itemTitle) {
    await API.createItem(itemTitle);
  }

  async handleEditItem(itemId, itemTitle) {
    await API.itemEdit(itemId, itemTitle);
  }

  async handleItemDelete(itemId) {
    await API.itemDelete(itemId);
  }
}

decorate(ListStore, {
  items: observable,
  showModalCreate: observable,
  title: observable,
  currentItem: observable,
  getItemList: action,
  createItems: action
})

export default new ListStore();
