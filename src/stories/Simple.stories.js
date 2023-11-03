import Simple from '../Simple'

export default {
    component: Simple,
    tags: ['autodocs'],
    argTypes: {
      size: {
        options: ['small', 'medium', 'large'],
        control: { type: 'radio'}
      },
      fill: {
        control: { type: 'color'}
      }
      },
  };

  export const Primary = {
    args: {
      primary: true,


    },
  };