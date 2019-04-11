Github [https://github.com/xavieryang007/symfonytest](https://github.com/xavieryang007/symfonytest)
    
    
# Install
```shell
composer install
npm install
```
edit the .env file and add db url in it
```
DATABASE_URL=mysql://user:password@127.0.0.1:3306/dbname
```

If the db is not exits which you have set in the env file.You should run this command
```shell
php bin/console   doctrine:database:create
```

Execute the command to generate the data file
```shell
php bin/console make:migration
```
The table structure is then generated into the database
```shell
php bin/console doctrine:migrations:migrate
```

Then, execute the command to populate the database with the default administrator account
``` shell
php bin/console doctrine:fixtures:load
```
If you want to debug the project ,you should run this command to build the frontend of manager side.
``` shell
npm run build
```

Finally,start the server
``` shell
php bin/console server:run
```
The default account is "admin" and password is "123456"

# Introduce

1. This is a simple blog for learning symfony4。
    This blog has simple user side and manager side .
    The Url of user side：http://127.0.0.1:8000/
    The default home page is a list page, each page has two information, the list only shows the title and release date.    
    
    ![](_v_images/20190408094014328_3216.png)    
    
    Click on the title to get to the details page
    ![](_v_images/20190408094031004_28098.png)    
    
    The Url of manager Side：http://127.0.0.1:8000/web/index
    If you have not logged in before, the login page is displayed, and if you have logged in before, you are automatically logged in.    
    
    ![](_v_images/20190408094049511_1933.png)    
    
    No need to fill in the account password, the default account and password have been filled in the input box, click login to login the manager side    
    
    ![](_v_images/20190408094102840_15286.png)
       
       
    ![](_v_images/20190408094110345_11667.png)
        
        

2. **SKILLS**    
    **User side**：    
        Bootsrap    
        JQuery    
        Art-tamplate    
        Symfony framework 4.x    
        Twig    
        PHP 7.x    
        MYSQL    
    **Manager side**：    
        Element-ui    
        VUE    
        VUE-ROUTER    
        Axios    
        Symfony framework 4.x    
        Twig    
        PHP 7.x    
        MYSQL    


