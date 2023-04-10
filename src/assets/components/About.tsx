import React from "react";

export const About = () => {
  return (
    <main
      id="about"
      className="px-5 py-4 d-flex flex-column justify-content-center"
    >
      <h2 className="mb-4 text-dark text-center">About me</h2>
      <div className="row justify-content-center">
        <p>
          I am Ömer Fatih Bülbül and I am 21 years old from Turkey. I am
          studying Computer Science at Ankara University and this is my 3rd year
          with a 3.72 GPA. I work on deep learning, computer vision, artifical
          intelligence and neural networks. I have also solid experience on
          full-stack web development. I share some of my projects on my Github
          account.
        </p>
        <h2 className="mt-5 text-center text-dark">My Skills</h2>
        <div
          id="carouselExampleControls"
          className="carousel slide mb-5 mt-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item p-3 active">
              <div className="text-center w-100 d-flex flex-column justify-content-center align-items-center">
                <p className="ul-text">
                  I know and use these programming languages for developing
                  projects:
                </p>
                <ul>
                  <li className="text-danger">Python</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
            <div className="carousel-item p-3">
              <div className="text-center w-100 d-flex flex-column justify-content-center align-items-center">
                <p className="ul-text">
                  I am using these frameworks for developing projects:
                </p>
                <ul>
                  <li>OpenCV</li>
                  <li>Tensorflow</li>
                  <li>Pytorch</li>
                  <li>Numpy</li>
                  <li>Keras</li>
                </ul>
              </div>
            </div>
            <div className="carousel-item p-3">
              <div className="text-center w-100 d-flex flex-column justify-content-center align-items-center">
                <p className="ul-text">
                  I have also experience in these development environments:
                </p>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
            <div className="carousel-item p-3">
              <div className="text-center w-100 d-flex flex-column justify-content-center align-items-center">
                <p className="ul-text">
                  Besides, I am comfortable with these languages/tools:
                </p>
                <ul>
                  <li>Java/C#</li>
                  <li>C/C++</li>
                  <li>SQL/NoSQL</li>
                </ul>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="contact text-center d-flex flex-column align-items-center ">
          <h3 className="border-bottom border-dark text-dark">Contact</h3>
          <a href="mailto:fatihbulbul12@gmail.com">Mail me</a>
          <a href="https://twitter.com/fatihbulbul91">Twitter</a>
          <a href="https://github.com/fatihbulbul1/">Github account</a>
        </div>
      </div>
    </main>
  );
};
