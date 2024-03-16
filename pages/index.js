import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1>Code News</h1>
      <p>
        A tecnologia molda o futuro. Explore as últimas novidades e descubra
        como a inovação está transformando o mundo ao seu redor!
      </p>
      <a
        href="https://github.com/gleidsonfagno/CodeVoyage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> Confira meu GitHub
      </a>
    </div>
  );
}
