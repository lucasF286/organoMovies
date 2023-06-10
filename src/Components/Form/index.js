import { useState } from 'react'
import Button from "../Button"
import Dropdown from "../Dropdown"
import TextFild from "../textFild"
import "./Form.css"
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    const [name, setName] = useState('')
    const [opinion, setOpnion] = useState('')
    const [image, setImage] = useState('')
    const [gener, setGener] = useState('')
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

            <form onSubmit={''}>
                <h2>Fill in the data to create a new gener</h2>

                <TextFild
                    placeholder="Type the gener name"
                    label="Name"
                    whenChanged={parameter => setName(parameter)}
                    value={name}
                    required={true}
                />

                <TextFild
                    placeholder="Type the color of gener"
                    label="Opinion"
                    whenChanged={parameter => setOpnion(parameter)}
                    value={opinion}
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