import React from 'react';
import { team } from './TeamCards/constants';
import TeamCards from './TeamCards/TeamCards';

const Team = () => {
  return (
    <section className="m-20">
      <div className="flex justify-center">
      {team.map((member, index) => (
        <TeamCards
          key={index}
          name={member.name}
          role={member.role}
          description={member.description}
          image={member.image}
          percentage={member.percentage}
          percentageDescription={member.percentage_description}
          productUsed={member.product_used}
        />
      ))}
    </div>
    </section>
  );
};

export default Team;
