export default class Character {
    constructor(name, type) {
        if (!(typeof name === 'string')) {
            throw new Error('name должен быть string')
        }
        if ((name.length < 2) || (name.length > 10)) {
            throw new Error('name должен быть длиной от 2 до 10 символов')
        }
        if (
            !['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
            .includes(type)) {
            throw new Error(`type должен быть одним из разрешенных типов`)
        }


        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = null;
        this.defence = null;
    }
}