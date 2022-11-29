import Logo from '../logo'
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components';

// components are written with upper case letters
const HeaderContainer = styled.header`
        background-color: #FFF;
        display: flex;
        justify-content: center;
`

function Header() {
    return (
       <HeaderContainer>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
       </HeaderContainer>
    )
}

export default Header;