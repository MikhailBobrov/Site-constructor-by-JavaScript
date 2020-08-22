export const model = [
    {type: 'title', value: 'Test title', options: {
        tag: 'h2',
        styles: 'background: darkred; color: #fff;text-align: center; padding: 10px'
        }},
    {type: 'text', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', options: {
        styles: 'background: darkblue; color: yellow; text-align: center; padding: 10px;'
        }},
    {type: 'textColumns', value: [
        '1 text',
        '2 text',
        '3 text',
        ], options: {
        styles: 'padding: 1rem; background: grey; color: #fff;text-align: center'
        }
    },
    {type: 'picture'}

]