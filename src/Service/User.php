<?php


namespace App\Service;


use Symfony\Component\DependencyInjection\ContainerInterface;

class User
{
    private $container;
    
    public function __construct(ContainerInterface $container = null)
    {
        $this->container = $container;
    }
    
    /**
     * check username and password with db
     * @param $username
     * @param $password
     * @return bool
     */
    public function checkLogin($username, $password)
    {
        $password = md5($password);
        $user     = $this->container
            ->get('doctrine')
            ->getRepository('App:User')
            ->findOneBy(["username" => $username]);
        if (isset($user) && $user->getPassword() == $password) {
            return $user;
        }
        return false;
    }
}
