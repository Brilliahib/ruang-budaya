import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function MyCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      className="h-100"
      events={[
        { title: "Event 1", date: "2024-05-01" },
        { title: "Event 2", date: "2024-05-02" },
      ]}
    />
  );
}

export default MyCalendar;
