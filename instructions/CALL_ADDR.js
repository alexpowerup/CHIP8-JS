class CALL_ADDR extends Instruction{
    constructor(){
        super("CALL", 0xF000, 0x2000, [
            new Argument(0x0fff, 0, ArgumentType.DATA)
        ], 0);
    }

    execute(inst, cpu){
        //Calls a subroutine at ARG0:

        //1- Push current PC on the stack
        cpu.SP++;
        cpu.stack[cpu.SP] = cpu.PC;

        //2- Jump to ARG0
        cpu.PC = this.args[0].value(inst, cpu);
    }
}

Instruction.iset.push(CALL_ADDR);