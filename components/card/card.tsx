import React, { VFC } from "react";
import Router from "next/router";
import { navigationActions } from "store/navigation/actions";

import s from "./card.module.css";
import { useDispatch } from "react-redux";

export const Card: VFC<Props> = ({ data, link }) => {
  const dispatch = useDispatch();

  const onCLickHandler = () => {
    Router.push(`${link}/${data.id}`);
    dispatch(navigationActions.changeActiveRequested(null));
  };

  return (
    <div className={s.imageWrapper} onClick={onCLickHandler}>
      <img alt="project" src={`/${data.src}`} className={s.project} />
      <div className={s.name}>{data.id}</div>
      <div className={s.shadow}></div>
    </div>
  );
};

type Props = {
  data: {
    id: number;
    src: string;
  };
  link: string;
};
