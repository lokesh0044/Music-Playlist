import styled from 'styled-components'

export const ListItem = styled.li`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`

export const SongImg = styled.img`
  width: 120px;
`

export const DetailsContainer = styled.div`
  padding: 0px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const NameContainer = styled.div``

export const Name = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 10px;
`
export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 14px;
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  color: #ffffff;
  font-family: 'Roboto';
`

export const Duration = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
`

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: #ffffff;
`
