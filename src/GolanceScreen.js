import { Screen as _Screen, Navigator } from './Screen';
import _ from 'lodash';

class Screen extends _Screen {

  constructor(props) {
    super(props);
    if (props.navigatorID) {
      const _push = this.navigator.push;
      const _showModal= this.navigator.showModal;
      this.navigator.push = _.debounce((...args) => _push.bind(this.navigator)(...args), 200, {
        leading: true,
        trailing: false,
      });
      this.navigator.showModal = _.debounce((...args) => _showModal.bind(this.navigator)(...args), 200, {
        leading: true,
        trailing: false,
      });
    }
  }
}

export {
  Screen,
  Navigator,
};