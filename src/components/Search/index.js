import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { books } from './searchData'

const SearchContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Title = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitle = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const BookStyle = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
        const [searchedBooks, setsearchedBooks] = useState([])
        return (
                <SearchContainer>
                        <Title>Do you know where to start?</Title>
                        <Subtitle> find your book in our selection.</Subtitle>
                        <Input
                                placeholder=" search your next reading"
                                onBlur={event => {
                                        const searchedText = event.target.value
                                        const result = books.filter(book => book.name.includes(searchedText))
                                        setsearchedBooks(result)
                                }}
                        />
                        {searchedBooks.map(book => (
                                <BookStyle>
                                        <img src={book.src} alt='book searched' />
                                        <p> {book.name} </p>
                                </BookStyle>
                        ))
                        }
                </SearchContainer>
        )
}

export default Search