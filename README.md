[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

> :red_circle: **Об ошибке в тестах**
> 
> В истории коммитов можно найти [**коммит**](https://github.com/naborbukovok/react-mesto-api-full-gha/commit/8cccda10b958816c12088d9dce272aeb57095124), для которого проходят все тесты. [**Разница**](https://github.com/naborbukovok/react-mesto-api-full-gha/compare/8cccda1..84459a8) с текущим коммитом только в настройках ```sameSite``` и ```secure``` метода ```res.cookie()```. Настройку ```sameSite``` со значением ```'None'``` необходимо задать для межсайтового использования. Настройку ```sameSite``` нельзя использовать без настройки ```secure```.

## Mesto: фото-лента [frontend + backend]

### :sparkles: О чем проект
**Этот проект** - одна из домашних работ по курсу ["Веб-разработчик"](https://practicum.yandex.ru/web/) от сервиса Яндекс Практикум. Проект объединяет написанные ранее [**фронтенд**](https://github.com/naborbukovok/react-mesto-auth) и [**бэкенд**](https://github.com/naborbukovok/express-mesto-gha) части веб-сервиса **Mesto** - соцсети для обмена фотографиями интересных мест. После регистрации/авторизации пользователи социальной сети получают возможность управлять данными своего профиля, публиковать и оценивать посты с фотографиями.

### :sparkles: Ссылки
> :globe_with_meridians: **[IP]** 158.160.73.73
> 
> :globe_with_meridians: **[frontend]** <https://mesto.naborbukovok.nomoredomainsrocks.ru>
> 
> :globe_with_meridians: **[backend]** <https://api.mesto.naborbukovok.nomoredomainsrocks.ru>
> 
> :globe_with_meridians: **[repo]** <https://github.com/naborbukovok/react-mesto-api-full-gha>

### :sparkles: Стек технологий
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/mongoose-880000?style=flat&logo=mongoose&logoColor=white"/> <img src="https://img.shields.io/badge/nginx-009639?style=flat&logo=nginx&logoColor=white"/> <img src="https://img.shields.io/badge/pm2-2B037A?style=flat&logo=pm2&logoColor=white"/>

Приложение развернуто на платформе Яндекс.Облако, подключены SSL-сертификаты.
