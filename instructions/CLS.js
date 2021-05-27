class CLS extends Instruction{
    constructor(){
        super("CLS", 0xFFFF, 0x00E0);
    }

    execute(inst, cpu){
        //Clears the screen (sets every screen bit to 0)

        cpu.clearScreen();
    }
}

Instruction.iset.push(CLS);