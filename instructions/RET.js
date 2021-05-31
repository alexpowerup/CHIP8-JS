class RET extends Instruction{
    constructor(){
        super("RET", 0xFFFF, 0x00EE, [], 0);
    }

    execute(inst, cpu){
        //Returns from subroutine:

        //1- decrement SP
        cpu.SP--;

        //2- set PC to the address set at the top of the stack
        cpu.PC = cpu.stack[cpu.SP];

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
         * So, to get the topest stack value, we subtract 1 from it first, then read the stack based on the resulting value.
         * Poping from the stack when SP is 0 triggers a stack underflow error since the stack's minimum position is 0.
         */
    }
}

Instruction.iset.push(RET);