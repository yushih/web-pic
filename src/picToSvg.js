class IO {
    constructor () {
        this.reset();
    }
    
    reset () {
        this.input = "";
        this.ptr = 0;
        this.output = "";
    }

    getCollector () {
        return (code)=>{
            this.output += String.fromCharCode(code);
        }
    }

    getFeeder () {
        return ()=>{
            if (this.ptr >= this.input.length) {
                return null;
            } else {
                return this.input.charCodeAt(this.ptr++);
            }
        };
    }

    setInput (input) {
        this.input = input;
    }

    getOutput () {
        return this.output;
    }
}

function picToSvg (input) {
    const io = new IO();

    io.setInput(input);

    window.startDpic(io);
    return io.getOutput();
}

export default picToSvg;


export const IN = 
`.PS
ellipse "document";
arrow;
box "pic(1)"
arrow;
box width 1.2 "tbl(1) or eqn(1)" "(optional)" dashed;
arrow;
box "troff(1)";
arrow;
ellipse "PostScript"
.PE
`;

export const OUT =
`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Creator: dpic version 2018.08.15 option -v for SVG 1.1 -->
<!-- width="599" height="52" -->
<svg
 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
 xml:space="preserve"
 style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision;
 image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
 width="598.4px" height="51.2px"
 viewBox="0 0 598.4 51.2"
 font-size="11pt" text-anchor="middle"
 stroke="black" stroke-miterlimit="10" stroke-width="1.066667" fill="none">
<g>
<ellipse cx="37.066667" cy="24.533333" rx="36" ry="24" />
<text font-size="11pt" stroke-width="0.2pt" fill="black" x="37.066667" y="29.373333">document</text>
<polygon stroke-width="0" fill="black"
 points="111.466667,22.133333 121.066667,24.533333
111.466667,26.933333" />
<line x1="73.066667" y1="24.533333" x2="118.867677" y2="24.533333" />
<rect x="121.066667" y="0.533333" width="72" height="48" />
<text font-size="11pt" stroke-width="0.2pt" fill="black" x="157.066667" y="29.373333">pic(1)</text>
<polygon stroke-width="0" fill="black"
 points="231.466667,22.133333 241.066667,24.533333
231.466667,26.933333" />
<line x1="193.066667" y1="24.533333" x2="238.867677" y2="24.533333" />
<rect stroke-dasharray="5.6,4"
 x="241.066667" y="0.533333" width="115.2" height="48" />
<text font-size="11pt" stroke-width="0.2pt" fill="black" x="298.666667" y="22.04">tbl(1) or eqn(1)</text>
<text font-size="11pt" stroke-width="0.2pt" fill="black" x="298.666667" y="36.706667">(optional)</text>
<polygon stroke-width="0" fill="black"
 points="394.666667,22.133333 404.266667,24.533333
394.666667,26.933333" />
<line x1="356.266667" y1="24.533333" x2="402.067677" y2="24.533333" />
<rect x="404.266667" y="0.533333" width="72" height="48" />
<text font-size="11pt" stroke-width="0.2pt" fill="black" x="440.266667" y="29.373333">troff(1)</text>
<polygon stroke-width="0" fill="black"
 points="514.666667,22.133333 524.266667,24.533333
514.666667,26.933333" />
<line x1="476.266667" y1="24.533333" x2="522.067677" y2="24.533333" />
<ellipse cx="560.266667" cy="24.533333" rx="36" ry="24" />
<text font-size="11pt" stroke-width="0.2pt" fill="black" x="560.266667" y="29.373333">PostScript</text>
</g></svg>`;
