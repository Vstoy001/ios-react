// const _data = {};
//
// const UserStore = {
//   set: item => _data = item,
//   get: () => _data
// }
//
// Object.freeze(UserStore);
// export default UserStore;

class UserStore {
  // constructor() {
  //   this._data = [];
  // }
  
  //more 'secure'
  constructor() {
    if(!UserStore.instance) {
      this._data = [];
      UserStore.instance = this;
    }

    return UserStore.instance;
  }

  set(user) {
    this._data = user;
  }

  get() {
    return this._data;
  }
}

const instance = new UserStore();

export default instance;
