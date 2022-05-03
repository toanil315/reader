import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import File from "../File/File";

export default function FileList() {
  const [listAudio, setListAudio] = useState([]);
  const {date} = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchListAudio = async() => {
      try {
        dispatch({type: "SHOW_LOADING"})
        const {data, status} = await axios({
          method: "GET",
          url:`https://text2speech-api.herokuapp.com/audiobydate/${date}`
        })
        if(status === 200) {
          setListAudio(data)
          setTimeout(() => {
            dispatch({type: "HIDE_LOADING"})
          }, 600);
        }
      }
      catch(error) {
        console.log(error)
      }
    }

    fetchListAudio()
  }, [])

  const renderListAudio = () => {
    return listAudio?.map((audio, index) => {
      return <File audio={audio} key={audio.id} />
    })
  }

  return (
    <div>
      <h1 style={{ fontSize: "20px", marginBottom: "25px" }}>Files</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          marginLeft: "-20px",
        }}
      >
        {renderListAudio()}
      </div>
    </div>
  );
}
