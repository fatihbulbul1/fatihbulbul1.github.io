import React from "react";
import { useEffect, useState } from "react";
export const Projects = () => {
  const languages = ["JavaScript", "TypeScript", "CSS", "HTML", null];
  const [fullstackrepos, setFullStackRepos] = useState([]);
  const [pythonRepos, setPythonRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/fatihbulbul1/repos")
      .then((res) => res.json())
      .then((data) => {
        setPythonRepos(
          data
            .filter(
              (repo: any) =>
                repo.language == "Python" || repo.language == "Jupyter Notebook"
            )
            .sort(
              (a: any, b: any) =>
                +new Date(b.created_at) - +new Date(a.created_at)
            )
            .slice(0, 8)
        );
        setFullStackRepos(
          data
            .filter(
              (repo: any) =>
                languages.includes(repo.language) &&
                repo.name !== "fatihbulbul1.github.io"
            )
            .sort(
              (a: any, b: any) =>
                +new Date(b.created_at) - +new Date(a.created_at)
            )
            .slice(0, 8)
        );
        /* setRepos(
          data
            .filter((repo: any) => repo.name !== "fatihbulbul1.github.io")
            .sort(
              (a: any, b: any) =>
                +new Date(b.created_at) - +new Date(a.created_at)
            )
            .slice(0, 8)
        ); */
      });
  }, []);
  return (
    <main
      id="projects"
      className="py-4 px-3 d-flex flex-column align-items-center"
    >
      <h2 className="mb-5">My latest projects</h2>
      <h3 className="text-info">Python Projects</h3>
      <div className="projects-container py-5">
        {pythonRepos.map((repo: any) => {
          const url = `https://raw.githubusercontent.com/fatihbulbul1/${repo.name}/main/screenshot.png`;
          return (
            <div key={repo.id} className="project mb-5">
              <img
                className="thumbnail"
                onClick={() => window.open(repo.html_url)}
                onError={(e) => {
                  e.currentTarget.src = `https://raw.githubusercontent.com/fatihbulbul1/${repo.name}/main/images/screenshot.png`;
                }}
                src={url}
                alt=""
              />
              <p className="text-center">{repo.name}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-danger">Full Stack Projects</h3>
      <div className="projects-container py-5">
        {fullstackrepos.map((repo: any) => {
          const url = `https://raw.githubusercontent.com/fatihbulbul1/${repo.name}/main/screenshot.png`;
          return (
            <div key={repo.id} className="project mb-5">
              <img
                className="thumbnail"
                onClick={() => window.open(repo.html_url)}
                onError={(e) => {
                  e.currentTarget.src = `https://raw.githubusercontent.com/fatihbulbul1/${repo.name}/main/images/screenshot.png`;
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
