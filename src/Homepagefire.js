import { useState } from "react";
import {storage} from "./firebase-config"
import { ref,uploadBytes,getDownloadURL} from "firebase/storage";
import {createWorker} from 'tesseract.js';



function Homepagefire() {
    const[imageUpload,setImageUpload]=useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [stringValue, setStringValue] = useState('');
    


    var imageRef="";
    const uploadImage=()=>{
        if(imageUpload==null) 
            return; 
        imageRef=ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef,imageUpload).then((snapshot)=>{
            alert("Image uploaded Successfully");
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
                
              });
        });    
    };


    const imageToText=async()=>{

        const worker = createWorker({
            logger: m => console.log(m),
          });

          
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(imageUrl);
            setStringValue(text);
          

          
    
    }




    const onFileChange = (event) => {
        setImageUpload(event.target.files[0]);
      };

    return(
        <div className="App">
            <input type="file" onChange={onFileChange} />
            <button onClick={uploadImage}>Upload Image</button> 
            {imageUrl&&<img src={imageUrl} alt="uploaded image"/>}
            <button onClick={imageToText}>Generate text</button>
            <h5>{stringValue}</h5>
            
                      
        </div>
    )   
}

export default Homepagefire;