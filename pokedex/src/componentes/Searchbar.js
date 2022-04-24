import React, {useState} from "react";
import styled from "styled-components";


const Div = styled.div`
display: flex;
margin: 0px auto;
padding: 0 20px;
align-items: center;
`;

const DivSearchbar = styled.div`
background-color: white;
margin-right: 20px;
`;

const Input = styled.input`
padding: 10px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
border-radius: 3px;
border: none;
`;

const DivBtn = styled.button`
background-color: #0e6f9f;
border: none;
border-radius: 10px;
height: 44px;
color: white;
padding: 10px 12px;

`;

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <Div>
            <DivSearchbar>
                <Input placeholder="Buscar pokemon" onChange={onChangeHandler} />
            </DivSearchbar>
            <DivBtn>
                <button onClick={onButtonClickHandler} >Buscar</button>
            </DivBtn>
        </Div>
    )
}

export default Searchbar;