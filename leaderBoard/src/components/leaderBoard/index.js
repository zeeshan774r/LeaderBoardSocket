import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Container = styled.div`
  max-height: 30rem;
  width: 24rem;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  margin: 2rem;
  scrollbar-width: thin;
`

const DataBox = styled.div`
  width: 20rem;
  border: 2px solid #a6a6a6;
  height: 5rem;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem 0;
`

const Name = styled.p`
  font-size: 1.25rem;
  color: #474747;
  font-weight: 400;
`

const Score = styled.p`
  font-size: 1.25rem;
  color: #1759cd;
  font-weight: 500;
`

const IncreaseScore = styled.span`
  font-size: 2.25rem;
  color: #000;
  cursor: pointer;
`

const DecreaseScore = styled.span`
  font-size: 2.25rem;
  color: #000;
  cursor: pointer;
`

class LeaderBoard extends Component {
  render() {
    let sortedLeaderArray =
      this.props.leaderBoardList &&
      this.props.leaderBoardList.sort(function (a, b) {
        return b.score - a.score
      })
    return (
      <Container>
        <div>
          {sortedLeaderArray.map((el) => {
            return (
              <DataBox key={el.id}>
                <Name>{el.name}</Name>
                <Score>{el.score}</Score>
                <IncreaseScore onClick={() => this.props.increaseScore(el.id)}>+</IncreaseScore>
                <DecreaseScore onClick={() => this.props.decreaseScore(el.id)}>-</DecreaseScore>
              </DataBox>
            )
          })}
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    leaderBoardList: store.dashboardReducer.leaderBoardList,
  }
}

export default connect(mapStateToProps, null)(LeaderBoard)
