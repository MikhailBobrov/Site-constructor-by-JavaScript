import {model} from './model'
import './styles/main.css'
import {templates} from "./templates";


const site = document.querySelector('#site');

//forEach перебирает массив
model.forEach(block => {
   const generate = templates[block.type]  //функция generate генерирует контент для блока
    console.log(generate)
    if (generate) {
        const html = generate(block)
        site.insertAdjacentHTML('beforeend', html)
    }
   //  if (block.type === 'title') {
   //      html = title(block)
   // } else if (block.type === 'text') {
   //      html = text(block)
   //  } else if (block.type === 'textColumns') {
   //      html = textColumns(block)
   //  }


})

