import { FC } from "react";

import Image from "next/image";
import CarouselBT from "react-bootstrap/Carousel";

import s from "./carousel.module.css";

export const Carousel: FC = ({ children }) => {
  const data = [
    { link: "/241732508_428926741983656_8749465304171645258_n.jpg" },
    { link: "/241744251_1959460034220194_5359426941602671539_n.jpg" },
    { link: "242140249_381361070064227_9013256209511860520_n.jpg" },
  ];
  return (
    <>
      <CarouselBT
        interval={10000}
        controls={false}
        indicators={false}
        pause={false}
        className={s.wrapper}
      >
        {data.map((slide, i) => (
          <CarouselBT.Item className={s.imageWrapper} key={i}>
            <img
              src="/241732508_428926741983656_8749465304171645258_n.jpg"
              alt="First slide"
              className={s.image}
            />
            <div className={s.nameWrapper}>PROJECT 1</div>
            <div className={s.shadow}></div>
          </CarouselBT.Item>
        ))}
      </CarouselBT>
      {children}
    </>
  );
};
