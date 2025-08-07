import { useEffect, useState } from "react";
import { Link } from "react-router";


const ViewList = () => {
    const [todoData, setTodoData] = useState([]);

    useEffect(() => {
        const savedTodoData = localStorage.getItem('todo-data');
        if(savedTodoData){
            setTodoData(JSON.parse(savedTodoData));
        }
    },[])

    return (
    <div className="overflow-x-auto">
        <Link to="/" className="btn btn-primary">home</Link>
        <div className="text-center text-4xl font-bold">
            <h1>View List</h1>
        </div>
    <table className="table table-fixed w-full">
        <thead>
        <tr>
            <th className="w-12">No.</th>
            <th className="w-full">Title</th>
            <th className="w-32">Date</th>
        </tr>
        </thead>
        {
            todoData.map( (todo, index) => <tbody key={index} params={todo}>
                <tr>
                    <th>{index+1}</th>
                    <th>{todo.title}</th>
                    <th>{todo.date}</th>
                </tr>
            </tbody>)
        }
        
    </table>
    </div>

    );
};

export default ViewList;