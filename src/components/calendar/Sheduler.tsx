import React from 'react';
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

// import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';

const Sheduler: React.FC = () => {
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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (
    <ScheduleComponent
      currentView="Month"
      selectedDate={new Date(2019, 0, 11)}
      eventSettings={localData}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Sheduler;
