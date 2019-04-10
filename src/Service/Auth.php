<?php


namespace App\Service;

use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\ValidationData;
use Symfony\Component\Cache\Simple\FilesystemCache;

class Auth
{
    private $cache;
    private $salt = "test";
    private $expire = 86400 * 30;
    private $uid;
    private $username;
    private $token;
    
    public function setCacheService(FilesystemCache $cache)
    {
        $this->cache = $cache;
    }
    
    /**
     * @param int|null $uid
     * @param string|null $username
     * @return string
     */
    public function createToken(int $uid = null, string $username = null): string
    {
        $signer = new Sha256();
        $token  = (new Builder())
            ->setAudience('http://127.0.0.1:8000')
            ->setId('sxs-4f1g23a12aa', true)
            ->setIssuedAt(time())//当前时间
            ->setIssuer($username)
            ->setExpiration(time() + $this->expire)
            ->set('uid', $uid)
            ->sign($signer, $this->salt)
            ->getToken();
        $this->cache->set($token . 'username', $username, $this->expire);
        $this->cache->set($token . 'uid', $uid, $this->expire);
        return (string)$token;
    }
    
    /**
     * @param string|null $token
     * @return bool
     */
    public function validateToken(string $token = null): bool
    {
        $username       = $this->cache->get($token . 'username');
        $uid            = $this->cache->get($token . 'uid');
        $this->uid      = $uid;
        $this->username = $username;
        $this->token    = $token;
        $token          = (new Parser())->parse((string)$token);
        $signer         = new Sha256();
        if (!$token->verify($signer, $this->salt)) {
            return false; //sign is wrong
        }
        
        $validationData = new ValidationData();
        $validationData->setIssuer($username);
        $validationData->setAudience('http://127.0.0.1:8000');
        $validationData->setId('sxs-4f1g23a12aa');
        return $token->validate($validationData);
    }
    
    /**
     * @return mixed
     */
    public function getUid()
    {
        return $this->uid;
    }
    
    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }
    
    public function loginOut()
    {
        $this->cache->set($this->token . 'username', null, $this->expire);
        $this->cache->set($this->token . 'uid', null, $this->expire);
    }
}
