import type { NextPage } from "next";

import { Board } from "components/containers/board";
import { NavigationBar } from "components/containers/navigation";
import { Title } from "components/containers/title";
import { urlToIndexConverter } from "utils/urlToIndexConverter";
import s from "styles/contacts.module.css";
import { Contact } from "components/common/contact";

const Contacts: NextPage<Props> = ({ activeFromServer }) => {
  return (
    <Title title="Contacts">
      <NavigationBar activeFromServer={activeFromServer}>
        <Board>
          <div className={s.wrapper}>
            <div className={s.nets}>
              <Contact title="whatsapp" link="https://www.whatsapp.com" />
              <Contact title="telegram" link="https://www.telegram.com" />
              <Contact title="instagram" link="https://www.instagram.com" />
              <Contact title="email" link="someone@example.com" />
              <Contact title="phone" link="+380999999999" />
              <Contact title="youtube" link="https://www.youtube.com" />
            </div>
          </div>
        </Board>
      </NavigationBar>
    </Title>
  );
};

export default Contacts;

Contacts.getInitialProps = async ({ pathname }) => {
  const activeFromServer = urlToIndexConverter(pathname);

  return { activeFromServer: activeFromServer };
};

type Props = {
  activeFromServer: number;
};
