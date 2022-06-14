import React, { FC } from 'react';
import styled from 'styled-components';

const Warp = styled.div`
    display: flex;
    line-height: 60px;
    background-image: linear-gradient(to right, #1890ff , #722ed1);
    padding: 0 10px 0 20px;
    h1 {
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        color: #fff;
    }
`;

const Header: FC = () => {
    return (
        <Warp>
            <h1>图书管理系统</h1>
        </Warp>
    )
}

export default Header;