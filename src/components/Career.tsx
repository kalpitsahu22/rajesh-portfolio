import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>ASTNT Technologies</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built and optimized data-heavy dashboard interfaces, improving
              performance and reducing load times by 30% through efficient
              rendering, lazy loading, and smart caching. Collaborated closely
              with backend teams to deliver scalable, reliable UI components.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE-1 Frontend</h4>
                <h5>MiM Essay, Kraya.ai</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed a full-featured CMS dashboard using Next.js, along with
              automation tools like a WhatsApp extension, focusing on scalable
              architecture, reusable components, and seamless user experience
              across devices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Optiphoenix Xperts</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivered data-driven frontend solutions with a strong focus on
              A/B testing, experimentation, and growth optimization, achieving
              up to 45% improvement in user outcomes through performance
              enhancements and user behavior insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
