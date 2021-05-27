class SYS_ADDR extends Instruction{
    constructor(){
        super("SYS", 0xF000, 0x0000, [
            new Argument(0x0fff, 0, ArgumentType.DATA)
        ]);
    }

    execute(inst, cpu){
        //Jump to a machine code routine at ARG1 (ignored since it's not usable nowadays)

        //Do nothing
    }
}

Instruction.iset.push(SYS_ADDR);