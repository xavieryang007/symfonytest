<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'webpack_encore.entrypoint_lookup.cache_warmer' shared service.

include_once $this->targetDirs[3].'/vendor/symfony/framework-bundle/CacheWarmer/AbstractPhpFileCacheWarmer.php';
include_once $this->targetDirs[3].'/vendor/symfony/webpack-encore-bundle/src/CacheWarmer/EntrypointCacheWarmer.php';

return $this->privates['webpack_encore.entrypoint_lookup.cache_warmer'] = new \Symfony\WebpackEncoreBundle\CacheWarmer\EntrypointCacheWarmer(['_default' => ($this->targetDirs[3].'/public/build/entrypoints.json')], ($this->targetDirs[0].'/webpack_encore.cache.php'), ($this->privates['cache.webpack_encore'] ?? $this->load('getCache_WebpackEncoreService.php')));
