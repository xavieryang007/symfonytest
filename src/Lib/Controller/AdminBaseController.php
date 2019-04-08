<?php

/**
 * Created by PhpStorm.
 * User: xavier
 * Date: 2019/4/2
 * Time: 下午7:56
 * Email:499873958@qq.com
 */

namespace App\Lib\Controller;

use App\Exception\LoginException;
use App\Lib\Auth\Token;
use App\Service\Auth;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Cache\Simple\FilesystemCache;
use FOS\RestBundle\Controller\FOSRestController;

class AdminBaseController extends FOSRestController
{
    protected $uid = 0;
    protected $auth;
    protected $noNeedLogin = [];
    protected $request = [];

    /**
     * init Controller and check login
     * AdminBaseController constructor.
     * @param Auth $auth
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
        $this->auth->setCacheService(new FilesystemCache());

        $request   = Request::createFromGlobals();
        $token     = $request->headers->get('token', $request->query->get('token', $request->cookies->get('token')));
        $mustLogin = $this->checkNoLogin($request);
        if (empty($token) && $mustLogin === false) {
            //You should login fist
            throw  new LoginException("You should login fist");
        }

        if (!empty($token)) {
            $auth_result = $this->auth->validateToken($token);
            if (!$auth_result) {
                //You should login fist
                throw  new LoginException("You should login fist");
            }
        }
    }

    /**
     * check the request path
     * @param Request $request
     * @return bool
     */
    protected function checkNoLogin(Request $request): bool
    {
        $method = $request->getRequestUri();
        if (is_array($this->noNeedLogin) && in_array("*", $this->noNeedLogin)) {
            return true;
        }
        if (is_array($this->noNeedLogin)) {
            foreach ($this->noNeedLogin as $one) {
                if (strpos($method,$one)!==false||strpos($one,$method)!==false){
                    return true;
                }
            }
        }
        if (is_string($this->noNeedLogin) && $this->noNeedLogin == "*") {
            return true;
        }
        return false;
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