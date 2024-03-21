import type {} from '@mui/x-date-pickers/themeAugmentation';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  components: {
    MuiStaticDatePicker: {
      // styleOverrides: {},
    },
    MuiDatePicker: {
      defaultProps: {},
      // styleOverrides: {},
    },
    MuiSelect: {
      styleOverrides: {

      }
    },
  }
})

export default function Calendar() {
  const dayOfWeekFormatter = (day: string, date: string) => {
    return day;
  };

  return (
    <div className="max-w-md">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <StaticDatePicker
            sx={{
              width: '320px',
              backgroundColor: '#1B1B1B',
              boxShadow: '4px 4px 20px 0 rgba(0, 0, 0, .3)',
              '& .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root': {
                color: '#fff',
                fontSize: '14px',
              },
              '& .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root:hover': {
                color: '#1B1B1B',
                backgroundColor: '#fff',
              },
              '& .css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel': {
                color: '#929292',
                fontSize: '11px',
              },
              '& .css-jgls56-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)': { // old selected
                backgroundColor: '#1B1B1B',
                color: '#fff',
                borderColor: '#00A3FF',
              },
              '& .css-1vooibu-MuiSvgIcon-root': {
                color: '#fff',
              },
              '& .css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
                color: '#fff',
                fontSize: '14px',
                fontWeight: '600',
              },
              '& .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root.Mui-selected': { // selected
                backgroundColor: '#00A3FF',
                border: 'solid',
                borderColor: '#00A3FF',
              },
              '& .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root:focus.Mui-selected': { // focus
                backgroundColor: '#00A3FF',
              },
              '& .css-sv1lee-MuiPickersLayout-root .css-1u23akw-MuiButtonBase-root-MuiPickersDay-root:hover': {
                color: '#fff',
              },
              '& .css-18wn1yb-MuiButtonBase-root-MuiPickersDay-root': { // days outside current month
                color: '#929292',
              },
              '& .MuiPickersArrowSwitcher-root.css-9reuh9-MuiPickersArrowSwitcher-root': { // month switcher arrows
                width: '100%',
                justifyContent: 'space-between',
              },
              '& .css-cyfsxc-MuiPickersCalendarHeader-labelContainer': { // current month year
                position: 'absolute',
                left: 'calc(50% - 40px)',
              },
              '& .MuiPickersCalendarHeader-root': {
                position: 'relative',
              }
            }}
            dayOfWeekFormatter={dayOfWeekFormatter}
            showDaysOutsideCurrentMonth={true}
          />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
};