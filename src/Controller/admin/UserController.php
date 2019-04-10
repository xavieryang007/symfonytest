<?php
/**
 * Created by PhpStorm.
 * User: xavier
 * Date: 2019/4/2
 * Time: 下午9:28
 * Email:499873958@qq.com
 */

namespace App\Controller\admin;

use App\Lib\Controller\AdminBaseController;
use App\Service\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\Controller\Annotations as Rest;

/**
 * Class UserController
 * @package App\Controller\admin
 */
class UserController extends AdminBaseController
{
    /**
     * Set a path that does not require a login
     * @var array
     */
    protected $noNeedLogin = ['/admin/login'];
    
    
    /**
     * @Rest\Post("/admin/login", name="login")
     */
    public function login(Request $request, User $user)
    {
        $username = $request->request->get('username', $request->query->get('username'));
        $password = $request->request->get('password', $request->query->get('password'));
        $user     = $user->checklogin($username, $password);
        if ($user !== false) {
            $token = $this->auth->createToken($user->getId(), $user->getUsername());
            $data  = [
                'token' => $token
            ];
            return $this->success("Login Success", $data);
        }
        return $this->error("retry");
    }
    
    /**
     * @Rest\Get("/admin/loginout", name="loginout")
     */
    public function loginOut()
    {
        $this->auth->loginOut();
        return $this->success("loginOut Success", [], 200);
    }
}
