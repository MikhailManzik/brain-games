### Hexlet tests and linter status:
![hexlet-check](https://github.com/MikhailManzik/frontend-project-lvl1/workflows/hexlet-check/badge.svg)

[![Maintainability](https://api.codeclimate.com/v1/badges/dd78c60ae55d258dbc11/maintainability)](https://codeclimate.com/github/MikhailManzik/frontend-project-lvl1/maintainability)

# Игры разума (JavaScript)

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. 

Игры:
- Определение четного числа.
- Определение простого числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение наибольшего общего делителя.


## Установка

```
$ sudo npm link 
```

## Игра: "Проверка на четность"

Пользователь видит случайное число. Ему нужно ответить **yes**, если число чётное, или **no** — если нечётное.

#### Запуск игры

```
$ brain-even
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/XzU1t9ODsu6TRdqiJOlbXPJ8F.svg)](https://asciinema.org/a/XzU1t9ODsu6TRdqiJOlbXPJ8F)

## Игра: "Калькулятор"

Суть игры в следующем: пользователю показывается случайное математическое выражение, например **35 + 16**, которое нужно вычислить и записать правильный ответ.

#### Запуск игры

```
$ brain-calc
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/lQrwFe3d6bUoQ9wR71APUHbWg.svg)](https://asciinema.org/a/lQrwFe3d6bUoQ9wR71APUHbWg)