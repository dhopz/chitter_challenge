import React from 'react';
import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = () => {
  return <Bio
      headshot="https://pbs.twimg.com/profile_images/464741577923915776/MqkSoHaF_400x400.jpeg"
      name="Person Name"
      tagline="Learning how to make things!"
      role="Student@Makers"
    />
}

export const Default = Template.bind({});
