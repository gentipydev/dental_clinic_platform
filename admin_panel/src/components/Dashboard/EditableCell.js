import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function EditableCell({ text, type, onTextChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputText, setInputText] = useState(text);

    const handleFocus = (event) => event.target.select();

    const handleChange = (event) => setInputText(event.target.value);

    const toggleEdit = () => {
        if (isEditing && inputText !== text) {
            onTextChange(inputText);
        }
        setIsEditing(!isEditing);
    };

    function formatDate(date) {
        return date.toISOString(); // Or any other format you need
    }
    

    const handleDateChange = (date) => {
        // Format the date to your desired format
        const formattedDate = formatDate(date); // Implement this function based on your requirements
        onTextChange(formattedDate);
        setIsEditing(false);
    };


    const getValidDate = (dateStr) => {
        const date = new Date(dateStr);
        return date instanceof Date && !isNaN(date) ? date : new Date();
    };


    useEffect(() => {
        console.log('EditableCell text prop:', text);
        setInputText(text || ''); // Reset input text when the text prop changes
    }, [text]);


    if (type === 'datetime' && isEditing) {
        return (
            <DatePicker
                selected={getValidDate(inputText)}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
            />
        );
    }


    return isEditing ? (
        // Check if type is 'datetime'
        // type === 'datetime' ? (
        //     <DatePicker
        //         selected={new Date(inputText)} // Use inputText here
        //         onChange={handleDateChange}
        //         showTimeSelect
        //         dateFormat="Pp"
        //     />
        // ) : (
        <input
            className="editable-cell-input"
            type={type}
            value={inputText}
            onChange={handleChange}
            onBlur={toggleEdit}
            onKeyDown={(e) => e.key === 'Enter' && toggleEdit()}
            onFocus={handleFocus}
            autoFocus
        />
        
    ) : (
        <span onClick={() => setIsEditing(true)}>{text}</span>
    );
}

export default EditableCell;
