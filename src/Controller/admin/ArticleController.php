<?php


namespace App\Controller\admin;


use App\Lib\Controller\AdminBaseController;
use App\Service\Article;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class Article
 * @package App\Controller\admin
 */
class ArticleController extends AdminBaseController
{
    protected $noNeedLogin = [];
    
    /**
     * @Rest\Get("/admin/article/{page}/{offset}")
     * @param $page
     * @param $offset
     * @param Article $article
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function lists($page, $offset, Article $article, Request $request)
    {
        $data['limit']  = $page;
        $data['offset'] = $offset;
        $lists          = $article->lists($data);
        return $this->success('get success', $lists);
    }
    
    /**
     * @Rest\Get("/admin/article/{id}")
     * @param $id
     * @param Article $article
     * @return \Symfony\Component\HttpFoundation\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function details($id, Article $article)
    {
        $data = $article->get($id);
        return $this->success('get success', $data);
    }
    
    /**
     * @Rest\Post("/admin/article/")
     * @param Article $article
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function add(Article $article, Request $request)
    {
        $data['tags']  = $request->request->get('tags');
        $data['text']  = $request->request->get('text');
        $data['title'] = $request->request->get('title');
        $data['url']   = $request->request->get('url');
        $ret           = $article->add($data);
        if ($ret === false) {
            return $this->success('add faild');
        }
        return $this->success('add success');
    }
    
    /**
     * @Rest\Post("/admin/article/{id}")
     * @param $id
     * @param Article $article
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function post($id, Article $article, Request $request)
    {
        $data['tags']  = $request->request->get('tags');
        $data['text']  = $request->request->get('text');
        $data['title'] = $request->request->get('title');
        $data['url']   = $request->request->get('url');
        $article->update($id, $data);
        return $this->success('update success');
    }
    
    /**
     * @Rest\Delete("/admin/article/{id}")
     * @param $id
     * @param Article $article
     * @return \Symfony\Component\HttpFoundation\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function delete($id, Article $article)
    {
        $article->delete($id);
        return $this->success('delete success');
    }
    
    /**
     * @Rest\Get("/admin/checkurl")
     * @param Article $article
     * @return \Symfony\Component\HttpFoundation\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function checkUrl(Request $request, Article $article)
    {
        $url   = $request->query->get('url');
        $check = $article->checkUrl($url);
        if ($check) {
            return $this->success('no');
        }
        return $this->error('has');
    }
    
    /**
     * @Rest\Put("/admin/article/{id}")
     * @param $id
     * @param Article $article
     * @return JsonResponse|Response
     */
    public function enable($id, Article $article)
    {
        $article->enable($id);
        return $this->success('set success');
    }
}
