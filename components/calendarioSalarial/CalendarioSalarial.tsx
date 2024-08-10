"use client"

import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarioSalarial = () => {

    const [value, onChange] = useState<Value>(new Date());

    return (
      <div>
        <Calendar locale='AO' onClickDay={(value:any, event:any)=>alert(value)}  onChange={onChange} value={value} />
      </div>
    )
};

export default CalendarioSalarial;