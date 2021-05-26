class JP_ADDR extends Instruction{
    constructor(){
        super("JP", 0xF000, 0x1000, [
            new Argument(0x0fff, 0, ArgumentType.ADDRESS)
        ], 0);
    }

    execute(inst, cpu){
        //Jump to Argument 1 memory address
        cpu.PC = this.args[0].value(inst, cpu);
    }
}

Instruction.iset.push(JP_ADDR);