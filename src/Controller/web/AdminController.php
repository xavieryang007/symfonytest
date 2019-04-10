<?php


namespace App\Controller\web;


use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends FOSRestController
{
    /**
     * @Route("/web/index")
     * @return Response
     */
    public function index()
    {
        return $this->render('index.html.twig', [
            "title" => 'admin'
        ]);
    }
}
