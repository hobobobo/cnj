Мои коментарии к заданию:
- для быстрого развертывания пректа использовался пакет https://github.com/react-boilerplate/react-boilerplate 
- Стилизировать компоненты можно было разными способами. Поскольку в условии не оговорен метод стилизации - большого внимание этому не уделял.
 Использовал styled-components. А в одном месте подключил css;
- линтер поддерживается npm run lint
- в reducer.js раньше всегда работал со стейтом через setter-ы (set, setIn)и getter-ы (get, getIn), но в данном примере использовал produce

Текст задания:
 Создать одностраничное web-приложение для вывода случайных шуток Чакка Норриса
основываясь на api chucknorris.io.
Текст шуток необходимо получать по endpoint: https://api.chucknorris.io/jokes/random
Структура страницы:
Вся страница представляет из себя респонсивную ленту. Все, что не помещается в строку,
переходит на следующую. Для реализации данного требования использовать flexbox.
Дополнительные детали по верстке:
padding: 12px 16px
font-family: Roboto
font-size: 14px
line-height: 1.25rem
width: 240px
margin: 16px
border-radius: 8px
Левый верхний элемент - это всегда кнопка "MORE!!!!". При нажатии на нее делается
запрос к api на чтение новой шутки.
Шутки могут только добавляться.
Для работы с представлением использовать react.
Для работой с асинхронностью необходимо использовать redux-saga.
Все шутки попадают в redux state.
Redux state через middleware синхронизируется с localstorage таким образом, что при
повторном обращении к приложению после перезагрузки страницы клиент видит те же
шутки, которые были до перезагрузки страницы.
Желательно использовать webpack для сборки. Приятным бонусом будет наличие npm
команды для вызова линтера
