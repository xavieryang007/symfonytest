<?php


namespace App\Controller\web;

use App\Service\Article;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends FOSRestController
{
    /**
     * @Route("/")
     * @return Response
     */
    public function lists()
    {
        return $this->render('lists.html.twig', [
            "title" => 'lists'
        ]);
    }
    
    /**
     * @Route("/{url}")
     * @param $url
     * @return Response
     */
    public function details($url)
    {
        return $this->render('details.html.twig', [
            "title" => 'details',
            "url"   => $url
        ]);
    }
}
