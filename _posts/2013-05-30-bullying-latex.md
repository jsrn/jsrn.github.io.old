---
layout: post
title: "Bullying LaTeX"
tagline: "for the greater good"
description: ""
category: security
tags: [latex, pdf, front end]
---
{% include JB/setup %}

Today I started a new project. Several different things we use at work need to produce PDF reports automatically, and we decided that it would be great to have a common interface through which to do so. Having used LaTeX for much of my academic (if I may be so bold as to apply the term to my ravings) writing at university, it seemed the natural choice. However, who wants to bundle several hundred mb (at least) with each application that needs to generate a pdf? Nobody, that's who.

I'm not the first person to write a web interface to LaTeX, but [here's my crack at it](https://github.com/jsrn/TexBin).

I personally think it's sort of neat for a few hours work. I wouldn't want to unleash it on the internet, though. Who knows what sort of mischief one can get up to with unbridled access to a LaTeX interpreter? Probably lots.

#### Code Execution

In TeX, the `\write18` command is used to pass a command to the operating system. This is a pretty big security risk, so TeXLive and MiKTeX disable it by default. You can re-enable it with the command line option `--shell-escape` for TeXLive, or `--enable-write18` for MiKTeX 2.9.

    \documentclass[11pt]{article}
    \begin{document}
    Hello, world!
    \write18{touch evil}
    \end{document}

`pdflatex write18.tex; ls`

    write18.aux  write18.log  write18.pdf  write18.tex

`pdflatex --shell-escape write18.tex; ls`

    evil  write18.aux  write18.log  write18.pdf  write18.tex

You can get up to similar mischief with `\input`, but again, it is not enabled by default.

    \input{|"cat /etc/passwd"} 

So by default, we don't need to worry too much about strangers sending commands to our system.

#### Denial of Service

Any looping construct can be used to needlessly tie up resources:

    \loop\iftrue\repeat

This can also be achieved by defining recursive macros:

    \def\evil{\evil}

I attempted to extend the recursive macro into a fork bomb:

    \def\fork{\fork\fork}
    \fork

but this caused TeX to quickly spit out an error message:

	! TeX capacity exceeded, sorry [input stack size=5000].

#### Conclusions

So far, I'm yet to get any meaningful results on either MiKTeX 2.9 or TeX 3.1415926 (TeX Live 2009/Debian), without deliberately bypassing the security measures. A dedicated "attacker" could, in theory, slow down the system with enough loops, but that's the extent of what I have found so far.

#### Recommended Reading

[Don't take LaTeX files from strangers](http://cseweb.ucsd.edu/~hovav/dist/tex-login.pdf) - Checkoway, Shacham, Rescorla - 2011

[What does write18 mean?](http://www.texdev.net/2009/10/06/what-does-write18-mean) - Joseph Wright - 2009