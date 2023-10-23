import "./Info.css"
import group71 from "../../assets/Group7-1.svg"
import notostudent from "../../assets/noto_student-light-skin-tone.svg"
import flatcolor from "../../assets/flat-color-icons_video-file.svg"

const Info = () => {
  return (
    <section className="dark-gray" id="info">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={notostudent} className="notostudent" />
            <div className="amount">23,000+</div>
            <div className="type">Students</div></div>
            <div className="info-content">      <img src={flatcolor} className="flatcolor" />     <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
       </div>
      </div>
      <img src={group71} className="group71" />

      </div>
    </section>
  )
}

export default Info