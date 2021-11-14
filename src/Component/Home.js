import React from 'react';
import styled from '@emotion/styled';




const Home = () => {
    const Button = styled.button`
    color: turquoise;
    width: 200px;
    height: 50px
  `
    return (
        <Button>
            Bienvenu ici
        </Button>
    );
};

export default Home;