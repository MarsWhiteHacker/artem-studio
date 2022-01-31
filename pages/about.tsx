import type { NextPage } from "next";
import { useContext } from "react";

import { Board } from "components/containers/board";
import { Title } from "components/containers/title";
import s from "styles/about.module.css";
import { NavigationBar } from "components/containers/navigation";
import { urlToIndexConverter } from "utils/urlToIndexConverter";
import { LanguagesContext } from "contexts";

const About: NextPage<Props> = ({ activeFromServer }) => {
  const languages = useContext(LanguagesContext);
  return (
    <Title title="About">
      <NavigationBar activeFromServer={activeFromServer}>
        <Board>
          <div className={s.boardWrapper}>
            <div className={s.textWrapper}>
              {languages.about.text}
            </div>
            <div className={s.photoWrapper}>
              <div className={s.imgWraper}>
                <img className={s.image} alt="avatar" src="/user.jpg" />
              </div>
            </div>
          </div>
        </Board>
      </NavigationBar>
    </Title>
  );
};

export default About;

About.getInitialProps = async ({ pathname }) => {
  const activeFromServer = urlToIndexConverter(pathname);

  return { activeFromServer: activeFromServer };
};

type Props = {
  activeFromServer: number;
};
