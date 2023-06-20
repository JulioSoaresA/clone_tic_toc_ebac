import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { VideoLabel } from "@mui/icons-material";

function App() {
    const [video, setVideos] = useState([]);

    async function getVideos() {
        const videoCollection = collection(db, "videos");
        const videosSnapshot = await getDocs(videoCollection);
        const videosList = videosSnapshot.docs.map((doc) => doc.data());
        setVideos(videosList);
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="App">
            <div className="app__videos">
                {video.map((item) => {
                    return (
                        <Video
                            likes={item.likes}
                            messages={item.messages}
                            shares={item.shares}
                            name={item.name}
                            description={item.description}
                            music={item.music}
                            url={item.url}
                        />
                    );
                })}

                {/* <Video 
                    likes={563}
                    messages={394}
                    shares={157}
                    name="Pedro"
                    description="Gatinho"
                    music="Música qualquer"
                    url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
                /> */}
            </div>
        </div>
    );
}

export default App;
