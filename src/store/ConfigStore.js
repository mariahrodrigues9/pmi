import { observable, action } from 'mobx'

class ConfigStore {
  @observable loading = true;
  @observable showMenu = false;

  @action toggleShowMenu = (bool) => {
    this.showMenu = bool;
  }

  @action toggleLoading = () => {
    this.loading = false;
  }
}

export default ConfigStore;
