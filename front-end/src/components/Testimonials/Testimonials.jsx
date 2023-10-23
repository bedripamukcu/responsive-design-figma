import "./Testimonials.css";
import rectangle19 from "../../assets/Rectangle-19.png";
import rectangle20 from "../../assets/Rectangle20.png";
import rectangle191 from "../../assets/Rectangle19-1.png";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-container">
          <div className="testimonial">
            <img src={rectangle19} alt="" />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img src={rectangle20} alt="" />
            <div className="reviewer-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Instagram</div>
              <div className="review">
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </div>
            </div>
          </div>
          <div className="testimonial">
            <img src={rectangle191} alt="" />
            <div className="reviewer-details">
              <div className="name">Emily smith</div>
              <div className="company-name">Apple</div>
              <div className="review">Awesome! Great job</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
