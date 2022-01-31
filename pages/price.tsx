import { ChangeEvent, useContext, useState } from "react";
import type { NextPage } from "next";

import { Board } from "components/containers/board";
import { NavigationBar } from "components/containers/navigation";
import { urlToIndexConverter } from "utils/urlToIndexConverter";
import { Title } from "components/containers/title";
import s from "styles/price.module.css";
import { Header } from "components/common/header";
import { LanguagesContext } from "contexts";

const Price: NextPage<Props> = ({ activeFromServer }) => {
  const languages = useContext(LanguagesContext);
  const [footSquareValue, setFootSquareValue] = useState<number | null>(null);
  const [meterSquareValue, setMeterSquareValue] = useState<number | null>(null);
  const footPrice = 10;
  const meterPrice = 107.5;
  const sum = footSquareValue ? footSquareValue * footPrice : 0;

  const footInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (String(value).length <= 10) {
      setFootSquareValue(value ? +value : null);
      setMeterSquareValue(value ? +(+value * 0.092903).toFixed(2) : null);
    }
  };

  const meterInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (String(value).length <= 10) {
      setMeterSquareValue(value ? +value : null);
      setFootSquareValue(value ? +(+value * 10.7639).toFixed(2) : null);
    }
  };

  return (
    <Title title="Price">
      <NavigationBar activeFromServer={activeFromServer}>
        <Board>
          <div className={s.boardWrapper}>
            <Header>{languages.price.header}</Header>
            <div className={s.infoWrapper}>
              <div className={s.formWrapper}>
                <div>
                  <div className={s.footInner}>
                    <div className={s.price}>
                      1 {languages.price.foot}
                      <sup>2</sup> = {footPrice} {languages.price.currency}
                    </div>
                    <input
                      type="number"
                      placeholder={languages.price.footPlaceholder}
                      value={footSquareValue ?? ""}
                      onChange={footInputHandler}
                      className={s.input}
                    />
                  </div>
                </div>
                <div>
                  <div className={s.meterInner}>
                    <div className={s.price}>
                      1 {languages.price.meter}
                      <sup>2</sup> = {meterPrice} {languages.price.currency}
                    </div>
                    <input
                      type="number"
                      placeholder={languages.price.meterPlaceholder}
                      value={meterSquareValue ?? ""}
                      onChange={meterInputHandler}
                      className={s.input}
                    />
                  </div>
                </div>
              </div>
              <div className={s.sumWrapper}>
                {sum.toFixed(2)} {languages.price.currency}
              </div>
            </div>
          </div>
        </Board>
      </NavigationBar>
    </Title>
  );
};

export default Price;

Price.getInitialProps = async ({ pathname }) => {
  const activeFromServer = urlToIndexConverter(pathname);

  return { activeFromServer: activeFromServer };
};

type Props = {
  activeFromServer: number;
};
