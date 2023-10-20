import Button from '../Button'


export default {
    component: Button,
    tags: ['autodocs'],
    args: {
        label: "button"
    },
    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['small', 'medium', 'large']
        },
        theme: {
            control: {type: 'select'},
            options: ['red', 'pink', 'green']
        }
    }
};
export const Primary = {
    Component: Button,

}