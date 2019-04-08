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

/* waterfall.html.twig */
class __TwigTemplate_33f8dd831b1b6d7e0b22fc8da80e08742c447b543f04d570ee737b47f3171050 extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "waterfall.html.twig"));

        // line 1
        echo "<!DOCTYPE HTML>
<html>

<head>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" />
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
            <a href=\"/web/lists\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\"
                                                        alt=\"demo blog\" /></a>
        </h1>
        <a href=\"/web/lists\" class=\"pull-right switcher\">
            <i class=\"fa fa-toggle-on fa-4x\" aria-hidden=\"true\"></i>
        </a>
    </div>
</header>
<main role=\"main-inner-wrapper\" class=\"container\">
    <div class=\"row\">
        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 \">
            <article role=\"pge-title-content\" class=\"blog-header\">
                <header>
                    <h2><span>News</span> Updates from studio</h2>
                </header>
                <p>Get all information about our studio from latest news posts & updates page.</p>
            </article>
            <ul class=\"grid-lod effect-2\" id=\"grid\">
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-2.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-4.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-2.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-4.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-2.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
            </ul>
        </div>
        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">
            <ul class=\"grid-lod effect-2\" id=\"grid\">

            </ul>
        </div>
        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">
            <ul class=\"pager\">
                <li class=\"previous disabled\" id=\"old\"><a href=\"#\"><span aria-hidden=\"true\">&larr;</span> Older</a></li>
                <li class=\"next\" id=\"next\"><a href=\"#\">Newer <span aria-hidden=\"true\">&rarr;</span></a></li>
            </ul>
        </div>
    </div>
</main>


<footer role=\"footer\">
    <h1>
        <a href=\"index.html\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\" alt=\"demo blog\" /></a>
    </h1>
    <ul role=\"social-icons\">
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-flickr\" aria-hidden=\"true\"></i></a></li>
    </ul>
    <p class=\"copy-right\">&copy; 2019 menglong.. demo blog</p>
</footer>

<script src=\"/assets/js/jquery.min.js\" type=\"text/javascript\"></script>
<script src=\"/assets/js/bootstrap.min.js\" type=\"text/javascript\"></script>

<script src=\"/assets/js/html5shiv.js\" type=\"text/javascript\"></script>
<script src=\"/assets/js/template.js\" type=\"text/javascript\"></script>
<script id=\"listsContent\" type=\"text/html\">
    <<if data>>
        <<each data as value>>
            <li>
                <section class=\"blog-content\">
                    <a href=\"detail.html\">
                        <figure>
                            <div class=\"post-date\">
                                <span>24</span> July 2016
                            </div>
                            <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-3.jpg\"
                                 alt=\"\" class=\"img-responsive\" />
                        </figure>
                    </a>
                    <article>
                        <<value.title>>
                    </article>
                </section>
            </li>
            <</each>>
        <</if>>
</script>
<script>
    \$(function () {
        template.defaults.rules[0].test = /<%(#?)((?:==|=#|[=-])?)[ \\t]*([\\w\\W]*?)[ \\t]*(-?)%>/;
        template.defaults.rules[1].test = /<<([@#]?)[ \\t]*(\\/?)([\\w\\W]*?)[ \\t]*>>/;
        var page=0;
        function get(page,callFunction){
            \$.get(\"/lists/\"+page+\"/2\", function (res) {
                if (res.code == 200) {
                    var html = template('listsContent', res);
                    \$('#grid').html(html)
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
            if (page<=0){
                \$('#old').addClass('disable');
                page=0;
            }else{
                \$('#old').removeClass('disable');
                page=page-1;
                get(page,function (ret) {
                    if (ret){
                        page=page-1;
                    }
                });
            }
        });
        \$('#next').click(function () {
            if (page<=0){
                \$('#next').addClass('disable');
            }else{
                \$('#next').removeClass('disable');
            }
            get(page,function (ret) {
                if (ret){
                    page=page+1;
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
        return "waterfall.html.twig";
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
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" />
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
            <a href=\"/web/lists\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\"
                                                        alt=\"demo blog\" /></a>
        </h1>
        <a href=\"/web/lists\" class=\"pull-right switcher\">
            <i class=\"fa fa-toggle-on fa-4x\" aria-hidden=\"true\"></i>
        </a>
    </div>
</header>
<main role=\"main-inner-wrapper\" class=\"container\">
    <div class=\"row\">
        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 \">
            <article role=\"pge-title-content\" class=\"blog-header\">
                <header>
                    <h2><span>News</span> Updates from studio</h2>
                </header>
                <p>Get all information about our studio from latest news posts & updates page.</p>
            </article>
            <ul class=\"grid-lod effect-2\" id=\"grid\">
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-2.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-4.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-2.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-4.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
                <li>
                    <section class=\"blog-content\">
                        <a href=\"detail.html\">
                            <figure>
                                <div class=\"post-date\">
                                    <span>24</span> July 2016
                                </div>
                                <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-2.jpg\"
                                     alt=\"\" class=\"img-responsive\" />
                            </figure>
                        </a>
                        <article>
                            This is a sample news post title content or sample post heading.
                        </article>
                    </section>
                </li>
            </ul>
        </div>
        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">
            <ul class=\"grid-lod effect-2\" id=\"grid\">

            </ul>
        </div>
        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">
            <ul class=\"pager\">
                <li class=\"previous disabled\" id=\"old\"><a href=\"#\"><span aria-hidden=\"true\">&larr;</span> Older</a></li>
                <li class=\"next\" id=\"next\"><a href=\"#\">Newer <span aria-hidden=\"true\">&rarr;</span></a></li>
            </ul>
        </div>
    </div>
</main>


<footer role=\"footer\">
    <h1>
        <a href=\"index.html\" title=\"demo blog\"><img src=\"/assets/images/logo.png\" title=\"demo blog\" alt=\"demo blog\" /></a>
    </h1>
    <ul role=\"social-icons\">
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>
        <li><a href=\"javascript:void(0)\"><i class=\"fa fa-flickr\" aria-hidden=\"true\"></i></a></li>
    </ul>
    <p class=\"copy-right\">&copy; 2019 menglong.. demo blog</p>
</footer>

<script src=\"/assets/js/jquery.min.js\" type=\"text/javascript\"></script>
<script src=\"/assets/js/bootstrap.min.js\" type=\"text/javascript\"></script>

<script src=\"/assets/js/html5shiv.js\" type=\"text/javascript\"></script>
<script src=\"/assets/js/template.js\" type=\"text/javascript\"></script>
<script id=\"listsContent\" type=\"text/html\">
    <<if data>>
        <<each data as value>>
            <li>
                <section class=\"blog-content\">
                    <a href=\"detail.html\">
                        <figure>
                            <div class=\"post-date\">
                                <span>24</span> July 2016
                            </div>
                            <img src=\"http://www.jq22.com/demo/avana201801261122/images/blog-images/blog-3.jpg\"
                                 alt=\"\" class=\"img-responsive\" />
                        </figure>
                    </a>
                    <article>
                        <<value.title>>
                    </article>
                </section>
            </li>
            <</each>>
        <</if>>
</script>
<script>
    \$(function () {
        template.defaults.rules[0].test = /<%(#?)((?:==|=#|[=-])?)[ \\t]*([\\w\\W]*?)[ \\t]*(-?)%>/;
        template.defaults.rules[1].test = /<<([@#]?)[ \\t]*(\\/?)([\\w\\W]*?)[ \\t]*>>/;
        var page=0;
        function get(page,callFunction){
            \$.get(\"/lists/\"+page+\"/2\", function (res) {
                if (res.code == 200) {
                    var html = template('listsContent', res);
                    \$('#grid').html(html)
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
            if (page<=0){
                \$('#old').addClass('disable');
                page=0;
            }else{
                \$('#old').removeClass('disable');
                page=page-1;
                get(page,function (ret) {
                    if (ret){
                        page=page-1;
                    }
                });
            }
        });
        \$('#next').click(function () {
            if (page<=0){
                \$('#next').addClass('disable');
            }else{
                \$('#next').removeClass('disable');
            }
            get(page,function (ret) {
                if (ret){
                    page=page+1;
                }
            });
        });
    });
</script>
</body>

</html>", "waterfall.html.twig", "/mnt/e/code/php/symfony4_demo/templates/waterfall.html.twig");
    }
}
