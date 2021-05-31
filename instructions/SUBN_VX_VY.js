class SUBN_VX_VY extends Instruction{
    constructor(){
        super("SUBN", 0xF00F, 0x8007, [
            new Argument(0x0f00, 8, ArgumentType.REGISTER),
            new Argument(0x00f0, 4, ArgumentType.REGISTER)
        ]);
    }

    execute(inst, cpu){
        //Subtract register Y and register X and stores the result at register X
        //If Y is greater than X, store 1 at register 0xF; if not, store 0
        var arg0 = this.args[0].rawValue(inst); //X
        var arg1 = this.args[1].rawValue(inst); //Y

        cpu.registers[0xF] = (cpu.registers[arg1] > cpu.registers[arg0]) ? 1 : 0;

        cpu.registers[arg0] = cpu.registers[arg1] - cpu.registers[arg0];
    }
}

Instruction.iset.push(SUBN_VX_VY);