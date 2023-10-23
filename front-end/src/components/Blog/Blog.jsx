import "./Blog.css"
import thumbnail1 from "../../assets/Thumbnail1.png"
import thumbnail2 from "../../assets/Thumbnail2.png"
import thumbnail4 from "../../assets/Thumbnail4.png"

const Blog = () => {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light"> Latests Posts</h2>
        <div className="content-container">
          <div className="post">
            <div className="tag">DAW</div>
            <a href="#">  <img src={thumbnail4} style={{width:'314px', height: '160px'}} /></a>
            <a href="#"> <h3 className="post-title"> How to Use Drum Machine in Logic Pro X</h3></a>
            </div>
            <div className="post">
            <div className="tag">Mixing</div>
            <a href="#">       <img src={thumbnail1}  />
</a>
            <a href="#"> <h3 className="post-title"> How to Mix Guitar Effectively</h3></a>
            </div>
            <div className="post">
            <div className="tag">VOX</div>
            <a href="#"> <img src={thumbnail2}  /></a>
            <a href="#"> <h3 className="post-title"> How to Use Drum Machine in Logic Pro X</h3></a>
            </div>
            
            <div className="btn-container">
              <a href="#" className="all-posts-btn">All Posts</a>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Blog
