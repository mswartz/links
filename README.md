# A simple study of how we use links
#### An experiment in non-contextual linking

Read this on gh-pages: [A Simple Study of How We Use Links](http://mswartz.github.io/links/)

I really enjoyed this Medium post titled ["Links Are Broken" by Sebastian Kersten](https://medium.com/de-correspondent/links-are-broken-these-three-alternatives-have-improved-our-readers-reading-experience-796c302c8930) of [De Correspondent, a publication in the Netherlands](https://decorrespondent.nl/home). It was smart, and showed some of the interesting things they're doing at that publication. I was thinking about their solutions (which are all really neat), and I had an idea for a simple link mechanism. I totally agreed with the guy that links can be very distracting mid-text. But is there a simple way around this without adding too much more UI?

I had a very very simple idea. Probably too simple, it's almost embarassing. I almost didn't put this out there, but it was fun to make and design (there are more lines of CSS than anything).

*The idea is to just scrape a body of text for the links, and add them to a module at the end (or somewhere) to collect them all.*

I just wrote a few lines of JS to look at `.main-text` and find all the links. It stores them in an array, and then poops them into the `.links` div below. [You can see the blob of the JS here.](https://github.com/mswartz/links/blob/master/app.js)

Also, did you notice that all the links have very descriptive text? It makes for more pleasing footnotes when they're all gathered, instead of a bunch of "here" and "click here." It's a good habit, [adding more descriptive text to links improves accessibility.](http://blog.silktide.com/2013/01/i-thought-title-text-improved-accessibility-i-was-wrong/)

That's it! I'm sure you could do all kinds of interesting stuff with something like this, but this is a start. 
