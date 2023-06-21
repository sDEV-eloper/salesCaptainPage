import React from 'react';
import { team } from './TeamCards/constants';
import TeamCards from './TeamCards/TeamCards';

const Team = () => {
  return (
    <section className="m-4 md:m-8 lg:m-12">
      <div className="flex flex-wrap justify-center">
        {team.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <TeamCards
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
              percentage={member.percentage}
              percentageDescription={member.percentage_description}
              productUsed={member.product_used}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
