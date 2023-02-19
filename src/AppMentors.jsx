import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: 'song',
    title: 'developer',
    mentors: [
      {
        name: 'bob',
        title: 'senior',
      },
      {
        name: 'james',
        title: 'senior',
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors &&
          person.mentors.map((mentor, index) => (
            <li key={index}>
              {mentor.name} ({mentor.title})
            </li>
          ))}
      </ul>
      <button
        onClick={() => {
          const oldName = prompt(`누구의 이름을 바꾸고 싶은건가요?`);
          const name = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

          // 내 방법
          // setPerson(person => {
          //   const mentors = person.mentors.map(mentor =>
          //     mentor.name === oldName ? { ...mentor, name } : { ...mentor }
          //   );
          //   return { ...person, mentors };
          // });

          setPerson(person => ({
            ...person,
            mentors: person.mentors.map(mentor => {
              if (mentor.name === oldName) {
                return { ...mentor, name };
              }
              return { ...mentor };
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt('멘토의 이름은?');
          const title = prompt('멘토의 직함은?');
          setPerson(person => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
          }));
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const name = prompt('삭제할 멘토의 이름은?');
          setPerson(person => ({
            ...person,
            mentors: person.mentors.filter(mentor => mentor.name !== name),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  );
}
