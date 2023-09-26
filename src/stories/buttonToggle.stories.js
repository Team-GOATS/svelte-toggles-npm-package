import buttonToggle from '../buttonToggle'


export default {
    component: buttonToggle,
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
    Component: buttonToggle,

}