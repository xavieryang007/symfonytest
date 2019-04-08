<?php


namespace App\Controller\web;

use App\Service\Article;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends FOSRestController
{
    /**
     * @Route("/web/lists")
     * @Route("/")
     * @param Article $article
     * @return Response
     */
    public function lists(Article $article)
    {
        return $this->render('lists.html.twig', [
            "title" => 'lists'
        ]);
    }

    /**
     * @Route("/{url}")
     * @param $url
     * @param Article $article
     * @return Response
     */
    public function details($url, Article $article)
    {
        return $this->render('details.html.twig',
            [
                "title" => 'details',
                "url"   => $url
            ]);
    }
}