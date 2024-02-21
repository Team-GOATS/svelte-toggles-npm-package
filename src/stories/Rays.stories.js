import Rays from '../Rays'

export default {
    component: Rays,
    tags: ['autodocs'],
    argTypes: {
      size: {
        options: ['small', 'medium', 'large'],
        control: { type: 'radio'}
      },
      lightFill: {
        control: { type: 'color'}
      },
      darkFill: {
        control: { type: 'color'}
      },

      },
  };

  export const Primary = {
    args: {
      primary: true,


    },
  };