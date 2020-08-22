import image from './essets/image.png'


const text = `Я очень хочу постичь JS`

export const model = [
    {type: 'title', value: 'Конструктор сайтов на чистом JavaScript', options: {
        tag: 'h2',
        styles: 'background: linear-gradient(to right, #ff0099, #493240); color: #fff;text-align: center; padding: 1.5rem'
        }},

    {type: 'image', value: image, options: {
        styles: 'padding: 2rem 0; display: flex; justify-content: center',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
        }},

    {type: 'textColumns', value: [
            'Приложение на чистом JavaScript, без использования библиотек',
            'Как работают принципы SOLID и ООП в JavaScript',
            'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
        ], options: {
            styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00a0); text-align: center; font-weight: bold;'
        }
    },


    {type: 'text', value: text, options: {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c); text-align: center; padding: 1rem; font-weight: bold'
        }
    },


]