// https://gist.github.com/jaredpalmer/56e10cabe839747b84b81410839829be
import React from 'react';
import { debounce, isEqual } from 'lodash';

export class AutoSave extends React.Component {
  state = {
    isSaving: false,
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (!isEqual(nextProps.values, this.props.values)) {
      this.save()
    }
  }

  save = debounce(() => {
    this.setState({isSaving: true, saveError: undefined})
    this.props.onSave(this.props.values)
  }, 300);

  render() {
    if(this.props.render) {
      return this.props.render(this.state)
    } else {
      return null;
    }

  }
}
