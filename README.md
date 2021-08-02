# Запуск миниапа "типа" как в ODR

1) Соберите миниап (обычно это `npm run build`) или скачайте архив из настроек миниапа
2) Для запуска понадобиться полный путь до index.html (например `/Users/i.nedzvetskiy/Downloads/VeUIXxX7W38/index.html`)
3) Также для запуска понадобиться ссылка на приложения или его id
4) При первом запуске приложение запросит access_token, его можно создать на сайте https://vkhost.github.io/, нужно приложение VK Me

```bash
git clone git@github.com:stels-cs/odr-test-tools.git
cd odr-test-tools
yarn install
node index.js vk.com/health /Users/i.nedzvetskiy/Downloads/VeUIXxX7W38/index.html
```

После запуска приложение может показывать в консоли логи External js download... это значит что миниап скачивает js не из ODR архива

# Аргументы для запуска
node index.js `<ссылка на миниап или его id>` `<полный путь до index.html>`
