import Basic from '../Basic'

export default {
    component: Basic,
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