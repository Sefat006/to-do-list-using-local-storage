import { useEffect, useState } from "react";

const Trash = () => {
    const [data, setData] = useState({
        title: "",
        date: "",
        note: "",
    });

    const [note, setNote] = useState([]);

    useEffect(() => {
        const savedNote = localStorage.getItem("note-data");

        if (savedNote) {
        setNote(JSON.parse(savedNote));
        } else {
        localStorage.setItem("note-data", JSON.stringify([]));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
        id: Date.now(),
        ...data,
        };

        const updateNote = [...note, newItem];
        setNote(updateNote);
        localStorage.setItem("note-data", JSON.stringify(updateNote));

        setData({
        title: "",
        date: "",
        note: "",
        });

        console.log("data", data);
    };

    return (
        <div>
        <form
            onSubmit={handleSubmit}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
            <legend className="fieldset-legend">Page details</legend>

            <label className="label">Title</label>
            <input
            name="title"
            value={data.title}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="title"
            />

            <label className="label">Date</label>
            <input
            name="date"
            value={data.date}
            onChange={handleChange}
            type="date"
            className="input"
            placeholder="date"
            />

            <label className="label">notes</label>
            <input
            name="note"
            value={data.note}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Notes"
            />

            <button type="submit" className="btn btn-success">
            Submit
            </button>
        </form>
        </div>
    );
};

export default Trash;
