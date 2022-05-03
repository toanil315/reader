import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Folder from "../Folder/Folder";

export default function FolderList() {
  const [listDate, setListDate] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchDate = async () => {
      try {
        dispatch({type: "SHOW_LOADING"})
        const {data, status} = await axios({
          method: "GET",
          url:"https://text2speech-api.herokuapp.com/date"
        })
        if(status === 200) {
          console.log(data)
          setListDate(data)
          setTimeout(() => {
            dispatch({type: "HIDE_LOADING"})
          }, 600);
        }
      }
      catch(error) {
        console.log(error)
      }
    }

    fetchDate()
  }, [])

  const renderListDate = () => {
    return listDate?.map(({date}, index) => {
      return <Folder key={index} date={date} />
    })
  }

  return (
    <div>
        <h1 style={{fontSize: '20px', marginBottom: '25px'}}>Folders</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          marginLeft: "-20px",
        }}
      >
        {renderListDate()}
      </div>
    </div>
  );
}
