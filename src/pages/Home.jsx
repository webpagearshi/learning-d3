import { lessons } from "../data/lessons";
import Barplot from "../components/Barplot";
import { barData } from "../data/barData";
import { data } from "../data/labInfections";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* 👋 Hero Section */}
      <section className="hero">
        <h1>Learning D3 with React</h1>
        <p>
          A collection of my hands-on experiments while learning D3.js, built
          using React and modern data visualization practices.
        </p>
      </section>

      {/* 📊 Lessons Section */}
      <section className="lessons">
        <p>Click on the card to explore the visualization.</p>
        <div className="lesson-grid">
          {lessons.map((lesson) => (
            <Link key={lesson.path} to={lesson.path} className="lesson-card">
              {/* Mini chart */}
              <div className="mini-chart">
                {lesson.type === "bar" && (
                  <Barplot
                    data={barData}
                    width={200}
                    height={250}
                    isPreview={true}
                  />
                )}
              </div>
              {/* Mini chart */}
              <div className="mini-chart">
                {lesson.type === "horizontal-bar" && (
                  <img
                    src={lesson.image}
                    alt={lesson.name}
                    className="lesson-image"
                    width={200}
                    height={250}
                  />
                )}
              </div>
              {/* Text */}
              <h3>{lesson.name}</h3>
              <p>{lesson.description}</p>
            </Link>
          ))}
        </div>
        {/* Mini chart */}
              <div className="mini-chart">
                {lesson.type === "bubble-chart" && (
                  <img
                    src={lesson.image}
                    alt={lesson.name}
                    className="lesson-image"
                    width={200}
                    height={250}
                  />
                )}
              </div>
              {/* Text */}
              <h3>{lesson.name}</h3>
              <p>{lesson.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
