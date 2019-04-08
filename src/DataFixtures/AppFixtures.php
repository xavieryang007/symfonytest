<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    /**
     * init administrator
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setCreateTime(time());
        $user->setUpdateTime(time());
        $user->setDeleteTime(0);
        $user->setPassword(md5('123456'));
        $user->setUsername('admin');
        $manager->persist($user);
        $manager->flush();
    }
}
