import { Footer } from "../components/footer/Footer";
import { articleList } from "../data/articles";
import "./Glossar.css";

export function Glossar() {
  function scrollTo(categoryName: string) {
    const component = document.getElementById(categoryName);
    window.scrollTo({ top: component?.offsetTop, behavior: "smooth" });
  }

  return (
    <>
      <div className="glossar-container">
        <div className="glossar-sidebar">
          <h5>Glossar Content</h5>
          <div className="glossar-sidebar-items">
            {articleList.map((e, index) => (
              <h4 key={index} onClick={() => scrollTo(e.category)}>
                {e.category}
              </h4>
            ))}
          </div>
        </div>
        <div className="glossar-content">
          <div className="article-category">
            {articleList.map((e, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 id={e.category}>{e.category}</h3>
                {e.topics.map((topic, articleIndex) => (
                  <div className="article" key={articleIndex}>
                    <h6>{topic.name}</h6>
                    <p>{topic.desc}</p>
                    <hr />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
