import React from 'react';
import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post,
};

const Template = () => {
  return <Post   
      content="This is a chitter challenge!"
      date="20/12/2021"
      />
}

export const Default = Template.bind({});
