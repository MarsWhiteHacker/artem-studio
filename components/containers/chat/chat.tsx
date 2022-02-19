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
          link="https://t.me/Artem_Pecheniuk"
          size="small"
        />
        <Contact
          title="instagram"
          link="https://www.instagram.com/artem_pecheniuk_studio"
          size="small"
        />
        <Contact title="email" link="someone@example.com" size="small" />
        <Contact title="phone" link="+380999999999" size="small" />
        <Contact title="youtube" link="https://www.youtube.com" size="small" />
      </div>
      <div className={s.heartsWrapper}>
        <img alt="chat" src="/hearts.png" className={s.img} />
      </div>
    </div>
  );
};
