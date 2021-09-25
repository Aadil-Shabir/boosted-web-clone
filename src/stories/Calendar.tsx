import React, {HTMLAttributes} from 'react';
import {
  ScheduleComponent,
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from '@syncfusion/ej2-react-schedule';

import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../../node_modules/@syncfusion/ej2-calendars/styles/material.css';
import '../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
import '../../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
import '../../node_modules/@syncfusion/ej2-lists/styles/material.css';
import '../../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../../node_modules/@syncfusion/ej2-schedule/styles/material.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  currentView: 'Month' | 'Week' | 'Day';
  selectedDate: Date;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Calendar = ({...props}: Props) => {
  const localData: EventSettingsModel = {
    dataSource: [
      {
        EndTime: new Date(2019, 0, 11, 12, 15),
        StartTime: new Date(2019, 0, 11, 6, 30),
        Subject: 'testing',
        IsAllDay: true,
      },
    ],
  };
  return (
    <ScheduleComponent {...props} eventSettings={localData}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};
