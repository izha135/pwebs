import React from "react";

export default function Projects() {
  //   var request = new XMLHttpRequest()

  // request.open('GET', 'https://api.github.com/users/izha135/repos', true)

  // request.onload = function () {
  //   var data = JSON.parse(this.response);
  //   console.log(data);
  //   var statusHTML = '';

  //   $.each(data, function(i, status) {
  //     statusHTML += '<div>';
  //     statusHTML += '<div>' + status.name + '</div>'
  //   })
  // }
  //  request.send();

  return (
    <section id="projects">
      <div className="container ">
        <h1 className="mt-[5rem] mb-6 text-4xl font-lobster-one text-purple-400">
          Projects
        </h1>
        <div className="  grid place-content-center xl-s:grid-cols-2 md-s:flex-row hover:animation-spin  ">
          <div className=" p-3  shadow-lg mb-5 bg-white rounded ">
            <div className="card">
              {" "}
              <div className="card-body">
                <h5 className="card-title text-left font-poppins font-semibold">
                  Personal Website
                </h5>
                <p className="card-text text-left font-poppins ">
                  Self customised personal website built with TailwindCSS, React
                  and a little bit of bootstrap!
                </p>
                <div className="text-left -ml-6 my-2">
                  <a
                    href="https://github.com/izha135/pwebs"
                    className="btn btn-outline-secondary mx-4"
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-github mx-1"></i>Repo
                  </a>{" "}
                </div>
                <hr className="my-2" />
                <div className="pb-3">
                  Languages:
                  <a className="link" href="" target="_blank">
                    <span className="badge bg-light text-dark">
                      {" "}
                      JavaScript:75.7%, HTML:21.0%, CSS:3.3%{" "}
                    </span>
                  </a>
                </div>
                <p class="card-text">
                  <a
                    href=""
                    target=" _blank"
                    class="text-dark text-decoration-none"
                  >
                    <span class="text-dark card-link mr-4">
                      <i class="fab fa-github mx-1"></i> Stars{" "}
                      <span class="badge badge-dark">1</span>
                    </span>
                  </a>
                  <small class="text-muted">Updated on June 26, 2023</small>
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="shadow-lg p-3 mb-5 bg-white rounded ">
            {" "}
            <div className="card">
              {" "}
              <div className="card-body">
                <h5 className="card-title text-left font-poppins font-semibold">
                  Distributed Auction
                </h5>

                <p className="card-text text-left font-poppins">
                  The Distributed Auction project is an innovative and
                  decentralized auction system built to provide a transparent,
                  secure, and efficient platform for conducting auctions.
                </p>
                <div className="text-left -ml-6 my-2">
                  <a
                    href="https://github.com/izha135/CS351-Project-5---Distributed-Auction"
                    className="btn btn-outline-secondary mx-4"
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-github mx-1"></i>Repo
                  </a>
                </div>
                <hr className="my-2" />
                <div className="pb-3">
                  Languages:
                  <a className="link" href="" target="_blank">
                    <span className="badge bg-light text-dark">
                      {" "}
                      Java:100%{" "}
                    </span>
                  </a>
                </div>
                <p class="card-text">
                  <a
                    href=""
                    target=" _blank"
                    class="text-dark text-decoration-none"
                  >
                    <span class="text-dark card-link mr-4">
                      <i class="fab fa-github mx-1"></i> Stars{" "}
                      <span class="badge badge-dark">1</span>
                    </span>
                  </a>
                  <small class="text-muted">Updated on June 26, 2023</small>
                </p>
              </div>
            </div>
          </div>
          <div className=" shadow-lg p-3 mb-5 bg-white rounded">
            {" "}
            <div className="card">
              {" "}
              <div className="card-body">
                <h5 className="card-title text-left font-poppins font-semibold">
                  Modulo Times Table{" "}
                </h5>
                <p className="card-text text-left font-poppins">
                  The project provides visualizations to aid in understanding
                  the recursive modulo times table. It generates visual
                  representations such as interactive graphs, color-coded grids,
                  or radial diagrams that illustrate the patterns and
                  relationships within the times table.{" "}
                </p>
                <div className="text-left -ml-6 my-2">
                  <a
                    href="https://github.com/izha135/modulo-times-Tabl"
                    className="btn btn-outline-secondary mx-4"
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-github mx-1"></i>Repo
                  </a>
                </div>
                <hr className="my-2" />
                <div className="pb-3">
                  Languages:
                  <a className="link" href="" target="_blank">
                    <span className="badge bg-light text-dark">
                      {" "}
                      Java:100%{" "}
                    </span>
                  </a>
                </div>
                <p class="card-text">
                  <a
                    href=""
                    target=" _blank"
                    class="text-dark text-decoration-none"
                  >
                    <span class="text-dark card-link mr-4">
                      <i class="fab fa-github mx-1"></i> Stars{" "}
                      <span class="badge badge-dark">2</span>
                    </span>
                  </a>
                  <small class="text-muted">Updated on June 26, 2023</small>
                </p>
              </div>
            </div>
          </div>
          <div className=" shadow-lg p-3 mb-5 bg-white rounded">
            {" "}
            <div className="card">
              {" "}
              <div className="card-body">
                <h5 className="card-title text-left font-poppins font-semibold">
                  Mazes
                </h5>
                <p className="card-text text-left font-poppins">
                  The Maze Visualization project is an interactive tool that
                  allows users to visualize different maze-solving algorithms.
                  This project incorporates four popular maze-solving
                  algorithms: A*, Random Mouse, Pledge, and Wall Following.{" "}
                </p>
                <div className="text-left -ml-6 my-2">
                  <a
                    href="https://github.com/izha135/Mazes"
                    className="btn btn-outline-secondary mx-4"
                    target="_blank"
                  >
                    {" "}
                    <i className="fab fa-github mx-1"></i>Repo
                  </a>
                </div>
                <hr className="my-2" />
                <div className="pb-3">
                  Languages:
                  <a className="link" href="" target="_blank">
                    <span className="badge bg-light text-dark">
                      {" "}
                      Java:100%{" "}
                    </span>
                  </a>
                </div>
                <p class="card-text">
                  <a
                    href=""
                    target=" _blank"
                    class="text-dark text-decoration-none"
                  >
                    <span class="text-dark card-link mr-4">
                      <i class="fab fa-github mx-1"></i> Stars{" "}
                      <span class="badge badge-dark">1</span>
                    </span>
                  </a>
                  <small class="text-muted">Updated on June 26, 2023</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
