import { useState } from 'react'
import Button from "../Button"
import Dropdown from "../Dropdown"
import TextFild from "../textFild"
import "./Form.css"

const Form = (props) => {

    const notes = ['', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const [name, setName] = useState('')
    const [opinion, setOpnion] = useState('')
    const [image, setImage] = useState('')
    const [note, setNote] = useState('')
    const [gener, setGener] = useState('')

    const whenSave = (e) => {
        e.preventDefault();
        props.whenRegisterMovie({
            name,
            opinion,
            image,
            note,
            gener
        });

        setName('');
        setOpnion('');
        setImage('');
        setNote('');
        setGener('');
    }

    return (
        <section className="form">
            <form onSubmit={whenSave}>
                <h2>Fill in the data to create the movie card</h2>

                <TextFild
                    placeholder="Type the movie name"
                    label="Name"
                    whenChanged={parameter => setName(parameter)}
                    value={name}
                    required={true}
                />

                <TextFild
                    placeholder="Type your opinion about the movie"
                    label="Opinion"
                    whenChanged={parameter => setOpnion(parameter)}
                    value={opinion}
                    required={true}
                />

                <TextFild
                    placeholder="Enter image address"
                    label="Image"
                    whenChanged={parameter => setImage(parameter)}
                    value={image}
                    required={true}
                />

                <Dropdown
                    label="Note"
                    parameter={notes}
                    whenChanged={parameter => setNote(parameter)}
                    value={note}
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
        </section>
    )
}

export default Form