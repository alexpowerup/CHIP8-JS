class RET extends Instruction{
    constructor(){
        super("RET", 0xFFFF, 0x00EE);
    }

    execute(inst, cpu){
        //Returns from subroutine:

        //1- set PC to the address set at the top of the stack
        cpu.PC = cpu.stack[cpu.SP];

        //2- decrement SP
        cpu.SP--;

        //Will add 2 to PC and continue where it left off
    }
}

Instruction.iset.push(RET);