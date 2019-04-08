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

/* index.html.twig */
class __TwigTemplate_be58ec3e0fc5296ac82e699c5cfe80afc02c4aef213dba732adcc1ab6466aedc extends \Twig\Template
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
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "index.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <title>";
        // line 5
        echo twig_escape_filter($this->env, (isset($context["title"]) || array_key_exists("title", $context) ? $context["title"] : (function () { throw new RuntimeError('Variable "title" does not exist.', 5, $this->source); })()), "html", null, true);
        echo "</title>
    <link rel=\"stylesheet\" href=\"https://unpkg.com/element-ui@2.7.2/lib/theme-chalk/index.css\">
    <link rel=\"stylesheet\" href=\"/build/entry.css\">
</head>
<body>
<div id=\"app\"></div>
<script src=\"/build/entry.js\"></script>
<script src=\"/build/runtime.js\"></script>
<script src=\"/build/vendors~entry.js\"></script>
</body>
</html>";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 5,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
<head>
    <meta charset=\"UTF-8\">
    <title>{{ title }}</title>
    <link rel=\"stylesheet\" href=\"https://unpkg.com/element-ui@2.7.2/lib/theme-chalk/index.css\">
    <link rel=\"stylesheet\" href=\"/build/entry.css\">
</head>
<body>
<div id=\"app\"></div>
<script src=\"/build/entry.js\"></script>
<script src=\"/build/runtime.js\"></script>
<script src=\"/build/vendors~entry.js\"></script>
</body>
</html>", "index.html.twig", "/mnt/e/code/php/symfony4_demo/templates/index.html.twig");
    }
}
