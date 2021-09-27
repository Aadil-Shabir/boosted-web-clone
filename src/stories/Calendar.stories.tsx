import React from 'react';
import {Meta, Story} from '@storybook/react';

import {Calendar, Props} from './Calendar';

const meta: Meta = {
  title: 'Boosted-UI/Calendar',
  component: Calendar,
};

export default meta;

export const Template: Story<Props> = (args) => <Calendar {...args} />;

export const DaySheduler = Template.bind({});
DaySheduler.args = {
  currentView: 'Day',
};

export const WeekSheduler = Template.bind({});
WeekSheduler.args = {
  currentView: 'Week',
};

export const MonthSheduler = Template.bind({});
MonthSheduler.args = {
  currentView: 'Month',
};
