<?php

use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Psr\Log\LoggerInterface;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlGenerator extends Symfony\Component\Routing\Generator\UrlGenerator
{
    private static $declaredRoutes;
    private $defaultLocale;

    public function __construct(RequestContext $context, LoggerInterface $logger = null, string $defaultLocale = null)
    {
        $this->context = $context;
        $this->logger = $logger;
        $this->defaultLocale = $defaultLocale;
        if (null === self::$declaredRoutes) {
            self::$declaredRoutes = [
        '_twig_error_test' => [['code', '_format'], ['_controller' => 'twig.controller.preview_error::previewErrorPageAction', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], []],
        'app_admin_article_lists' => [['page', 'offset'], ['_controller' => 'App\\Controller\\admin\\ArticleController::lists'], [], [['variable', '/', '[^/]++', 'offset', true], ['variable', '/', '[^/]++', 'page', true], ['text', '/admin/article']], [], []],
        'app_admin_article_details' => [['id'], ['_controller' => 'App\\Controller\\admin\\ArticleController::details'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/admin/article']], [], []],
        'app_admin_article_add' => [[], ['_controller' => 'App\\Controller\\admin\\ArticleController::add'], [], [['text', '/admin/article/']], [], []],
        'app_admin_article_post' => [['id'], ['_controller' => 'App\\Controller\\admin\\ArticleController::post'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/admin/article']], [], []],
        'app_admin_article_delete' => [['id'], ['_controller' => 'App\\Controller\\admin\\ArticleController::delete'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/admin/article']], [], []],
        'app_admin_article_enable' => [['id'], ['_controller' => 'App\\Controller\\admin\\ArticleController::enable'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/admin/article']], [], []],
        'app_admin_tags_lists' => [['ids'], ['_controller' => 'App\\Controller\\admin\\TagsController::lists'], [], [['variable', '/', '[^/]++', 'ids', true], ['text', '/admin/tags']], [], []],
        'app_admin_tags_details' => [['name'], ['_controller' => 'App\\Controller\\admin\\TagsController::details'], [], [['variable', '/', '[^/]++', 'name', true], ['text', '/admin/tags']], [], []],
        'login' => [[], ['_controller' => 'App\\Controller\\admin\\UserController::login'], [], [['text', '/admin/login']], [], []],
        'loginout' => [[], ['_controller' => 'App\\Controller\\admin\\UserController::loginOut'], [], [['text', '/admin/loginout']], [], []],
        'app_api_article_details' => [['url'], ['_controller' => 'App\\Controller\\api\\ArticleController::details'], [], [['variable', '/', '[^/]++', 'url', true]], [], []],
        'app_api_article_lists' => [['page', 'offset'], ['_controller' => 'App\\Controller\\api\\ArticleController::lists'], [], [['variable', '/', '[^/]++', 'offset', true], ['variable', '/', '[^/]++', 'page', true], ['text', '/lists']], [], []],
        'app_web_article_test' => [[], ['_controller' => 'App\\Controller\\web\\ArticleController::test'], [], [['text', '/web/test']], [], []],
        'app_web_article_lists1' => [['page', 'offset'], ['_controller' => 'App\\Controller\\web\\ArticleController::lists1'], [], [['variable', '/', '[^/]++', 'offset', true], ['variable', '/', '[^/]++', 'page', true], ['text', '/web/lists1']], [], []],
        'app_web_article_lists2' => [['page', 'offset'], ['_controller' => 'App\\Controller\\web\\ArticleController::lists2'], [], [['variable', '/', '[^/]++', 'offset', true], ['variable', '/', '[^/]++', 'page', true], ['text', '/web/lists2']], [], []],
        'app_web_article_details' => [['url'], ['_controller' => 'App\\Controller\\web\\ArticleController::details'], [], [['variable', '/', '[^/]++', 'url', true], ['text', '/web/details']], [], []],
        'app.swagger' => [[], ['_controller' => 'nelmio_api_doc.controller.swagger'], [], [['text', '/api/doc.json']], [], []],
    ];
        }
    }

    public function generate($name, $parameters = [], $referenceType = self::ABSOLUTE_PATH)
    {
        $locale = $parameters['_locale']
            ?? $this->context->getParameter('_locale')
            ?: $this->defaultLocale;

        if (null !== $locale && null !== $name) {
            do {
                if ((self::$declaredRoutes[$name.'.'.$locale][1]['_canonical_route'] ?? null) === $name) {
                    unset($parameters['_locale']);
                    $name .= '.'.$locale;
                    break;
                }
            } while (false !== $locale = strstr($locale, '_', true));
        }

        if (!isset(self::$declaredRoutes[$name])) {
            throw new RouteNotFoundException(sprintf('Unable to generate a URL for the named route "%s" as such route does not exist.', $name));
        }

        list($variables, $defaults, $requirements, $tokens, $hostTokens, $requiredSchemes) = self::$declaredRoutes[$name];

        return $this->doGenerate($variables, $defaults, $requirements, $tokens, $parameters, $name, $referenceType, $hostTokens, $requiredSchemes);
    }
}
