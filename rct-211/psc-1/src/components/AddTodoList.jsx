import React from "react";
import { Link } from "react-router-dom";
const AddTodoList = ({ todoLists }) => {
  return (
    <div>
      {todoLists?.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/todo/${item.id}`}>
              <div>{item.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AddTodoList;
