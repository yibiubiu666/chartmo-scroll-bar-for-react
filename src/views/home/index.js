import React from 'react'

import Styles from './styles.less'
import mockNavData from '@/mock/mockNavData'
import ScrollBar from '@/components/scrollbar'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="view-home">
        <nav className="view-header">
        <ScrollBar
          className="nav-container"
          onScrollY={() => logEvent('onScrollY')}
          onScrollX={() => logEvent('onScrollX')}
          onScrollUp={() => logEvent('onScrollUp')}
          onScrollDown={() => logEvent('onScrollDown')}
          onScrollLeft={() => logEvent('onScrollLeft')}
          onScrollRight={() => logEvent('onScrollRight')}
          onYReachStart={() => logEvent('onYReachStart')}
          onXReachStart={() => logEvent('onXReachStart')}
        >
            {
              mockNavData.map(item => (
                <div key={item.key}>{item.value}</div>
              ))
            }
        </ScrollBar>
        </nav>
        <div className="view-body">
          <ScrollBar
            className="body-container"
            onScrollY={() => logEvent('onScrollY')}
            onScrollX={() => logEvent('onScrollX')}
            onScrollUp={() => logEvent('onScrollUp')}
            onScrollDown={() => logEvent('onScrollDown')}
            onScrollLeft={() => logEvent('onScrollLeft')}
            onScrollRight={() => logEvent('onScrollRight')}
            onYReachStart={() => logEvent('onYReachStart')}
            onXReachStart={() => logEvent('onXReachStart')}
          >
              {
                mockNavData.map(item => (
                  <div key={item.key}>{item.value}</div>
                ))
              }
          </ScrollBar>
        </div>
      </div>
    )
  }
}
