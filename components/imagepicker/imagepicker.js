'use client'
import classes from './page.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, imagename }) {
    const [pickedImage, setPickedImage] = useState(null);
    const imageInput = useRef();

    function handlePickClick() {
        imageInput.current.click();
    }

    function handleChangeImage(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={imagename}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="the image selected by the user."
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={imagename}
                    accept="image/png,image/jpeg"
                    name={imagename}
                    ref={imageInput}
                    onChange={handleChangeImage}
                />
                <button className={classes.button} type='button' onClick={handlePickClick}>
                    Pick your Image
                </button>
            </div>
        </div>
    );
}
