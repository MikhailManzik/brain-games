![hexlet-check](https://github.com/MikhailManzik/frontend-project-lvl1/workflows/hexlet-check/badge.svg)
![linter](https://github.com/MikhailManzik/frontend-project-lvl1/workflows/linter/badge.svg)
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

Суть игры в следующем: игрокe показывается случайное число. Ему нужно ответить **yes**, если число чётное, или **no** — если нечётное.

#### Запуск игры

```
$ brain-even
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/XzU1t9ODsu6TRdqiJOlbXPJ8F.svg)](https://asciinema.org/a/XzU1t9ODsu6TRdqiJOlbXPJ8F)

## Игра: "Калькулятор"

Суть игры в следующем: игроку показывается случайное математическое выражение, например **35 + 16**, которое нужно вычислить и записать правильный ответ.

#### Запуск игры

```
$ brain-calc
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/lQrwFe3d6bUoQ9wR71APUHbWg.svg)](https://asciinema.org/a/lQrwFe3d6bUoQ9wR71APUHbWg)

## Игра: "НОД"

Суть игры в следующем: игроку показывается два случайных числа, например, **25 50**. Игрок должен вычислить и ввести наибольший общий делитель этих чисел.

#### Запуск игры

```
$ brain-gcd
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/oYcr24UYLHBFpGqDVbDawZXxo.svg)](https://asciinema.org/a/oYcr24UYLHBFpGqDVbDawZXxo)

## Игра: "Арифметическая прогрессия"

Суть игры в следующем: игроку показывается ряд чисел, образующий арифметическую прогрессию. Игрок должен отгадать число, которое находится за точками.

#### Запуск игры

```
$ brain-progression
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/WwCJNGOwPVhHDhiqWzboqCHao.svg)](https://asciinema.org/a/WwCJNGOwPVhHDhiqWzboqCHao)

## Игра: "Простое ли число?"

Суть игры в следующем: игроку показывается случайное число. Ему нужно ответить **yes**, если число простое, или **no** — если нет.

#### Запуск игры

```
$ brain-prime
```  

#### Пример игры

[![asciicast](https://asciinema.org/a/fpgk93BWGWIsaD8cstllvVbsa.svg)](https://asciinema.org/a/fpgk93BWGWIsaD8cstllvVbsa)