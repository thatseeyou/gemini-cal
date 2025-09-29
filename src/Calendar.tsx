import React, { useState, useEffect, useMemo, useCallback } from 'react';
import KoreanLunarCalendar from 'korean-lunar-calendar';
import Holidays from 'date-holidays';
import './Calendar.css';

interface CalendarProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

interface Holiday {
  name: string;
  date: string;
  type?: string;
}

type HolidayType = 'normal' | 'substitute' | 'lunar_new_year' | 'chuseok' | '';

interface CalendarDate {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSunday: boolean;
  lunarInfo: string;
  holidays: Holiday[];
  holidayType: HolidayType;
}

const holidayTypeMap: { [key: string]: HolidayType } = {
  "설날": 'lunar_new_year',
  "추석": 'chuseok',
};

const getHolidayType = (h: Holiday): HolidayType => {
    if (h.type === 'substitute') return 'substitute';
    return holidayTypeMap[h.name] || 'normal';
}

const Calendar: React.FC<CalendarProps> = ({ currentDate, onDateChange }) => {
  const [calendarDates, setCalendarDates] = useState<CalendarDate[]>([]);
  const hd = useMemo(() => new (Holidays as any)('KR'), []);

  const getLunarDate = useCallback((date: Date): string => {
    const calendar = new KoreanLunarCalendar();
    calendar.setSolarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    const lunar = calendar.getLunarCalendar();

    if (lunar.day === 1 || lunar.day === 15) {
      return `음 ${lunar.month}.${lunar.day}`;
    }

    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    const nextCalendar = new KoreanLunarCalendar();
    nextCalendar.setSolarDate(nextDay.getFullYear(), nextDay.getMonth() + 1, nextDay.getDate());
    const nextLunar = nextCalendar.getLunarCalendar();
    if (nextLunar.day === 1) {
      return `음 ${lunar.month}.${lunar.day}`;
    }

    return '';
  }, []);

  const generateCalendarDates = useCallback((date: Date): CalendarDate[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    hd.setLanguages('ko');
    const holidays = hd.getHolidays(year);
    const holidayMap = new Map<string, Holiday[]>();
    holidays.forEach((h: Holiday) => {
        const key = new Date(h.date).toDateString();
        if(!holidayMap.has(key)) holidayMap.set(key, []);
        holidayMap.get(key)!.push(h);
    });


    const firstDayOfMonth = new Date(year, month, 1);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

    const dates: CalendarDate[] = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);
      d.setHours(0, 0, 0, 0);

      const dayHolidays = holidayMap.get(d.toDateString()) || [];
      const holidayType = dayHolidays.length > 0 ? getHolidayType(dayHolidays[0]) : '';

      dates.push({
        date: d,
        day: d.getDate(),
        isCurrentMonth: d.getMonth() === month,
        isToday: d.getTime() === today.getTime(),
        isSunday: d.getDay() === 0,
        lunarInfo: getLunarDate(d),
        holidays: dayHolidays,
        holidayType: holidayType,
      });
    }
    return dates;
  }, [hd, getLunarDate]);

  useEffect(() => {
    setCalendarDates(generateCalendarDates(currentDate));
  }, [currentDate, generateCalendarDates]);

  const handlePrevMonth = () => {
    onDateChange(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    onDateChange(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getDayClassName = (d: CalendarDate): string => {
    const classNames = ['calendar-day'];
    if (!d.isCurrentMonth) classNames.push('not-current-month');
    if (d.isToday) classNames.push('today');
    if (d.holidays.length > 0) {
        classNames.push(`holiday-${d.holidayType}`);
    } else if (d.isSunday) {
        classNames.push('holiday-normal');
    }
    return classNames.join(' ');
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {['일', '월', '화', '수', '목', '금', '토'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {calendarDates.map((d, index) => (
          <div key={index} className={getDayClassName(d)}>
            <div className="day-number">{d.day}</div>
            <div className="lunar-info">{d.lunarInfo}</div>
            <div className="holiday-info">
                {d.holidays.map(h => h.name).join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
