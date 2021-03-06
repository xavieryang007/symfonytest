<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the public 'fos_rest.exception.controller' shared service.

include_once $this->targetDirs[3].'/vendor/friendsofsymfony/rest-bundle/Controller/ExceptionController.php';

return $this->services['fos_rest.exception.controller'] = new \FOS\RestBundle\Controller\ExceptionController(($this->services['fos_rest.view_handler'] ?? $this->load('getFosRest_ViewHandlerService.php')), ($this->privates['fos_rest.exception.codes_map'] ?? $this->load('getFosRest_Exception_CodesMapService.php')), true);
