<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ContainerInterface;

class Article
{
    private $container;
    
    public function __construct(ContainerInterface $container = null)
    {
        $this->container = $container;
    }
    
    /**
     * @param array $data
     * @return bool
     */
    public function add(array $data)
    {
        $data['tags']   = implode(',', $data['tags']);
        $manager        = $this->container
            ->get('doctrine')->getManager();
        $article_result = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->findOneBy(['url' => $data['url']]);
        if ($article_result) {
            return false;
        }
        $article = new \App\Entity\Article();
        $article->setCreateTime(time());
        $article->setUpdateTime(time());
        $article->setDeleteTime(0);
        $article->setDate(time());
        $article->setTags($data['tags']);
        $article->setStatus(1);
        $article->setRate(0);
        $article->setText($data['text']);
        $article->setTitle($data['title']);
        $article->setUrl($data['url']);
        $manager->persist($article);
        $manager->flush();
        return true;
    }
    
    /**
     * @param string $url
     * @return bool
     */
    public function checkUrl(string $url)
    {
        $Repository     = $this->container
            ->get('doctrine')
            ->getRepository('App:Article');
        $article_result = $Repository
            ->findOneBy(['url' => $url]);
        if ($article_result) {
            return false;
        }
        return true;
    }
    
    /**
     * @param int $id
     * @param array $data
     */
    public function update(int $id, array $data)
    {
        $data['tags'] = implode(',', $data['tags']);
        $manager      = $this->container
            ->get('doctrine')->getManager();
        $article      = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->find($id);
        $article->setUpdateTime(time());
        $article->setDate(time());
        $article->setTags($data['tags']);
        $article->setStatus(1);
        $article->setText($data['text']);
        $article->setTitle($data['title']);
        $article->setUrl($data['url']);
        $manager->persist($article);
        $manager->flush();
    }
    
    /**
     * @param int $id
     */
    public function enable(int $id)
    {
        $manager = $this->container
            ->get('doctrine')->getManager();
        $article = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->find($id);
        $status  = $article->getStatus();
        $status  = $status == 1 ? 0 : 1;
        $article->setStatus($status);
        $manager->persist($article);
        $manager->flush();
    }
    
    /**
     * @param int $id
     */
    public function delete(int $id)
    {
        $manager = $this->container
            ->get('doctrine')->getManager();
        $article = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->find($id);
        $article->setDeleteTime(time());
        $manager->persist($article);
        $manager->flush();
    }
    
    /**
     * @param int $id
     * @return array
     */
    public function get(int $id)
    {
        $article = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->createQueryBuilder('p')
            ->where('p.id = :id and p.delete_time = :delete_time')
            ->setParameters(['id' => $id, 'delete_time' => 0])
            ->getQuery()
            ->getArrayResult();
        if ($article) {
            $infos = $article[0];
            if (isset($infos['tags'])) {
                $infos['tags'] = explode(',', $infos['tags']);
            }
            return $infos;
        }
        return [];
    }
    
    /**
     * @param array $data
     * @return array
     */
    public function lists(array $data)
    {
        $page    = $data['limit'];
        $offset  = $data['offset'];
        $page    = $page * $offset;
        $article = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->createQueryBuilder('p')
            ->where('p.delete_time = :delete_time')
            ->setParameters(['delete_time' => 0])
            ->getQuery()
            ->setMaxResults($offset)
            ->setFirstResult($page)
            ->getArrayResult();
        $qb      = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->createQueryBuilder('p')
            ->where('p.delete_time = :delete_time')
            ->setParameters(['delete_time' => 0])
            ->select('COUNT(p.id) as count');
        $tags    = $qb->getQuery()->getArrayResult();
        if ($article) {
            foreach ($article as &$one) {
                $one['date']        = date('d M Y', $one['date']);
                $one['create_time'] = date('d M Y', $one['create_time']);
                $one['update_time'] = date('d M Y', $one['update_time']);
                
                if (isset($one['tags']) && !empty($one['tags'])) {
                    $one['tags'] = explode(',', $one['tags']);
                }
            }
            $data = [
                'lists' => $article,
                'total' => $tags[0]['count'],
            ];
            return $data;
        }
        $data = [
            'lists' => [],
            'total' => $tags[0]['count'],
        ];
        return $data;
    }
    
    /**
     * @param string $url
     * @return array
     */
    public function getDataByUrl(string $url)
    {
        $article = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->createQueryBuilder('p')
            ->where('p.url = :url and p.delete_time = :delete_time')
            ->setParameters(['url' => $url, 'delete_time' => 0])
            ->getQuery()
            ->getArrayResult();
        if ($article) {
            $this->rateInc($article[0]['id']);
            $infos = $article[0];
            if (isset($infos['tags'])) {
                $infos['tags'] = explode(',', $infos['tags']);
            }
            return $infos;
        }
        return [];
    }
    
    /**
     * @param int $id
     */
    public function rateInc(int $id)
    {
        $manager = $this->container
            ->get('doctrine')->getManager();
        $article = $this->container
            ->get('doctrine')
            ->getRepository('App:Article')
            ->find($id);
        $rate    = $article->getRate();
        $rate++;
        $article->setRate($rate);
        $manager->persist($article);
        $manager->flush();
    }
}
