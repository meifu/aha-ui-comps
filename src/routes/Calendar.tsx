import { useState } from 'react';
import dayjs from 'dayjs';

import type {} from '@mui/x-date-pickers/themeAugmentation';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#fff' },
  },
});

export default function Calendar() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [fieldVal, setFieldVal] = useState<string>('');

  return (
    <div className="max-w-md">
      <ThemeProvider theme={darkTheme}>
        <InputLabel
          htmlFor="birthday"
          variant="outlined"
          size="small"
          sx={{
            display: 'inline-block',
            backgroundColor: 'black',
            fontSize: '11px',
            top: '7px',
            paddingLeft: '5px',
            paddingRight: '5px',
          }}
        >
          Birthday
        </InputLabel>
        <OutlinedInput
          name="birthday"
          placeholder="mm/dd/yyyy"
          onFocus={() => {
            setIsFocus(true);
          }}
          value={fieldVal}
          fullWidth
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#7f7f7f',
              borderWidth: '2px',
              borderRadius: '8px',
            },
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {isFocus && (
            <StaticDatePicker
              // open={isFocus}
              dayOfWeekFormatter={(day: string, date: string) => day}
              showDaysOutsideCurrentMonth={true}
              slots={{
                switchViewButton: () => <></>,
                // textField: MyTextInpu,
                // actionBar: PickersActionBar,
              }}
              slotProps={{
                toolbar: { toolbarFormat: 'MMM, YYYY', hidden: false },
                // textField: {
                //   placeholder: 'mm/dd/yyyy',
                //   label: 'Birthday',
                //   onFocus: (e) => {
                //     customInputRef.current = e.currentTarget;
                //     setIsFocus(true);
                //   },
                // },
                // popper: {
                //   anchorEl: customInputRef.current,
                //   placement: 'bottom-start',
                // },
                // actionBar: {
                //   actions: ['cancel', 'accept'],
                //   onClick: (e) => {
                //     console.log('test click actionBar', e);
                //     const targetEle: any = e.target;
                //     if (targetEle.innerText === 'OK') {
                //       console.log('should accept')
                //     }
                //   }
                // }
              }}
              onAccept={(value) => {
                console.log('Accept', value);
                const dateValue = dayjs(value).format('MM/DD/YYYY');
                setFieldVal(dateValue);
              }}
              // onChange={(val) => {
              //   console.log('onChange', val)
              //   if (!val) {
              //     console.log('should empty')
              //     setFieldVal('');
              //   }
              // }}

              sx={{
                width: '320px',
                backgroundColor: '#1B1B1B',
                boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, .3)',
                '& .MuiPickersDay-root': {
                  fontSize: '14px',
                },
                '& .MuiPickersDay-root:hover': {
                  color: '#1B1B1B',
                  backgroundColor: '#fff',
                },
                '& .MuiDayCalendar-weekDayLabel': {
                  color: '#929292',
                  fontSize: '11px',
                },
                '& .MuiPickersDay-today': {
                  // old selected
                  backgroundColor: '#1B1B1B',
                  borderColor: '#00A3FF',
                },
                '& .MuiButton-textPrimary': {
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '600',
                },
                '& .MuiPickersDay-root.Mui-selected': {
                  borderColor: '#00A3FF',
                  backgroundColor: '#00A3FF',
                  color: '#fff',
                },
                '& .MuiPickersArrowSwitcher-root.css-9reuh9-MuiPickersArrowSwitcher-root':
                  {
                    // month switcher arrows
                    width: '100%',
                    justifyContent: 'space-between',
                  },
                '& .css-cyfsxc-MuiPickersCalendarHeader-labelContainer': {
                  // current month year
                  position: 'absolute',
                  left: 'calc(50% - 46px)',
                },
                '& .css-nk89i7-MuiPickersCalendarHeader-root': {
                  paddingLeft: '12px',
                },
                '& .MuiPickersCalendarHeader-root': {
                  position: 'relative',
                },
                '& .MuiPickersLayout-root': {
                  borderRadius: '0.375rem',
                },
                '& .MuiDatePickerToolbar-root > .MuiTypography-root': {
                  display: 'none',
                },
              }}
            />
          )}
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}
