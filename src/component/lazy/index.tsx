/**
 * 用于:引入单个页面组件
 */
import React from 'react';
interface State {
  component: any,
}
const asyncComponent = (importComponent: any) => {
  return class extends React.Component<any, State> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: null
      }
    }
    componentDidMount() {
      importComponent()
        .then((cmp: any) => {
          this.setState({
            component: cmp.default
           });
        });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
};

export default asyncComponent;