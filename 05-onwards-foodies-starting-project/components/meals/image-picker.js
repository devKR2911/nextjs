"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const imagePicker = useRef();

  function onImagePickButtonClicked() {
    imagePicker.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No images picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="User Selected Image" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imagePicker}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          target={name}
          onClick={onImagePickButtonClicked}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
