import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 30%
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  width: 100%;
`;

const Item = styled.li`
  font-size: 2rem;
`;

const ItemButton = styled.button`
  width: 37%;
  height: 45px;
  margin-right: 16px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-size: 1.5rem;
  color: #f44336;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 1px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    color: #ffffff;
    box-shadow: none;
    border-color: #f5f5f5;
    background-color: #b30015;
  }
`;

const Todo = (props) => {
  const { todo } = props;
  return (
    <ItemContainer>
      <Item
        onClick={(e) => props.toggleComplete(e, todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: "pointer"
        }}
      >
        {todo.value}
      </Item>
      <ItemButton type="submit" onClick={(e) => props.deleteTodo(e, todo.id)}>Clear Completed</ItemButton>
    </ItemContainer>
  );
}

export default Todo;


  


 