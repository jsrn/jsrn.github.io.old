---
layout: post
title: "Automatic Screenshot Cropping for Ultima Online"
description: ""
category: programming
tags: [cropping, python, image processing, text detection, images]
---
{% include JB/setup %}

To avoid the tedium of endless screenshot arrangement I created <a href="http://github.com/jsrn/Collage.py">Collage.py</a> to automatically tile cropped screenshots. This turned out to be a big time saver, and helped me to easily share screenshot compilations with others.

The process I currently use is still a long one, though. Each screenshot has to be cropped to the "interesting" parts before the folder can be fed into Collage.py for the end result. How great would it be if we could have a program determine the interesting parts for us? I've noticed that my screenshots are usually in one of two forms.

The first and most frequent type is a screenshot of someone saying something clever or interesting. Generally, these screenshots contain the text and the speaker, along with, ideally, those being spoken to and any interesting responses. We can assume the largest block of text on the screen is the focus of the screenshot. We also want the speaker in the shot, so the crop would have to, at least, extend downwards to encompass the speaker.

The second type of screenshot is the action shot. This generally features a bunch of people running about fighting, and centres on the player. These shots do not have to be cropped quite so tidily, and so we will focus on the first type for now.

To get screenshots of interesting text, we need some way to detect when interesting text is present. Fortunately, the focus of this exercise, the online roleplaying game Ultima Online, has very uniform text. We should be able to detect it in screenshots fairly simply.

**Things we know:**

 1. Screen resolution
 2. The bounds of the game window
 3. The text size and font used for in game speech

**Constraints:**

 1. Desired crop size

**Things we hope to detect:**

 1. Text placement
 2. Character placement

If we hope to detect text in the screenshots, it is very useful to us that we know the exact size and shape of all letters that can be rendered on screen. With this knowledge, we can compare any set of pixels to our letter templates to see which ones match. We can do this effectively by translating each letter outline to a matrix of integers corresponding to the letter size. A value of 1 means that the pixel is on, a value of 0 means that it is off. The following example is that of the lower case a:

<img src="/images/uoautocrop/template.png">

For each pixel, and for each matrix, we simply check that all pixels corresponding to a 1 in the matrix are the same colour. If so, we can somewhat reliably assume that the letter is present. In order to build the matrices, I copied the letters from the font into the following template:

<img src="/images/uoautocrop/letters.png">

*To be continued.*