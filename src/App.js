import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    fetch(
      "https://blog.uniquiz.com.mx/wp-json/wp/v2/posts/?_orderby&_embed=true"
    )
      .then((res) => res.json())
      .then((data) => {
        const blogData = data;

        console.log(data);
        setBlog(blogData);
      });
  }, []);
  // Parrafo blog1
  function paragraph() {
    return { __html: blog[blog.length - 1].excerpt.rendered };
  }

  const numig = "jiji";
  const urlimg = "https://blog.uniquiz.com.mx/wp-json/wp/v2/media/";

  return (
    <div className="App">
      {!blog ? (
        "Cargando..."
      ) : (
        <div className="card">
          <h1>{blog[blog.length - 1].title.rendered}</h1>

          {/* <img src={blog[blog.length-1]._links.}> </img>  */}
          <p>{blog[blog.length - 1].featured_media}+jiji </p>

          <p dangerouslySetInnerHTML={paragraph()} />

          <a href={blog[blog.length - 1].link}> ver más</a>
        </div>
      )}
    </div>
  );
}

export default App;
