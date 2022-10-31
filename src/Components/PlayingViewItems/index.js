import {ListButton, ButtonItem, ImageButton} from './styledComponent'

const PlayingViewItems = props => {
  const {EachButton, getSelectedOption} = props
  const {imageUrl, id, testid} = EachButton

  const selectedOption = () => {
    getSelectedOption(EachButton)
  }

  return (
    <ListButton>
      <ButtonItem data-testid={testid} onClick={selectedOption} type="button">
        <ImageButton src={imageUrl} alt={id} />
      </ButtonItem>
    </ListButton>
  )
}

export default PlayingViewItems
