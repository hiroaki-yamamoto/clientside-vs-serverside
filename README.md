# Server-side rendering vs Client-side rendering

## What This?
This repo includes code that behave the same behavior on server-side rendering
and client-side rendering, and I made this for just-testing...

## Why This?
When I saw reactjs, and other client-side frameworks, they are only saying
"faster", "fastest", "incredible", "awesome", something like "fast". I think
client side allows you to create WYSIWYG (What you see is what you get) things,
and I agree, but I felt it was not good idea to "generate" entire frontend code
on client-side only thru this experiment.

## What the code does?
The code is written in 2 (or 3) languages. One is Python with Flask, the other
is JSX with React. The behavior is almost the same, it generates 100000 elements
that is `<div><p>This is a test { index }</p></div>`.

## About Hardware spec
I used a PC that has the following hardware spec:
```
OS: Arch Linux x86_64
Kernel Release: 4.4.25-1-lts
WM: NoneDE: KDE
Packages: 1736
RAM: 4839 MB / 32143 MB
Processor Type: AMD FX(tm)-8350 Eight-Core Processor
$EDITOR: vim
Root: 47G / 469G (10%) (ext4)
Chromium Version: 53.0.2785.143
```

## Experiment Procedure
1. Run `ssr` server (i.e. server-side rendering) and access there from chromium.
(And watch timeline from console.)
2. Open `csr/index.html` from chromium (i.e. client-side rendering)
(And watch timeline from console.)

## Result
### Server Side
[![serverside]][serverside]
### Client Side
[![clientside]][clientside]

[serverside]: imgs/serverside.jpg
[clientside]: imgs/clientside.jpg

## Conclusion
As we can see the images, server-side rendering is still much faster than
client-side rendering. I know saying "this is definitively better than this"
is not good, but at least on this experiment, server-side rendering seems to be
superior to client-side rendering.

## For PRs
If you have a confidence that you can re-write client-side code to be faster
than serverside, try it and send me PR.

## License (MIT)
The MIT License (MIT)
Copyright (c) 2016- Hiroaki Yamamoto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
