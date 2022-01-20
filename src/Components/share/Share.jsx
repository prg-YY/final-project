import { useState, useEffect } from "react"
import { BiImageAdd } from "react-icons/bi"

import "./share.css"

export default function Share() {
  const [file, setFile] = useState(null)
  const [posts, setPosts] = useState([])

  const submitHanlder = (e) => {
    e.preventDefault()
    setPosts([...posts, file])
  }
  return (
    <div className="container">
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              className="shareProfileImg"
              src="https://cdn.pixabay.com/photo/2021/08/03/12/34/sparrow-6519384_960_720.jpg"
              alt=""
            />
            <input placeholder="What's in your mind?" className="shareInput" />
          </div>
          <hr className="shareHr" />
          <form onSubmit={submitHanlder}>
            <label htmlFor="uplaod" title="upload a file">
              <BiImageAdd />
            </label>
            <input
              type="file"
              id="uplaod"
              accept="image/*"
              onChange={(e) => {
                setFile(e.target.files[0])
              }}
            ></input>

            <div className="shareBottom">
              <div className="shareOptions"></div>
              <button className="shareButton" type="submit">
                Share
              </button>
            </div>
          </form>
          <div className="preview">
            {file ? (
              <div className="image_showCase">
                <img src={URL.createObjectURL(file)} alt="image"></img>
              </div>
            ) : (
              <p>There is no file yet.</p>
            )}
          </div>
          <div>
            {posts && posts.length
              ? posts.map((item, i) => (
                  <div key={i}>
                    <img src={item} alt="image"></img>
                  </div>
                ))
              : " post"}
          </div>
        </div>
      </div>
    </div>
  )
}
