import { useEffect, useState } from "react";

const Add = () => {

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: "",
    });
    const [todoData, setTodoData] = useState([]);

    useEffect(()=>{
        const savedTodoData = localStorage.getItem('todo-data');

        if(savedTodoData){
            setTodoData(JSON.parse(savedTodoData));
        }else{
            localStorage.setItem("todo-data", JSON.stringify([]));
        }
    }, [])

    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit =e=>{
        e.preventDefault();

        const newItem = {
            id: Date.now(), //Date build in function
            ...formData,
        }//যখন ...formData লিখো, তখন new data input dile (key-value pair) নতুন newItem এর ভেতর কপি হয়ে যায়।

        const updateTodoData = [...todoData, newItem];// new input todoData er moddhe copy hoy
        setTodoData(updateTodoData);
        localStorage.setItem("todo-data", JSON.stringify(updateTodoData));

        //clear form data
        setFormData({
            title: "",
            date: "",
            description: "",
        })

        console.log("form data", formData);
    }


    return (
        <div>
        <form onSubmit={handleSubmit} action="">
            <div className="flex flex-col lg:flex-row gap-4">
            {/* Title - Left on desktop, top on mobile */}
            <div className="w-full lg:w-1/2">
                <label>
                <p>Input Title</p>
                </label>
                <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border p-2 w-full text-black"
                placeholder="Title"
                type="text"
                />
            </div>

            {/* Date - Right on desktop, below on mobile */}
            <div className="w-full lg:w-1/2">
                <label>
                <p>Input Date</p>
                </label>
                <input
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border p-2 w-full text-black"
                type="date"
                />
            </div>
            </div>
            <label>
                <p  className="mt-7">Description</p>
                </label>
            <textarea
                className="border-1 text-black h-52 w-full" 
                type="text" 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                />
            <div className="text-center">
                <button type="submit" className="btn mt-3 btn-primary">
            Submit
            </button>
            </div>
        </form>
        </div>
    );
    };

export default Add;
