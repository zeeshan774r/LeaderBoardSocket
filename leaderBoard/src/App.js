import React, { Component } from 'react'
import './App.css'
import LeaderBoard from './components/leaderBoard'
import styled from 'styled-components'
import { connect } from 'react-redux'
import dashBoardActions from './actions/dashboardAction'

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`

const Header = styled.div`
  font-size: 2.5rem;
  margin-bottom: 3rem;
`

const SubHeader = styled.div`
  font-size: 1.5rem;
  border: 2px solid #cecece;
  background-color: #efefef;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
`

const LeaderBoardWrapper = styled.div`
  display: flex;
`

class App extends Component {
  componentDidMount() {
    this.connection.onmessage = (message) => {
      const data = JSON.parse(message.data)
      if (data.type === 'increase') {
        this.props.increaseScore(data)
      } else {
        this.props.decreaseScore(data)
      }
    }
  }

  connection = new WebSocket('ws://localhost:9090/')

  isOpen = (ws) => {
    return ws.readyState === ws.OPEN
  }

  payloadSendToServer = (payload) => {
    if (!this.isOpen(this.connection)) {
      // without server running
      if (payload.type === 'increase') {
        this.props.increaseScore(payload)
      } else {
        this.props.decreaseScore(payload)
      }
    } else {
      this.connection.send(JSON.stringify(payload)) // with server running
    }
  }

  increaseScore = (id) => {
    let payload = {
      id: id,
      value: 1,
      type: 'increase',
    }
    this.payloadSendToServer(payload)
  }

  decreaseScore = (id) => {
    let payload = {
      id: id,
      value: 1,
      type: 'decrease',
    }
    this.payloadSendToServer(payload)
  }

  render() {
    return (
      <MainWrapper>
        <Header>Leaderboard App</Header>
        <SubHeader>App Leader</SubHeader>
        <LeaderBoardWrapper>
          <LeaderBoard
            increaseScore={this.increaseScore}
            decreaseScore={this.decreaseScore}></LeaderBoard>
          <LeaderBoard
            increaseScore={this.increaseScore}
            decreaseScore={this.decreaseScore}></LeaderBoard>
        </LeaderBoardWrapper>
      </MainWrapper>
    )
  }
}

const mapActionsToProps = {
  increaseScore: dashBoardActions.increaseScore,
  decreaseScore: dashBoardActions.decreaseScore,
}

export default connect(null, mapActionsToProps)(App)
