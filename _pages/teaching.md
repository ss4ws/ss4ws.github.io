---
layout: default
title: teaching
permalink: /teaching/
---

<div class="header-bar">
  <h1>teaching</h1>
  <h2>teaching statement, syllabi, and various teaching materials.</h2>
</div>    

<div>    
  <small><em>Nota Bene:</em> Before I moved to this <a href="https://jekyllrb.com">Jekyll</a> website in the summer of 2018, I had created a number of course websites with WordPress and Digication. Here are two sample course websites created with WordPress: <a href="https://pages.shanti.virginia.edu/14Sp_FREN_1020-002_CGAS/">FREN 1020 Spring 2014</a> & <a href="https://pages.shanti.virginia.edu/15F_FREN_2020-001_CGAS/syllabus/">FREN 2020 Fall 2015.</a> And here is a sample course website created with Digication: <a href="https://uva.digication.com/cestlauviea/Welcome/">FREN 2020 Spring 2016.</a></small>
</div>

<div class="home">
  <!-- <h1 class="page-heading">Presentations</h1> -->
  <ul class="post-list">
    {% for post in site.categories.teaching %}
      <li>
        <span class="post-meta">{{ post.date  | date: "%b %-d, %Y" }}</span>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <span class="address p">{{ post.excerpt | strip_html }}</span>
      </li>
    {% endfor %}
  </ul>
  <!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p> -->
</div>