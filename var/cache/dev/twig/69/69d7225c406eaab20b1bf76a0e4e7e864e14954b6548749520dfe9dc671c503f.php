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

/* details.html.twig */
class __TwigTemplate_e2730380083d4e2d4933e84025bdce0fd821a0d20ccb1875279e30fee5363961 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "details.html.twig"));

        // line 1
        echo "<!DOCTYPE HTML>
<html>

<head>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\"/>
    <meta charset=\"utf-8\">
    <meta name=\"description\" content=\"\">
    <meta name=\"author\" content=\"menglong\">
    <title>";
        // line 9
        echo twig_escape_filter($this->env, (isset($context["title"]) || array_key_exists("title", $context) ? $context["title"] : (function () { throw new RuntimeError('Variable "title" does not exist.', 9, $this->source); })()), "html", null, true);
        echo "</title>
    <link href=\"/assets/css/style.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/responsive.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">
</head>

<body>
<header role=\"header\">
    <div class=\"container\">
        <h1>
            <a href=\"index.html\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\"
                                                        alt=\"demo blog\"/></a>
        </h1>
    </div>
</header>
<main role=\"main-inner-wrapper\" class=\"container\">
    <div class=\"blog-details\">
        <article class=\"post-details\" id=\"post-details\">
            <header role=\"bog-header\" class=\"bog-header\">
                <h3 id=\"time\"></h3>
                <h2 id=\"title\"></h2>
                <h4 id=\"tags\"></h4>
                <h6 id=\"rate\"></h6>

            </header>
            <figure>
                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-details-image.jpg\" alt=\"\"
                     class=\"img-responsive\"/>
            </figure>
            <div class=\"enter-content\" id=\"content\">

            </div>
        </article>
        <a href=\"javascript:history.go(-1)\" class=\"menu-button\">
            <i class=\"fa fa-mail-reply fa-5x\" aria-hidden=\"true\"></i>
        </a>
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
<script>
    \$(function () {
        \$.get(\"/api/";
        // line 70
        echo twig_escape_filter($this->env, (isset($context["url"]) || array_key_exists("url", $context) ? $context["url"] : (function () { throw new RuntimeError('Variable "url" does not exist.', 70, $this->source); })()), "html", null, true);
        echo "\", function (res) {
            if (res.code == 200) {
                \$('#content').html(res.data.text);
                \$('#title').html(res.data.title+\"<span class=\\\"badge\\\">\"+res.data.rate+\"</span>\");
                \$('#time').html(\"<span>\"+res.data.day+\"</span>  \"+res.data.time);
                if (res.data.tags.length>0){
                    var html=\"\";
                    for(var i =0;i <res.data.tags.length;i++){
                        html+=\"<span class=\\\"label label-success\\\">\"+res.data.tags[i]+\"</span>\";
                    }
                    \$('#tags').html(html);
                }
                return true;
            }
            alert(\"sorry! the url is error\");
        }, 'json');
    });
</script>
</body>

</html>";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "details.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 70,  48 => 9,  38 => 1,);
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
    <title>{{ title }}</title>
    <link href=\"/assets/css/style.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/responsive.css\" rel=\"stylesheet\" type=\"text/css\">
    <link href=\"/assets/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">
</head>

<body>
<header role=\"header\">
    <div class=\"container\">
        <h1>
            <a href=\"index.html\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\"
                                                        alt=\"demo blog\"/></a>
        </h1>
    </div>
</header>
<main role=\"main-inner-wrapper\" class=\"container\">
    <div class=\"blog-details\">
        <article class=\"post-details\" id=\"post-details\">
            <header role=\"bog-header\" class=\"bog-header\">
                <h3 id=\"time\"></h3>
                <h2 id=\"title\"></h2>
                <h4 id=\"tags\"></h4>
                <h6 id=\"rate\"></h6>

            </header>
            <figure>
                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-details-image.jpg\" alt=\"\"
                     class=\"img-responsive\"/>
            </figure>
            <div class=\"enter-content\" id=\"content\">

            </div>
        </article>
        <a href=\"javascript:history.go(-1)\" class=\"menu-button\">
            <i class=\"fa fa-mail-reply fa-5x\" aria-hidden=\"true\"></i>
        </a>
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
<script>
    \$(function () {
        \$.get(\"/api/{{ url }}\", function (res) {
            if (res.code == 200) {
                \$('#content').html(res.data.text);
                \$('#title').html(res.data.title+\"<span class=\\\"badge\\\">\"+res.data.rate+\"</span>\");
                \$('#time').html(\"<span>\"+res.data.day+\"</span>  \"+res.data.time);
                if (res.data.tags.length>0){
                    var html=\"\";
                    for(var i =0;i <res.data.tags.length;i++){
                        html+=\"<span class=\\\"label label-success\\\">\"+res.data.tags[i]+\"</span>\";
                    }
                    \$('#tags').html(html);
                }
                return true;
            }
            alert(\"sorry! the url is error\");
        }, 'json');
    });
</script>
</body>

</html>", "details.html.twig", "/mnt/e/code/php/symfony4_demo/templates/details.html.twig");
    }
}
