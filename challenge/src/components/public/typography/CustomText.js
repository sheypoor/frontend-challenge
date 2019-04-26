import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import {
  Text
} from 'react-native'
import styles from 'challenge/src/assets/styles/Typography'

export class CustomText extends PureComponent {
  static defaultProps = {
    children: '',
    style: {}
  }

  static propTypes = {
    children: PropTypes.string,
    style: PropTypes.object
  }

  render() {
    const {
      children,
      style
    } = this.props

    return (
      <Text {...this.props}
            style={[
              styles.iranYekanFamily,
              {...style}
            ]}>
        {children}
      </Text>
    )
  }
}
