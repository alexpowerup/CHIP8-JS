class CALL_ADDR extends Instruction{
    constructor(){
        super("CALL", 0xF000, 0x2000, [
            new Argument(0x0fff, 0, ArgumentType.DATA)
        ], 0);
    }

    execute(inst, cpu){
        //Calls a subroutine at ARG0:

        //1- Push current PC on the stack
        cpu.stack[cpu.SP] = cpu.PC;
        cpu.SP++;

        //2- Jump to ARG0
        cpu.PC = this.args[0].value(inst, cpu);

        /**
         * EXPLANATION:
         * 
         * CHIP 8 uses an empty stack convention, meaning the SP always points to a null value ready to be filled.
         * 
         * For example:
         * ----------
         * 0x0000
         * ----------
         * 0x0000
         * ----------
         * 0x0000     <- SP (0x0)
         * ----------
         * 
         * When something is stored on the stack, it's placed on the current position where SP is pointing to, and then SP is incremented.
         * 
         * >CALL 0x400
         * ----------
         * 0x0000
         * ----------
         * 0x0000     <- SP (0x1)
         * ----------
         * 0x0400
         * ----------
         * 
         * So, to store a new value, we store it at the position marked by SP, then we add 1 to SP.
         * Pushing to the stack when SP is beyond its max value (0x10 and onwards (greater than 0xF)) triggers a stack overflow error since only 16 places are available.
         */
    }
}

Instruction.iset.push(CALL_ADDR);