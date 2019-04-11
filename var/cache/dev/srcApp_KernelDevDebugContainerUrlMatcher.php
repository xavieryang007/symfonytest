<?php

use Symfony\Component\Routing\Matcher\Dumper\PhpMatcherTrait;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    use PhpMatcherTrait;

    public function __construct(RequestContext $context)
    {
        $this->context = $context;
        $this->staticRoutes = [
            '/admin/article' => [[['_route' => 'app_admin_article_add', '_controller' => 'App\\Controller\\admin\\ArticleController::add'], null, ['POST' => 0], null, true, false, null]],
            '/admin/checkurl' => [[['_route' => 'app_admin_article_checkurl', '_controller' => 'App\\Controller\\admin\\ArticleController::checkUrl'], null, ['GET' => 0], null, false, false, null]],
            '/admin/login' => [[['_route' => 'login', '_controller' => 'App\\Controller\\admin\\UserController::login'], null, ['POST' => 0], null, false, false, null]],
            '/admin/loginout' => [[['_route' => 'loginout', '_controller' => 'App\\Controller\\admin\\UserController::loginOut'], null, ['GET' => 0], null, false, false, null]],
            '/web/index' => [[['_route' => 'app_web_admin_index', '_controller' => 'App\\Controller\\web\\AdminController::index'], null, null, null, false, false, null]],
            '/' => [[['_route' => 'app_web_article_lists', '_controller' => 'App\\Controller\\web\\ArticleController::lists'], null, null, null, false, false, null]],
        ];
        $this->regexpList = [
            0 => '{^(?'
                    .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                    .'|/a(?'
                        .'|dmin/article/([^/]++)(?'
                            .'|/([^/]++)(*:80)'
                            .'|(*:87)'
                        .')'
                        .'|pi/(?'
                            .'|([^/]++)(*:109)'
                            .'|lists/([^/]++)/([^/]++)(*:140)'
                        .')'
                    .')'
                    .'|/([^/]++)(*:159)'
                    .'|/api/doc\\.json(*:181)'
                .')/?$}sDu',
        ];
        $this->dynamicRoutes = [
            35 => [[['_route' => '_twig_error_test', '_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
            80 => [[['_route' => 'app_admin_article_lists', '_controller' => 'App\\Controller\\admin\\ArticleController::lists'], ['page', 'offset'], ['GET' => 0], null, false, true, null]],
            87 => [
                [['_route' => 'app_admin_article_details', '_controller' => 'App\\Controller\\admin\\ArticleController::details'], ['id'], ['GET' => 0], null, false, true, null],
                [['_route' => 'app_admin_article_post', '_controller' => 'App\\Controller\\admin\\ArticleController::post'], ['id'], ['POST' => 0], null, false, true, null],
                [['_route' => 'app_admin_article_delete', '_controller' => 'App\\Controller\\admin\\ArticleController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
                [['_route' => 'app_admin_article_enable', '_controller' => 'App\\Controller\\admin\\ArticleController::enable'], ['id'], ['PUT' => 0], null, false, true, null],
            ],
            109 => [[['_route' => 'app_api_article_details', '_controller' => 'App\\Controller\\api\\ArticleController::details'], ['url'], ['GET' => 0], null, false, true, null]],
            140 => [[['_route' => 'app_api_article_lists', '_controller' => 'App\\Controller\\api\\ArticleController::lists'], ['page', 'offset'], ['GET' => 0], null, false, true, null]],
            159 => [[['_route' => 'app_web_article_details', '_controller' => 'App\\Controller\\web\\ArticleController::details'], ['url'], null, null, false, true, null]],
            181 => [[['_route' => 'app.swagger', '_controller' => 'nelmio_api_doc.controller.swagger'], [], ['GET' => 0], null, false, false, null]],
        ];
    }
}
