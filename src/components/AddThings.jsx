import React, {useState} from 'react';
import './AddThings.css'

const AddThings = ({handleAddItem, whatIs}) => {
    let dataName
    let dataLink

    let [inputData, setInputData] = useState('')
        const handleAddTaskClick = () => {
            if(whatIs === "product") {
                dataName = document.querySelector('.product-container #nameinput').value
                dataLink = document.querySelector('.product-container #linkinput').value
            } else if(whatIs === "client") {
                dataName = document.querySelector('.client-container #nameinput').value
                dataLink = document.querySelector('.client-container #linkinput').value
            }

            inputData = {
                name: dataName,
                imgLink: dataLink
            }

            if(inputData.name !== "" & inputData.imgLink !== "") {
                console.log(inputData)
                handleAddItem(inputData)
                setInputData('')
            } else {
                alert('Preencha o campo')
            }
        }

    return ( 
        <div className="add-div">
            <div>
                <label>Nome</label>
                <input
                    type="text"
                    className="input-add"
                    placeholder="Cadastre alguma coisa..."
                    id="nameinput"
                />
            </div>
            <div>
                <label>Link da imagem</label>
                <input 
                    type="url"
                    className="input-add"
                    placeholder="https://..."
                    id="linkinput"
                />
            </div>
            <button className="button-add" onClick={handleAddTaskClick}>Adicionar<img src="/add.png" alt={whatIs + "add image"} className="add-img"/></button>
        </div>
     );
}
 
export default AddThings;