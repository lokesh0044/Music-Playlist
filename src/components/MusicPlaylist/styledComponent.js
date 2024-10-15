import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ResponsiveContainer = styled.div`
  width: 768px;
  max-width: 900px;
  height: 100vh;
  background-color: #152850;
`

export const SingerCoverPage = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const SingerName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
`

export const Profession = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`

export const SongsPlayListContainer = styled.div`
  padding: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlayListHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 5px 5px 5px 10px;
`

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffffff;
`

export const PlayList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  height: 50vh;
  overflow-y: auto;
`
export const NoSongsFoundContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongsFoundText = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
`
