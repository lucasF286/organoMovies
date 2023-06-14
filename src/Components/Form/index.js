import { useState } from 'react'
import Button from "../Button"
import Dropdown from "../Dropdown"
import Fild from "../Fild"
import "./Form.css"
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [name, setName] = useState('')
    const [opinion, setOpnion] = useState('')
    const [image, setImage] = useState('')
    const [gener, setGener] = useState('')
    const [generName, setGenerName] = useState('')
    const [generColor, setGenerColor] = useState('')
    const id = uuidv4();

    const whenSave = (e) => {
        e.preventDefault();
        props.whenRegisterMovie({
            id,
            name,
            opinion,
            image,
            gener
        })
        setName('')
        setOpnion('')
        setImage('')
        setGener('')
    }

    return (
        <section className="form">
            <form onSubmit={whenSave}>
                <h2>Fill in the data to create the movie card</h2>

                <Fild
                    placeholder="Type the movie name"
                    label="Name"
                    whenChanged={parameter => setName(parameter)}
                    value={name}
                    required={true}
                />

                <Fild
                    placeholder="Type your opinion about the movie"
                    label="Opinion"
                    whenChanged={parameter => setOpnion(parameter)}
                    value={opinion}
                    required={true}
                />

                <Fild
                    placeholder="Enter image address"
                    label="Image"
                    whenChanged={parameter => setImage(parameter)}
                    value={image}
                    required={true}
                />

                <Dropdown
                    label="Gener"
                    parameter={props.geners}
                    whenChanged={parameter => setGener(parameter)}
                    value={gener}
                    required={true}
                />

                <Button>
                    Create card
                </Button>

            </form>

            <form onSubmit={(e)=> {
                e.preventDefault();
                props.registerGener({name: generName, color: generColor});
            }}>
                <h2>Fill in the data to create a new gener</h2>

                <Fild
                    placeholder="Type the gener name"
                    label="Name"
                    whenChanged={parameter => setGenerName(parameter)}
                    value={generName}
                    required={true}
                />

                <Fild
                    placeholder="Type the color of gener"
                    label="Color"
                    whenChanged={parameter => setGenerColor(parameter)}
                    value={generColor}
                    type='color'
                    required={true}
                />

                <Button>
                    Create a gener
                </Button>

            </form>
        </section>
    )
}

export default Form