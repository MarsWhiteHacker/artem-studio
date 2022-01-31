import type { NextPage } from "next";

import { NavigationBar } from "components/containers/navigation";
import { urlToIndexConverter } from "utils/urlToIndexConverter";
import { Title } from "components/containers/title";
import s from "styles/projects.module.css";
import { Carousel } from "react-bootstrap";
import { fromArrayToNestedArrays } from "utils/fromArrayToNestedArrays";
import { useRouter } from "next/router";
import { Card } from "components/card";
import { useState } from "react";

const Projects: NextPage<Props> = ({ activeFromServer }) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const projectsPerSlide = 6;
  const data = [
    { src: "241732508_428926741983656_8749465304171645258_n.jpg", id: 1 },
    { src: "241744251_1959460034220194_5359426941602671539_n.jpg", id: 2 },
    { src: "242140249_381361070064227_9013256209511860520_n.jpg", id: 3 },
    { src: "241732508_428926741983656_8749465304171645258_n.jpg", id: 4 },
    { src: "241744251_1959460034220194_5359426941602671539_n.jpg", id: 5 },
    { src: "242140249_381361070064227_9013256209511860520_n.jpg", id: 6 },
    { src: "241732508_428926741983656_8749465304171645258_n.jpg", id: 7 },
    { src: "241744251_1959460034220194_5359426941602671539_n.jpg", id: 8 },
    { src: "242140249_381361070064227_9013256209511860520_n.jpg", id: 9 },
    { src: "241732508_428926741983656_8749465304171645258_n.jpg", id: 10 },
    { src: "241744251_1959460034220194_5359426941602671539_n.jpg", id: 11 },
    { src: "242140249_381361070064227_9013256209511860520_n.jpg", id: 12 },
    { src: "241732508_428926741983656_8749465304171645258_n.jpg", id: 13 },
  ];
  const dividedPerSlideDataArray = fromArrayToNestedArrays(
    data,
    projectsPerSlide
  );

  const handleSelect = (selectedIndex: number, e: unknown) => {
    setIndex(selectedIndex);
  };

  const onPrevSlideHandler = () => {
    if (index === 0) {
      setIndex(dividedPerSlideDataArray.length - 1);
    } else {
      setIndex((index) => index - 1);
    }
  };

  const onNextSlideHandler = () => {
    if (index === dividedPerSlideDataArray.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };

  return (
    <Title title="Projects">
      <NavigationBar activeFromServer={activeFromServer}>
        <div className={s.background}>
          <Carousel
            activeIndex={index}
            className={s.wrapper}
            interval={null}
            controls={false}
            onSelect={handleSelect}
          >
            {dividedPerSlideDataArray.map((projectsArray, i) => (
              <Carousel.Item key={i}>
                <div className={s.slide}>
                  {projectsArray.map((project, j) => (
                    <Card key={i + j} data={project} link={router.pathname} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className={s.prevButton} onClick={onPrevSlideHandler}>
            <img alt="prevArrow" src="/prev.png" />
          </div>
          <div className={s.nextButton} onClick={onNextSlideHandler}>
            <img alt="nextArrow" src="/next.png" />
          </div>
        </div>
      </NavigationBar>
    </Title>
  );
};

export default Projects;

Projects.getInitialProps = async ({ pathname }) => {
  const activeFromServer = urlToIndexConverter(pathname);

  return { activeFromServer: activeFromServer };
};

type Props = {
  activeFromServer: number;
};
