import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { BarbersWithMostAppoitmentsCompleted } from '../../Helpers/Backend';

function BarbersWithMostAppoitments() {
  const [data, setData] = useState([
    {
      name: "John",
      question: "Doe",
      subject: "Physics",
      date: "10-jun-14",
      status: "Completed",
    },
    {
      name: "John",
      question: "Doe",
      subject: "Physics",
      date: "10-jun-14",
      status: "Pending",
    },
    {
      name: "John",
      question: "Doe",
      subject: "Physics",
      date: "10-jun-14",
      status: "Pending",
    },
    {
      name: "John",
      question: "Doe",
      subject: "Physics",
      date: "10-jun-14",
      status: "InProgress",
    },
    {
      name: "John",
      question: "Doe",
      subject: "Physics",
      date: "10-jun-14",
      status: "Completed",
    },
    {
      name: "John",
      question: "Doe",
      subject: "Physics",
      date: "10-jun-14",
      status: "Pending",
    },
  ]);

  return (
    <div className="w-full h-full pt-5">
      <table class=" w-[100%] bg-white m-auto rounded-lg">
        <tr>
          <th class="font-medium text-[#AEAEAE] text-left px-2 py-2">
            Student Name
          </th>
          <th class="font-medium text-[#AEAEAE] text-left px-2 py-2">
            Questions
          </th>
          <th class="font-medium text-[#AEAEAE] text-left px-2 py-2">
            Subject
          </th>
          <th class="font-medium text-[#AEAEAE] text-left px-2 py-2">Date</th>
          <th class="font-medium text-[#AEAEAE] text-left px-2 py-2">Status</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr key={index} class="border-b-[1px] h-14">
              <td class=" text-Left px-2 py-2">{item.name}</td>
              <td class=" text-left px-2 py-2">{item.question}</td>
              <td class=" text-left px-2 py-2">{item.subject}</td>
              <td class=" text-left px-2 py-2">{item.date}</td>

              <td class=" text-left  px-2 py-2">
                {item.status === "Completed" ? (
                  <span class="bg-[#82D616] w-[30px] text-[12px] text-white px-2 py-2 rounded-md">
                    {item.status}
                  </span>
                ) : item.status === "Pending" ? (
                  <span class="bg-[#FFF6A4] w-[30px] text-[12px] text-[#FBC919] px-2 py-2 rounded-md">
                    {item.status}
                  </span>
                ) : (
                  <span class="bg-[#FFBBBB] w-[30px] text-[12px] text-[red] px-2 py-2 rounded-md">
                    {item.status}
                  </span>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default BarbersWithMostAppoitments