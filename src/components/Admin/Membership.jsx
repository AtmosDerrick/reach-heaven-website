import React from "react";

function Membership() {
  const churchMembers = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      role: "Member",
      address: "123 Church Street",
      phoneNumber: "+1 (123) 456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      email: "jane@example.com",
      role: "Member",
      address: "456 Faith Avenue",
      phoneNumber: "+1 (987) 654-3210",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 45,
      email: "michael@example.com",
      role: "Elder",
      address: "789 Grace Road",
      phoneNumber: "+1 (555) 123-4567",
    },
    {
      id: 4,
      name: "Ps. Micheal Duah",
      age: 45,
      email: "michael@example.com",
      role: "Elder",
      address: "789 Grace Road",
      phoneNumber: "+1 (555) 123-4567",
    },
    // Add more members as needed...
  ];

  return (
    <div className="w-3/4 mx-auto mt-4 p-4  ">
      <h2 className="w-full text-center text-xl font-semibold text-sky-800 uppercase underline">
        Church Members
      </h2>
      <button className="bg-sky-700 py-2 px-4 text-lg font-medium text-white hover:opacity-60 flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Add a New Member
      </button>
      <ul className="grid grid-cols-4 py-2 text-lg border-b-2">
        {churchMembers.map((member) => (
          <div>
            <li key={member.id}>
              <strong>Name:</strong> {member.name}
              <br />
              <strong>Age:</strong> {member.age}
              <br />
              <strong>Email:</strong> {member.email}
              <br />
              <strong>Role:</strong> {member.role}
              <br />
              <strong>Address:</strong> {member.address}
              <br />
              <strong>Phone:</strong> {member.phoneNumber}
            </li>
            <div className="flex gap-4 mt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <div className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Membership;
