import React from "react";
import styled from "styled-components";


const Pagination1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <Pagination1>
            <button onClick={onLeftClick}><div>◀️</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>▶️</div></button>
        </Pagination1>
    )
}

export default Pagination;