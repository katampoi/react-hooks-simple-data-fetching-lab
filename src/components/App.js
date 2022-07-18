// create your App component here
import React, {useState} from "react";
import { useEffect } from "react";

function App(){
    const [dogImg, setDogImg] = useState();
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data);
            setDogImg(data.message)
        })
    }, []);

    return(
        <>
        {dogImg ? <img src={dogImg} alt="A Random Dog"></img> : <p>Loading...</p>}
        </>
    )
}

export default App;
