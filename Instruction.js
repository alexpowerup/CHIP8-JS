class Instruction {
    static iset = [];

    constructor (name, mask, pattern, args=[], addPCAfterExec=2){
        this.name = name;
        this.mask = mask;
        this.pattern = pattern;
        this.args = args;
        this.addPCAfterExec = addPCAfterExec;
    }

    getAsm(inst){
        var asm = this.name;

        if(this.args.length>0){
            asm += " ";
            var argsTmp = [];
            this.args.forEach((v)=>{
                argsTmp.push(v.getValueTxt(inst));
            });

            asm += argsTmp.join(", ");
        }

        return asm;
    }

    checkPattern(inst){
        return (inst & this.mask) == this.pattern;
    }

    execute(inst, cpu){
        //can't run an undefined instruction
        console.error(`UNIMPLEMENTED INSTRUCTION: 0x${inst.toString(16).toUpperCase()}`);
        return false;
    }

    run(inst, cpu){
        if(!this.checkPattern(inst)){
            console.error(`INVALID INSTRUCTION FOR 0x${this.constructor.name.toString(16).toUpperCase()}: 0x${inst.toString(16).toUpperCase()} (expected pattern: 0x${this.pattern.toString(16).toUpperCase()})`);
            return false;
        }

        if(this.execute(inst, cpu)===false) return false;

        cpu.PC += this.addPCAfterExec;
    }

    static getInstruction(inst){
        var tmpInst = null;
        var found = false;
        Instruction.iset.forEach((i)=>{
            if(found) return;
            tmpInst = new i;
            if(tmpInst.checkPattern(inst)){
                found = true;
                return;
            }
            tmpInst = null;
        });
        return tmpInst;
    }

    static run(inst, cpu){
        //first identify the instruction associated with this opcode
       var tmpInst = Instruction.getInstruction(inst);

        if(!tmpInst){
            console.error("ILLEGAL INSTRUCTION: 0x" + inst.toString(16).toUpperCase());
            return false;
        }

        //then run it
        tmpInst.run(inst, cpu);

        console.log("INSTRUCTION 0x" + inst.toString(16).toUpperCase() +" DECODED AS " + tmpInst.getAsm(inst));

        return true;
    }

    static disasm(inst){
        var tmpInst = Instruction.getInstruction(inst);

        if(!tmpInst){
            console.error("INSTRUCTION PATTERN NOT FOUND: 0x" + inst.toString(16).toUpperCase());
            return '';
        }

        return tmpInst.getAsm(inst);
    }
}