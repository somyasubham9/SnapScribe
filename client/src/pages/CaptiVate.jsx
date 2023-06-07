import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaPlay } from 'react-icons/fa';
import './CaptiVate.css';
const CaptiVate = () => {
    const [image, setImage] = useState(null);
    const [annotation, setAnnotation] = useState('');
    const [speechUrl, setSpeechUrl] = useState('');
    const [previewImage, setPreviewImage] = useState(null);
    const [scanning, setScanning] = useState(false);
    const [audioReady, setAudioReady] = useState(false);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    };
  
    useEffect(() => {
      if (audioReady) {
        setScanning(false);
      }
    }, [audioReady]);
  
    const handleUpload = async () => {
      try {
        setScanning(true);
        const formData = new FormData();
        formData.append('image', image);
  
        const response = await axios.post('/annotate', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        const { caption, speechUrl } = response.data;
        setAnnotation(caption);
        setSpeechUrl(speechUrl);
        setAudioReady(true);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
  
    const handlePlaySpeech = () => {
      const audio = new Audio(speechUrl);
      audio.play();
    };
  return (
    <div className="container">
      <h1 className="title text-6xl font-bold text-[#00ADFF]">Image Annotation and Speech</h1>
      <div className="upload-container">
        <label htmlFor="upload-input" className="upload-label">
          Upload Your Image
        </label>
        <input
        
            type="file"
            id="upload-input"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        {previewImage && (
          <img src={previewImage} alt="Preview" className={`preview-image ${scanning ? 'scanning' : ''}`} />
        )}
      </div>
      <button onClick={handleUpload} className="upload-button">
        Scan Your Image
      </button>
      {annotation && <p className="annotation">{annotation}</p>}
      {speechUrl && (
        <button onClick={handlePlaySpeech} className="play-button">
          Play Speech
        </button>
      )}
      
    </div>
  )
}

export default CaptiVate