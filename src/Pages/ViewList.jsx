import { useEffect, useState } from "react";


const ViewList = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(()=>{
        const savedTodoData = localStorage.getItem('todo-data');

        if(savedTodoData){
            setTodoList(JSON.parse(savedTodoData));
        }
    },[])

    return (
        <div>
            <tbody className="border-1 text-white">
                <tr></tr>
            </tbody>
        </div>
    );
};

export default ViewList;