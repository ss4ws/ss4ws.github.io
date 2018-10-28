---
layout: post
title: I made my first bot!  
excerpt: Making Bots with Kate Compton's Tracery.io    
date: 2018-10-26 13:28:22 
modified:  
tags: Tracery, Making, Generative art 
comments: true
category: blog 
---

[Kate Compton](http://www.galaxykate.com/) a generative artist, programmer, inventor and PhD student at the University of California Santa Cruz kicked off this year's Fall Symposium at the Scholars' Lab co-organized by the folks at [Puzzle Poetry](http://puzzlepoesis.org).

“What happens when you give an algorithm eyes?” Kate asked. Well, then you start looking at them in the eyes. 

Drawing from Aristotle's, [Bot Poetics](https://vimeo.com/album/4684603/video/225566776) is an attempt to explain what bots are and [classify them](http://galaxykate.com/pdfs/galaxykate-handout-botpoetics.pdf) according to what they do. Each bot operates according to its own rules and serves a different purpose. A successful bot is one that doesn't only occupy space by repeating its operation over and over again but one that resonates with an audience. Hence the eyes, and its character.   

In order to build a successful bot, Kate has created an easy to use bot creator: [Tracery](www.tracery.io). Tracery eliminates the pain of coding by focusing on the **grammar**, the set of rules that will give your bot its character and command its behavior. Bots made with Tracery have an artisanal, homemade quality to them. What matters with Tracery bots is not their degree of sophistication but their character. With every little parameter added to the formula, Tracery's purpose is to make the eyes of your algorithm more and more expressive.  

During the workshop I built three bots, none of which is super expressive. They are just basic combinatory bots. 

Given the task, I thought appropriate to use the incipit of the [Manifesto Of Surrealism by André Breton (1924)](http://www2.hawaii.edu/~freeman/courses/phil330/MANIFESTO%20OF%20SURREALISM.pdf)): "So strong is the belief in life, in what is most fragile in life – real life, I mean – that in the end this belief is lost." My bot rewrites it, replacing the adjective "strong" and the noun "life" by pulling from [@dariusk's](https://github.com/dariusk/corpora) corpora of adjectives and nouns. 

The formula is super simple: 
~~~~
"origin": ["So #adj# is the belief in [myNoun:#noun#]#myNoun#, 
in what is most fragile in #myNoun# –real #myNoun#, I mean– 
that in the end this belief is lost.  \\#puzzlepoem"]
~~~~

And here is [the complete program](cheapbotsdonequick.com/source/ss4ws). Scroll down the page and press the refresh button to see it in action.