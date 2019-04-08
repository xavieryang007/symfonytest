<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the public 'fos_rest.exception.twig_controller' shared service.

include_once $this->targetDirs[3].'/vendor/friendsofsymfony/rest-bundle/Controller/ExceptionController.php';
include_once $this->targetDirs[3].'/vendor/friendsofsymfony/rest-bundle/Controller/TemplatingExceptionController.php';
include_once $this->targetDirs[3].'/vendor/friendsofsymfony/rest-bundle/Controller/TwigExceptionController.php';

return $this->services['fos_rest.exception.twig_controller'] = new \FOS\RestBundle\Controller\TwigExceptionController(($this->services['fos_rest.view_handler'] ?? $this->load('getFosRest_ViewHandlerService.php')), ($this->privates['fos_rest.exception.codes_map'] ?? $this->load('getFosRest_Exception_CodesMapService.php')), true, ($this->services['templating'] ?? $this->load('getTemplatingService.php')));
