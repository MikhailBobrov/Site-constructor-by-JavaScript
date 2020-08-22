//функции
import {col, row} from './utils'


function title (block) {
    console.log(block.options.tag)

    //ecmascript 6
    const {tag,styles} = block.options
    // const tag = block.options.tag
    // const styles = block.options.styles

    return row (col(`
        <${tag}>${block.value}<${tag}>
    `), styles)
        // `<div class="row">
        //     <div class="col-sm">
        //         <h1>Test title</h1>
        //     </div>
        // </div>`
}

//функция col в функции row
function text (block) {
    return row (col(`
        <p>${block.value}</p>
    `), block.options.styles)
}

//map возвращает новый массив - там 3 (может быть 10) подблока поэтому нам надо перебрать
function textColumns (block) {
    const html = block.value.map(item => col(item))

    return row (html.join(''), block.options.styles)

    //join - метод убирает запятые у массива - так как map возвращает новый массив
}

// export const templates = {
//     title: 'title',
//     text: 'text',
//     textColumns: 'textColumns'
// }

//new sintaksis
export const templates = {title, text, textColumns}