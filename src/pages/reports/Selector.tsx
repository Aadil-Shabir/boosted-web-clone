import React, {useState} from 'react';
import {MenuItem} from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import {Select, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  selector: {
    background: 'none',
    border: 'none',
    color: 'blue',
  },
  sm: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    },
  },
  selectorText: {
    paddingTop: '6px',
    paddingRight: '6px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      paddingTop: '12px',
    },
  },
  selectorItems: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Selector: React.FC = () => {
  const [textValue, setTextValue] = useState<string>('');
  const [name, setName] = useState(false);
  const [initializer, setInitializer] = useState(true);
  const classes = useStyles();

  const LastDays = () => {
    const today = new Date()
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .split(' ')
      .join(' ');

    const prevSeven = new Date();
    const lastSeven = prevSeven.setDate(prevSeven.getDate() - 6);
    const newSeven = new Date(lastSeven)
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .split(' ')
      .join(' ');

    const prevThirty = new Date();
    const lastThirty = prevThirty.setDate(prevThirty.getDate() - 29);
    const newThirty = new Date(lastThirty)
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .split(' ')
      .join(' ');

    const prev180 = new Date();
    const last180 = prev180.setDate(prev180.getDate() - 179);
    const new180 = new Date(last180)
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .split(' ')
      .join(' ');

    const prev365 = new Date();
    const last365 = prev365.setDate(prev365.getDate() - 364);
    const new365 = new Date(last365)
      .toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
      .split(' ')
      .join(' ');

    return {
      today,
      newSeven,
      newThirty,
      new180,
      new365,
    };
  };

  const Items = [
    {
      id: '1',
      name: 'Today',
      newName: LastDays().today,
    },
    {
      id: '2',
      name: 'Last 7 days',
      newName: `${LastDays().newSeven} - ${LastDays().today}`,
    },
    {
      id: '3',
      name: 'Last 30 days',
      newName: `${LastDays().newThirty} - ${LastDays().today}`,
    },
    {
      id: '4',
      name: 'Last 180 Days',
      newName: `${LastDays().new180} - ${LastDays().today}`,
    },
    {
      id: '5',
      name: 'Last 365 Days',
      newName: `${LastDays().new365} - ${LastDays().today}`,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <div className={classes.selectorItems}>
          <Typography variant="h6" className={classes.selectorText}>
            {initializer ? 'Last 30 days' : textValue}
          </Typography>
          <Select
            value={textValue}
            onChange={handleChange}
            displayEmpty
            variant="standard"
            className={classes.selector}
            onClose={() => setName(true)}
            onOpen={() => {
              setName(false);
              setInitializer(false);
            }}
            color="secondary"
            autoWidth
          >
            {initializer && (
              <MenuItem value="">
                <Typography variant="h6">{`${LastDays().newThirty} - ${
                  LastDays().today
                }`}</Typography>
              </MenuItem>
            )}

            {Items.map((e) => {
              return (
                <MenuItem key={e.id} value={e.name}>
                  {!name && (
                    <Typography variant="h6" className={classes.sm}>
                      {e.name}
                    </Typography>
                  )}
                  {name && (
                    <Typography variant="h6" className={classes.sm}>
                      {e.newName}
                    </Typography>
                  )}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </FormControl>
    </div>
  );
};

export default Selector;
