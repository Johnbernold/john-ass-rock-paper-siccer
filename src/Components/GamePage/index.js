import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import PlayingViewItems from '../PlayingViewItems'

import {
  MainGameSection,
  DisplaySection,
  ScoreViewSection,
  ScoreTypeSection,
  GameName,
  ScoreValueSection,
  ScoreAnswer,
  LowerSection,
  PlayingViewSection,
  ResultViewSection,
  ImageSectionView,
  SeparateImageView,
  ImageText,
  ImageUrlResult,
  ResultTextSection,
  AnswerText,
  PlayAgainButton,
  PopupSection,
  RulesContainer,
  CloseButton,
  RulesImage,
} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testid: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testid: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testid: 'paperButton',
  },
]

const answerList = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
}

const resultList = {
  youWon: 'YOU WON',
  youLose: 'YOU LOSE',
  draw: 'IT IS DRAW',
}

class GamePage extends Component {
  state = {
    scoreValue: 0,
    playingViewSelected: true,
    resultText: '',
    opponentImage: '',
    selectedImage: '',
  }

  renderOpponent = () => {
    const listLength = choicesList.length

    const value = Math.floor(Math.random() * listLength)

    const opponentSelected = choicesList[value]

    return opponentSelected
  }

  onClickPlayAgain = () => {
    this.setState({playingViewSelected: true})
  }

  topScoreSection = () => {
    const {scoreValue} = this.state
  }

  playingView = () => (
    <PlayingViewSection>
      {choicesList.map(viewItems => (
        <PlayingViewItems
          getSelectedOption={this.getSelectedOption}
          key={viewItems.id}
          EachButton={viewItems}
        />
      ))}
    </PlayingViewSection>
  )

  resultView = () => {
    const {resultText, selectedImage, opponentImage} = this.state
    return (
      <ResultViewSection>
        <ImageSectionView>
          <SeparateImageView>
            <ImageText>YOU</ImageText>
            <ImageUrlResult alt="your choice " src={selectedImage} />
          </SeparateImageView>

          <SeparateImageView>
            <ImageText>OPPONENT</ImageText>
            <ImageUrlResult alt="opponent choice" src={opponentImage} />
          </SeparateImageView>
        </ImageSectionView>

        <ResultTextSection>
          <AnswerText>{resultText}</AnswerText>
          <PlayAgainButton onClick={this.onClickPlayAgain} type="button">
            PLAY AGAIN
          </PlayAgainButton>
        </ResultTextSection>
      </ResultViewSection>
    )
  }

  render() {
    const {playingViewSelected} = this.state
    return (
      <MainGameSection>
        <DisplaySection>
          {this.topScoreSection()}
          <LowerSection>
            {playingViewSelected ? this.playingView() : this.resultView()}
          </LowerSection>
        </DisplaySection>
        <h1>John Bernold</h1>

      
      </MainGameSection>
    )
  }
}

export default GamePage
