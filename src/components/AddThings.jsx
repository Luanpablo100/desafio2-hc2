import React, {useState} from 'react';

const AddThins = ({handleAddItem}) => {

    const [inputData, setInputData] = useState('')
        const handleInputChange = (e) => {
            setInputData(e.target.value)
        }

        const handleAddTaskClick = () => {
            handleAddItem(inputData)
            setInputData('')
        }

    return ( 
        <>
           <input 
                onChange ={handleInputChange} 
                type="text"
                value={inputData}
            />
            <button onClick={handleAddTaskClick}>Adicionar</button>
        </>
     );
}
 
export default AddThins;