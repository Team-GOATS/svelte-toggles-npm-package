import Checkbox from '../Checkbox'

export default {
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        size: {
          control: { type: 'select' },
          options: ['small', 'medium', 'large'],
        },
      },
  };

  export const Primary = {
    args: {
      primary: true,

    },
  };