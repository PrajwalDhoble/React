import React, { useState } from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import * as locales from "react-date-range/dist/locale";

export const DatePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
    },
  ]);

  return (
    <DateRange
      onChange={(dates) => setState([dates.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      months={2}
      locale={locales["enUS"]}
      direction="horizontal"
    >
      </DateRange>
  );
};
