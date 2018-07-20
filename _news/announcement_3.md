---
layout: post
title: ☞ New Website
excerpt: 
date: 2018-07-14
modified: 2018-07-18 
inline: false
---

Ta-da! This is it. What you are actually seeing _is_ the new website. 

I started developing it 👨🏻‍💻 last Saturday the 14th of July. By now, July 18 is pretty much ready to be published. 

First let me explain why I bothered. Haven't I already had a website that I spent so many hours developing earlier this year? In fact, a first version of my academic website was launched last February and [this is what it looked like.](/assets/img/2018/07/old-website.jpg)

It was built with Jekyll and hosted on Github based on a template generously made available by the [NCSU Libraries](https://github.com/NCSU-Libraries/jekyll-academic).

Although it came with some functionalities I really appreciated, more notably the resume page and the presentations with [reveal.js](https://revealjs.com/#/), I found myself constantly tweaking its design to suit it more to my liking. Meanwhile, the time I spent trying all sorts of different fonts and background-color combinations was not time spent enriching it with new content. 

In various degrees, we all react to things by the way they look. When my father was a kid and didn't like his meal, he didn't blame the food directly. He used to refuse to eat because "the plate was bent." Same with me. My refusal to update the previous version of my website was the result of it feeling "bent". With this new overhaul, I am already way more satisfied with it and ready to share it broader and wider than I did with its predecessor. Consequently, that will also make me more proactive growing it to a place gradually hosting all my projects[^1].

[^1]: Maybe on another occasion, I should write about all my previous blogs made on various CMS platforms since 2006.   

### Features 

1. Jekyll 

Jekyll, is a popular static website generator compatible and hosted for free on Github pages. What does this mean? In very simple terms it means that the website is a number of files put together in a folder with a very specific structure. Unlike CMS (Content Management Systems) such as WordPress, Drupal or Joomla, Jekyll doesn’t have a GUI (Graphical User Interface) back office. Jekyll is based on the idea of editing text files until they are ready to be published. A certain familiarity with the terminal and a few git commands are necessary in order to publish and update a Jekyll website.  

2. Github 

Github is a version control management system, adopted by the open source and digital humanities communities who value collaboration and transparency. Github allows teams to work on the same project (i.e. editing the same files) and it stores the version history of all the files of a project. If something went wrong, it is easily traceable and fixed because all the committed changes are saved. The committed versions of a Github repository are also public which means that anyone could copy them and contribute to them or fork and replicate them to build something different. 

3. Template 

That's the case with the template of this website. It is based upon [al-folio](https://github.com/alshedivat/al-folio) which is an iteration of [-folio](https://github.com/bogoli/-folio). On Github people share their expertise and help others improve their own technical skills by implementing and tweaking existing projects. 

4. Customization 

Among a number of tweaks –too many to list here– the main two addition to this template is the resume page (vitaæ on the navigation menu) and the reveal.js framework for online presentations. 

5. Future customizations

- Improve the responsiveness for mobile devices. 

- Create a categories archive [like this one](https://mmistakes.github.io/so-simple-theme/categories/).  

<small class="address p" style="float: right;">{% if page.modified %}Last updated on <time datetime="{{ page.modified | date: "%Y-%m-%d" }}">{{ page.modified | date: "%B %d, %Y" }}</time>{% endif %}.</small><br>