import {Component} from 'react'

import './index.css'

class MatchItem extends Component {
  state = {isClicked: 0}

  onClickImg = () => {
    this.setState(prev => ({isClicked: prev.isClicked + 1}))
  }

  render() {
    const {eachItem, sendingInfpImg} = this.props
    const {thumbnailUrl, id} = eachItem

    const ontickingImg = () => {
      sendingInfpImg(id)
    }

    return (
      <li>
        <button className="btn" type="button" onClick={this.onClickImg}>
          <img
            src={thumbnailUrl}
            className="thumbnail-img"
            alt="thumbnail"
            onClick={ontickingImg}
          />
        </button>
      </li>
    )
  }
}
export default MatchItem
