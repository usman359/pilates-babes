import React from "react";

export default function TimeTable() {
  return (
    <div className="bg-gray-100">
      <div
        className="relative mx-auto flex min-h-screen w-4/5 flex-col items-center justify-center overflow-x-auto text-center"
        id="calendar"
      >
        <h3 className="mb-6 text-2xl text-pink-200">Class Timetable</h3>
        <h1 className="mb-12 text-5xl text-black">
          Working Hours and Class Time
        </h1>
        <div className="mb-6 flex cursor-pointer items-center justify-center gap-4 text-pink-200">
          <span className="bg-pink-200 px-3 py-2 text-2xl text-white">
            All Classes
          </span>
          <span className="px-3 py-2 text-2xl">Cardio</span>
          <span className="px-3 py-2 text-2xl">Crossfit</span>
          <span className="px-3 py-2 text-2xl">Powerlifting</span>
        </div>
        <table className="w-full border-collapse text-2xl">
          <thead className="bg-pink-200 text-white">
            <tr>
              <th className="whitespace-nowrap p-3">Time</th>
              <th className="whitespace-nowrap p-3">Monday</th>
              <th className="whitespace-nowrap p-3">Tuesday</th>
              <th className="whitespace-nowrap p-3">Wednesday</th>
              <th className="whitespace-nowrap p-3">Thursday</th>
              <th className="whitespace-nowrap p-3">Friday</th>
              <th className="whitespace-nowrap p-3">Saturday</th>
              <th className="whitespace-nowrap p-3">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="whitespace-nowrap border border-gray-300 bg-pink-200 p-4 text-white">
                <span className="block px-2 py-1">6.00am</span>
                <span className="block px-2 py-1">-</span>
                <span className="block px-2 py-1">8.00am</span>
              </th>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">Cardio</strong>
                <span className="block px-2 py-1 font-light">John Deo</span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">
                  Crossfit
                </strong>
                <span className="block px-2 py-1 font-light">
                  Adam Phillips
                </span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">
                  Power Lifting
                </strong>
                <span className="block px-2 py-1 font-light">James Alien</span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">Cardio</strong>
                <span className="block px-2 py-1 font-light">John Deo</span>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap border border-gray-300 bg-pink-200 p-4 text-white">
                <span className="block px-2 py-1">10.00am</span>
                <span className="block px-2 py-1">-</span>
                <span className="block px-2 py-1">12.00am</span>
              </th>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">
                  Power Lifting
                </strong>
                <span className="block px-2 py-1 font-light">James Alien</span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">Cardio</strong>
                <span className="block px-2 py-1 font-light">John Deo</span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">
                  Crossfit
                </strong>
                <span className="block px-2 py-1 font-light">
                  Adam Phillips
                </span>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap border border-gray-300 bg-pink-200 p-4 text-white">
                <span className="block px-2 py-1">5.00pm</span>
                <span className="block px-2 py-1">-</span>
                <span className="block px-2 py-1">7.00pm</span>
              </th>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">
                  Power Lifting
                </strong>
                <span className="block px-2 py-1 font-light">James Alien</span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">Cardio</strong>
                <span className="block px-2 py-1 font-light">John Deo</span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">
                  Crossfit
                </strong>
                <span className="block px-2 py-1 font-light">
                  Adam Phillips
                </span>
              </td>
              <td className="border border-gray-300 p-4"></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap border border-gray-300 bg-pink-200 p-4 text-white">
                <span className="block px-2 py-1">7.00pm</span>
                <span className="block px-2 py-1">-</span>
                <span className="block px-2 py-1">9.00pm</span>
              </th>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">Cardio</strong>
                <span className="block px-2 py-1 font-light">John Deo</span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">
                  Crossfit
                </strong>
                <span className="block px-2 py-1 font-light">
                  Adam Phillips
                </span>
              </td>
              <td className="border border-gray-300 p-4"></td>
              <td className="border border-gray-300 p-4">
                <strong className="block px-2 py-1 font-medium">
                  Power Lifting
                </strong>
                <span className="block px-2 py-1 font-light">James Alien</span>
              </td>
              <td className="border border-gray-300 p-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
