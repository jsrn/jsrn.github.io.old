---
layout: page
---
{% include JB/setup %}

<div style="float: left; width: 60%;">
<h3>Main Projects</h3>

{% capture mainprojects %}
**[Project Brains](https://github.com/jsrn/ZUOmbies)**  
A zombie survival server built on top of RunUO, the Ultima Online server emulator. \[C#\]

**[Space Dash](https://github.com/jsrn/SpaceDash)**  
A top down space shooter. \[Java\]

**[A Baker's Tale](https://github.com/jsrn/A-Baker-s-Tale)**  
A tilebased RPG in the style of Final Fantasy 1-6. \[Java\]

**[TexBin](https://github.com/jsrn/TexBin)**  
Web front-end for pdflatex. \[PHP\]

**[Wargames](https://github.com/jsrn/Wargames)**  
I have been steadily working my way through various wargame challenges, and documenting my progress. \[various\]

**[Easy Preload](https://github.com/jsrn/EasyPreload)**  
Intercept system calls with LD_PRELOAD and your choice of customisable modules. \[Python/c\]

**Infection [Page](http://jsrn.github.io/infection)** / **[Repo](https://github.com/jsrn/InfectionSim)**  
Model the spread of disease through a randomly generated population. \[Javascript\]
{% endcapture %}
{{ mainprojects | markdownify }}
</div>

<div style="float: left; width: 40%;">
<h3>Recent Posts</h3>

{% capture recentposts %}
*These are the seven most recent posts. You can browse through the whole lot in the <a href="{{ BASE_PATH }}categories.html">category list</a> or <a href="{{ BASE_PATH }}archive.html">archive</a>.*

{% for post in site.posts limit: 7 %}
  {{ post.date | date_to_string }} >> [{{post.title}}]({{ BASE_PATH }}{{ post.url }})  
{% endfor %}
{% endcapture %}
{{ recentposts | markdownify }}
</div>