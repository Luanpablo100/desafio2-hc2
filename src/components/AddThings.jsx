import React, {useState} from 'react';
import './AddThings.css'

const AddThings = ({handleAddItem}) => {

    const [inputData, setInputData] = useState('')
        const handleInputChange = (e) => {
            setInputData(e.target.value)
        }

        const handleAddTaskClick = () => {
            if(inputData !== "") {
                handleAddItem(inputData)
                setInputData('')
            } else {
                alert('Preencha o campo')
            }
        }

    return ( 
        <>
           <input 
                onChange ={handleInputChange} 
                type="text"
                value={inputData}
                className="input-add"
            />
            <button className="button-add" onClick={handleAddTaskClick}>Adicionar</button>
        </>
     );
}
 
export default AddThings;