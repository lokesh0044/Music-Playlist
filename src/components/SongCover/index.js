import {MdDelete} from 'react-icons/md'
import {
  ListItem,
  SongImg,
  DetailsContainer,
  NameContainer,
  Name,
  Genre,
  DurationContainer,
  Duration,
  DeleteButton,
} from './styledComponent'

const SongCover = props => {
  const {songDetails, onClickDeleteButton} = props
  const {name, genre, duration, imageUrl, id} = songDetails

  const onClickDelete = () => {
    onClickDeleteButton(id)
  }

  return (
    <ListItem>
      <SongImg src={imageUrl} alt={name} />
      <DetailsContainer>
        <NameContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameContainer>
        <DurationContainer>
          <Duration>{duration}</Duration>
          <DeleteButton type="button" onClick={onClickDelete}>
            <MdDelete />
          </DeleteButton>
        </DurationContainer>
      </DetailsContainer>
    </ListItem>
  )
}

export default SongCover
