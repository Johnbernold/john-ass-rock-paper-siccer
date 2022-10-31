import styled from 'styled-components'

export const MainGameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  padding: 15px;
`

export const DisplaySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 700px;
`
export const ScoreViewSection = styled.div`
  height: 150px;
  width: 100%;
  border: 2px solid #ffffff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`
export const ScoreTypeSection = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 200px;
  height: 100%;
`
export const GameName = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Bree Serif';
`
export const ScoreValueSection = styled.div`
  background-color: #ffffff;
  width: 200px;
  height: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreAnswer = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const LowerSection = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 550px;
  margin-top: 0px;
  width: 100%;
`
export const PlayingViewSection = styled.div`
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const ResultViewSection = styled.div`
  flex-wrap: wrap;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageSectionView = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SeparateImageView = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;

  justify-content: center;
  align-items: center;
`
export const ImageText = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
`
export const ImageUrlResult = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 10px;
`
export const ResultTextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 12px;
  align-self: center;
`
export const AnswerText = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  text-align: center;
`
export const PlayAgainButton = styled.button`
  color: #223a5f;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  background-color: #ffffff;
  border-radius: 4px;
  padding: 5px;
  border: none;
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`
export const CloseButton = styled.button`
  align-self: flex-end;
  width: 14px;
`

export const RulesImage = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 8px;
`
export const PopupSection = styled.div`
  align-self: flex-end;
`
