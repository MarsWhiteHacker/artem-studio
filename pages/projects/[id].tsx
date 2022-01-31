import Router, { useRouter } from "next/router";
import { useContext, VFC } from "react";

import { NavigationBar } from "components/containers/navigation";
import { Title } from "components/containers/title";
import { LanguagesContext } from "contexts";

import s from "./project.module.css";

const Project: VFC = () => {
  const router = useRouter();
  const languages = useContext(LanguagesContext);

  const onBackHandler = () => {
    Router.push(`/projects`);
  };

  return (
    <Title title="Project">
      <NavigationBar>
        <div className={s.scrollWrapper}>
          <div className={s.back} onClick={onBackHandler}>
            <i
              className="bi bi-caret-left-fill"
              style={{ fontSize: "20px" }}
            ></i>
            <span>{languages.project.back}</span>
          </div>
          <div className={s.scroll}>
            {[1].map((item, i) => (
              <img
                className={s.image}
                alt="projectImage"
                src="/241732508_428926741983656_8749465304171645258_n.jpg"
                key={i}
              />
            ))}
          </div>
        </div>
      </NavigationBar>
    </Title>
  );
};

export default Project;
