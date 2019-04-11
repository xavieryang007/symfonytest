<?php


namespace App\Service;


use App\Repository\UserRepository;
use Symfony\Component\DependencyInjection\ContainerInterface;

class User
{
    /**
     * @param $username
     * @param $password
     * @param UserRepository $userRepository
     * @return \App\Entity\User|bool|null
     */
    public function checkLogin($username, $password, UserRepository $userRepository)
    {
        $password = md5($password);
        $user     = $userRepository
            ->findOneBy(["username" => $username]);
        if (isset($user) && $user->getPassword() == $password) {
            return $user;
        }
        return false;
    }
}
