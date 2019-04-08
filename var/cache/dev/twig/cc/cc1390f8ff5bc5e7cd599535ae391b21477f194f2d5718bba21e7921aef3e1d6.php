<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* lists.html.twig */
class __TwigTemplate_6930f179d1d4058b36f2f3426d6cc647d410c923532bc69da4bb7b4d52e2f724 extends \Twig\Template
{
    private $source;

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "lists.html.twig"));

        // line 1
        echo "<!DOCTYPE HTML>
<html>

<head>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\"/>
    <meta charset=\"utf-8\">
    <meta name=\"description\" content=\"\">
    <meta name=\"author\" content=\"menglong\">
    <title>demo blog</title>
    <link href=\"/assets/css/style.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/responsive.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">
</head>

<body>
<header role=\"header\">
    <div class=\"container\">
        <h1>
            <a href=\"/web/waterfall\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\"
                                                            alt=\"demo blog\"/></a>
        </h1>
    </div>
</header>
<main role=\"main-inner-wrapper\" class=\"container\">
    <div class=\"row\">
        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" id=\"page\">

        </div>
        <ul class=\"pager\">
            <li class=\"previous disabled\" id=\"old\"><a  href=\"#\"><span aria-hidden=\"true\">&larr;</span> Older</a></li>
            <li class=\"next\" id=\"next\"><a  href=\"#\">Newer <span aria-hidden=\"true\">&rarr;</span></a></li>
        </ul>
    </div>
</main>


<footer role=\"footer\">
    <h1>
        <a href=\"index.html\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\"
                                                    alt=\"demo blog\"/></a>
    </h1>
    <ul role=\"social-icons\">
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-flickr\" aria-hidden=\"true\"></i></a></li>
    </ul>
    <p class=\"copy-right\">&copy; 2019 Xavier.. demo blog</p>
</footer>

<script src=\"/assets/js/jquery.min.js\" type=\"text/javascript\"></script>
<script src=\"/assets/js/bootstrap.min.js\" type=\"text/javascript\"></script>

<script src=\"/assets/js/html5shiv.js\" type=\"text/javascript\"></script>
<script src=\"/assets/js/template.js\" type=\"text/javascript\"></script>
<script id=\"listsContent\" type=\"text/html\">
    <<if lists>>
        <<each lists as value>>
        <div class=\"info\">
            <div class=\"col-xs-12 col-sm-8 col-md-9 col-lg-9 text-left\">
                <a href=\"/<<value.url>>\"><<value.title>></a>
            </div>
            <div class=\"col-xs12 col-sm-4 col-md-3 col-lg-3 text-right\">
                <<value.date>>
            </div>
            <div class=\"clearfix\"></div>
        </div>
            <</each>>

    <</if>>
</script>
<script>
    \$(function () {
        template.defaults.rules[0].test = /<%(#?)((?:==|=#|[=-])?)[ \\t]*([\\w\\W]*?)[ \\t]*(-?)%>/;
        template.defaults.rules[1].test = /<<([@#]?)[ \\t]*(\\/?)([\\w\\W]*?)[ \\t]*>>/;
        var page=0;
        var total=0;
        function get(page,callFunction){
            if (page<=0){
                page=0
                \$('#old').addClass('disabled')
                \$('#next').removeClass('disabled')
            }else{
                \$('#old').removeClass('disabled')
            }
            \$.get(\"/api/lists/\"+page+\"/2\", function (res) {
                if (res.code != 200){
                    return false;
                }
                var p   =   page+1;
                p       =   p*2;
                if (res.data.total<=p){
                    \$('#next').addClass('disabled')
                }
                if (res.data.lists.length>0) {
                    var html = template('listsContent', res.data);
                    \$('#page').html(html)
                    if (typeof callFunction==\"function\"){
                        callFunction(true);
                    }
                    return true;
                }
                if (typeof callFunction==\"function\"){
                    callFunction(false);
                }
            }, 'json');
        }
        get(0);
        \$('#old').click(function () {
            page=page-1;
            get(page,function (res) {
                if (!res){
                    page=page+1;
                }
            });
        });
        \$('#next').click(function () {
            page=page+1;
            get(page,function (res) {
                if (!res) {
                    page=page-1;
                }
            });
        });
    });
</script>
</body>

</html>";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "lists.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE HTML>
<html>

<head>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\"/>
    <meta charset=\"utf-8\">
    <meta name=\"description\" content=\"\">
    <meta name=\"author\" content=\"menglong\">
    <title>demo blog</title>
    <link href=\"/assets/css/style.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/responsive.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">
</head>

<body>
<header role=\"header\">
    <div class=\"container\">
        <h1>
            <a href=\"/web/waterfall\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\"
                                                            alt=\"demo blog\"/></a>
        </h1>
    </div>
</header>
<main role=\"main-inner-wrapper\" class=\"container\">
    <div class=\"row\">
        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" id=\"page\">

        </div>
        <ul class=\"pager\">
            <li class=\"previous disabled\" id=\"old\"><a  href=\"#\"><span aria-hidden=\"true\">&larr;</span> Older</a></li>
            <li class=\"next\" id=\"next\"><a  href=\"#\">Newer <span aria-hidden=\"true\">&rarr;</span></a></li>
        </ul>
    </div>
</main>


<footer role=\"footer\">
    <h1>
        <a href=\"index.html\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\"
                                                    alt=\"demo blog\"/></a>
    </h1>
    <ul role=\"social-icons\">
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-flickr\" aria-hidden=\"true\"></i></a></li>
    </ul>
    <p class=\"copy-right\">&copy; 2019 Xavier.. demo blog</p>
</footer>

<script src=\"/assets/js/jquery.min.js\" type=\"text/javascript\"></script>
<script src=\"/assets/js/bootstrap.min.js\" type=\"text/javascript\"></script>

<script src=\"/assets/js/html5shiv.js\" type=\"text/javascript\"></script>
<script src=\"/assets/js/template.js\" type=\"text/javascript\"></script>
<script id=\"listsContent\" type=\"text/html\">
    <<if lists>>
        <<each lists as value>>
        <div class=\"info\">
            <div class=\"col-xs-12 col-sm-8 col-md-9 col-lg-9 text-left\">
                <a href=\"/<<value.url>>\"><<value.title>></a>
            </div>
            <div class=\"col-xs12 col-sm-4 col-md-3 col-lg-3 text-right\">
                <<value.date>>
            </div>
            <div class=\"clearfix\"></div>
        </div>
            <</each>>

    <</if>>
</script>
<script>
    \$(function () {
        template.defaults.rules[0].test = /<%(#?)((?:==|=#|[=-])?)[ \\t]*([\\w\\W]*?)[ \\t]*(-?)%>/;
        template.defaults.rules[1].test = /<<([@#]?)[ \\t]*(\\/?)([\\w\\W]*?)[ \\t]*>>/;
        var page=0;
        var total=0;
        function get(page,callFunction){
            if (page<=0){
                page=0
                \$('#old').addClass('disabled')
                \$('#next').removeClass('disabled')
            }else{
                \$('#old').removeClass('disabled')
            }
            \$.get(\"/api/lists/\"+page+\"/2\", function (res) {
                if (res.code != 200){
                    return false;
                }
                var p   =   page+1;
                p       =   p*2;
                if (res.data.total<=p){
                    \$('#next').addClass('disabled')
                }
                if (res.data.lists.length>0) {
                    var html = template('listsContent', res.data);
                    \$('#page').html(html)
                    if (typeof callFunction==\"function\"){
                        callFunction(true);
                    }
                    return true;
                }
                if (typeof callFunction==\"function\"){
                    callFunction(false);
                }
            }, 'json');
        }
        get(0);
        \$('#old').click(function () {
            page=page-1;
            get(page,function (res) {
                if (!res){
                    page=page+1;
                }
            });
        });
        \$('#next').click(function () {
            page=page+1;
            get(page,function (res) {
                if (!res) {
                    page=page-1;
                }
            });
        });
    });
</script>
</body>

</html>", "lists.html.twig", "/mnt/e/code/php/symfony4_demo/templates/lists.html.twig");
    }
}
