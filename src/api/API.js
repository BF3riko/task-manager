import axios from 'axios';

class API {

  static async getList() { //Поулчить все
    const instance = axios.create(config);
    let response = null;

    try {
      response = await instance
        .get('')
    } catch (error) {
      throw error
    }

    return response.data;
  }

  static async createItem(itemTitle) { //Создание
    const instance = axios.create(config);
    let response = null;

    try {
      response = await instance
        .post('', {
          title: itemTitle
        })
    } catch (error) {
      throw error
    }

    return response.data;
  }

  static async itemEdit(itemId, itemTitle) { //Редактирование
    const instance = axios.create(config);
    let response = null;

    try {
      response = await instance
        .post(`/${itemId}`, {
          title: itemTitle
        })
    } catch (error) {
      throw error
    }

    return response.data;
  }

  static async itemDelete(itemId) { //Удаление
    const instance = axios.create(config);
    let response = null;

    try {
      response = await instance
        .delete(`/${itemId}`)
    } catch (error) {
      throw error
    }

    return response.data;
  }
}

const config = {
  baseURL: 'https://test.megapolis-it.ru/api/list',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 3000
}

export default API;
