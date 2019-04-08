<?php


namespace App\Controller\api;


use App\Service\Article;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends FOSRestController
{
    /**
     * @Rest\Get("/api/{url}")
     * @param $url
     * @param Article $article
     * @return JsonResponse|Response
     */
    public function details($url, Article $article)
    {
        $data = $article->getDataByUrl($url);
        if (count($data) == 0) {
            return $this->error('error', $data);
        }
        $data['day']  = date('d', $data['date']);
        $data['time'] = date('M Y', $data['date']);
        return $this->success('success', $data);
    }

    /**
     * @Rest\Get("/api/lists/{page}/{offset}")
     * @param $page
     * @param $offset
     * @param Article $article
     * @return \Symfony\Component\HttpFoundation\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function lists($page, $offset, Article $article)
    {
        $data['limit']  = $page;
        $data['offset'] = $offset;
        $lists          = $article->lists($data);
        return $this->success('get success', $lists);
    }


    /**
     * return json data with success
     * @param string $msg
     * @param array $data
     * @param int $code
     * @return Response
     */
    protected function success(string $msg = "", $data = [], int $code = 200): JsonResponse
    {
        $return = [
            'messages' => $msg,
            'data'     => $data,
            'code'     => $code,
        ];
        return $this->json($return);
    }

    /**
     * return json data when the system is error
     * @param string $msg
     * @param array $data
     * @param int $code
     * @return Response
     */
    protected function error(string $msg = "", $data = [], int $code = 400): JsonResponse
    {
        $return = [
            'messages' => $msg,
            'data'     => $data,
            'code'     => $code,
        ];
        return $this->json($return);
    }
}