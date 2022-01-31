import { VFC } from "react";

import { Contact } from "components/common/contact";
import s from "./chat.module.css";

export const Chat: VFC = () => {
  return (
    <div className={s.chatWrapper}>
      <div className={s.netsWrapper}>
        <Contact
          title="whatsapp"
          link="https://www.whatsapp.com"
          size="small"
        />
        <Contact
          title="telegram"
          link="https://www.telegram.com"
          size="small"
        />
        <Contact
          title="instagram"
          link="https://www.instagram.com"
          size="small"
        />
        <Contact title="email" link="someone@example.com" size="small" />
        <Contact title="phone" link="+380999999999" size="small" />
      </div>
      <div className={s.heartsWrapper}>
        <img alt="chat" src="/hearts.png" className={s.img} />
      </div>
    </div>
  );
};
