import Simple from '../Simple'

export default {
    component: Simple,
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