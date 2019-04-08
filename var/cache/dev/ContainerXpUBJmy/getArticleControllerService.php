<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the public 'App\Controller\admin\ArticleController' shared autowired service.

include_once $this->targetDirs[3].'/vendor/symfony/dependency-injection/ContainerAwareInterface.php';
include_once $this->targetDirs[3].'/vendor/symfony/dependency-injection/ContainerAwareTrait.php';
include_once $this->targetDirs[3].'/vendor/symfony/framework-bundle/Controller/ControllerTrait.php';
include_once $this->targetDirs[3].'/vendor/symfony/framework-bundle/Controller/Controller.php';
include_once $this->targetDirs[3].'/vendor/friendsofsymfony/rest-bundle/Controller/ControllerTrait.php';
include_once $this->targetDirs[3].'/vendor/friendsofsymfony/rest-bundle/Controller/FOSRestController.php';
include_once $this->targetDirs[3].'/src/Lib/Controller/AdminBaseController.php';
include_once $this->targetDirs[3].'/src/Controller/admin/ArticleController.php';
include_once $this->targetDirs[3].'/src/Service/Auth.php';

return $this->services['App\Controller\admin\ArticleController'] = new \App\Controller\admin\ArticleController(($this->privates['App\Service\Auth'] ?? ($this->privates['App\Service\Auth'] = new \App\Service\Auth())));
