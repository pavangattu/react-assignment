// import {Component} from 'react'

// import TabItem from '../TabItem'

// import MatchItem from '../MatchItem'

// import './index.css'

// class MatchGame extends Component {
//   state = {
//     image: 'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
//     imgId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
//     tab: 'FRUIT',
//     score: 0,
//     time: 60,
//   }

//   onDecreasingTime = () => {
//     this.setState(prev => ({time: prev.time - 1}))
//   }

//   componentDidMount = () => {
//     this.intervelId = setInterval(this.onDecreasingTime, 1000)
//   }

//   onChangingTabId = tabId => {
//     this.setState({tab: tabId})
//   }

//   sendingInfpImg = id => {
//     const {imgId, imagesList} = this.state
//     if (imgId === id) {
//       //   const k = Math.random() * 30
//       //   const j = Math.ceil(k)
//       //   const l = imagesList[j]
//       console.log(imagesList)

//       this.setState(prev => ({score: prev.score + 1}))
//     }
//   }

//   render() {
//     const {image, tab, score, time} = this.state
//     const {tabsList, imagesList} = this.props

//     const imgList = imagesList.filter(each => each.category === tab)

//     if (time === 0) {
//       clearInterval(this.intervelId)
//     }

//     this.pavan(imagesList)

//     return (
//       <>
//         <nav className="nav-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
//             alt="website logo"
//             className="website-logo"
//           />
//           <div className="score-time-container">
//             <h1 className="score-head">Score: {score}</h1>
//             <div className="timer-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
//                 alt="timer"
//                 className="timer"
//               />
//               <h1 className="timer-head">{time} sec</h1>
//             </div>
//           </div>
//         </nav>

//         <div className="bg-container">
//           <img src={image} alt="match" className="match-image" />

//           <ul className="ul-tab-container">
//             {tabsList.map(each => (
//               <TabItem
//                 eachTab={each}
//                 selectedTab={tab}
//                 onChangingTabId={this.onChangingTabId}
//                 key={each.tabId}
//               />
//             ))}
//           </ul>

//           <ul className="ul-match-item">
//             {imgList.map(each => (
//               <MatchItem
//                 eachItem={each}
//                 key={each.id}
//                 sendingInfpImg={this.sendingInfpImg}
//               />
//             ))}
//           </ul>
//         </div>
//       </>
//     )
//   }
// }

// export default MatchGame
