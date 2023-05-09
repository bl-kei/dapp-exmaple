import React from 'react';

function MemberList(props) {
  const members = [
    {
      id: 'a',
      name: 'John',
    },
    {
      id: 'b',
      name: 'Will',
    },
    {
      id: 'c',
      name: 'Mike',
    },
  ];

  return (
    <ul>
      {members.map((member) => {
        return <li key={member.id}>{member.name}</li>;
      })}
    </ul>
  );
}

export default MemberList;
