import React from "react";
import { useEffect, useState } from "react";
export const Projects = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/fatihbulbul1/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(
          data
            .filter((repo: any) => repo.name !== "fatihbulbul1.github.io")
            .sort(
              (a: any, b: any) =>
                +new Date(b.created_at) - +new Date(a.created_at)
            )
            .slice(0, 8)
        );
      });
  }, []);
  return (
    <main
      id="projects"
      className="py-4 px-3 d-flex flex-column align-items-center"
    >
      <h2 className="mb-5">My latest projects</h2>
      <div className="projects-container py-5">
        {repos.map((repo: any) => {
          const url = `https://raw.githubusercontent.com/fatihbulbul1/${repo.name}/main/screenshot.png`;
          return (
            <div key={repo.id} className="project mb-5">
              <img
                className="thumbnail"
                onClick={() => window.open(repo.html_url)}
                onError={(e) => {
                  switch (repo.name) {
                    case "react-responsive-url-shortener":
                      e.currentTarget.src = `https://raw.githubusercontent.com/fatihbulbul1/react-responsive-url-shortener/main/src/images/screenshot_main.png`;
                      break;
                    case "react-color-guesser":
                      e.currentTarget.src = `https://raw.githubusercontent.com/fatihbulbul1/react-color-guesser/main/images/screenshot_main.png`;
                      break;
                    case "react-ip-tracker-app":
                      e.currentTarget.src = `https://raw.githubusercontent.com/fatihbulbul1/react-ip-tracker-app/main/images/screenshot_main.png`;
                      break;
                    case "react-rest-countries-api":
                      e.currentTarget.src =
                        "https://raw.githubusercontent.com/fatihbulbul1/react-rest-countries-api/main/images/screenshot_light.png";
                  }
                }}
                src={url}
                alt=""
              />
              <p className="text-center">{repo.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};
