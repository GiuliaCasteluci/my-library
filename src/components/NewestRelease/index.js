import { books } from './NewestReleaseData'
import {Title} from '../Title'
import styled from 'styled-components'

const NewestReleaseContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function NewestRelease() {
    return (
        <NewestReleaseContainer>
            <Title color="#EB9B00" > Upcoming Book Releases </Title>
            <NewBooksContainer>
                { books.map( book => (
                    <img src={book.src} alt= 'my book'/>
                ) ) }
            </NewBooksContainer>
        </NewestReleaseContainer>
    )
}

export default NewestRelease;

