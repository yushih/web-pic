
const IN = 
`.PS
ellipse "document";
arrow;
box "\fIpic\fP(1)"
arrow;
box width 1.2 "\fIgtbl\fP(1) or \fIgeqn\fP(1)" "(optional)" dashed;
arrow;
box "\fIgtroff\fP(1)";
arrow;
ellipse "PostScript"
.PE
`;

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

    startDpic(io);
    return io.getOutput();
}

